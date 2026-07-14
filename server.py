from flask import Flask, request, jsonify, send_from_directory
import sqlite3
import json
import os
from datetime import datetime
from functools import wraps

app = Flask(__name__, static_folder='/home/ubuntu/haogejiayou')
DB_PATH = '/home/ubuntu/haogejiayou/data.db'
PARENT_PASSWORD = 'haogejiayou'  # 家长查看密码


def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        CREATE TABLE IF NOT EXISTS records (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id TEXT NOT NULL,
            question_id TEXT NOT NULL,
            subject TEXT NOT NULL,
            topic TEXT NOT NULL,
            difficulty INTEGER NOT NULL,
            selected_answer INTEGER NOT NULL,
            correct_answer INTEGER NOT NULL,
            is_correct INTEGER NOT NULL,
            timestamp INTEGER NOT NULL,
            time_spent INTEGER NOT NULL
        )
    ''')
    c.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            nickname TEXT,
            created_at INTEGER DEFAULT 0
        )
    ''')
    conn.commit()
    conn.close()


@app.route('/')
def index():
    return send_from_directory('/home/ubuntu/haogejiayou', 'index.html')


@app.route('/question-bank.js')
def serve_bank_js():
    return send_from_directory('/home/ubuntu/haogejiayou', 'question-bank.js')


@app.route('/question-bank.json')
def serve_bank_json():
    return send_from_directory('/home/ubuntu/haogejiayou', 'question-bank.json')


@app.route('/api/records', methods=['POST'])
def save_records():
    data = request.json or {}
    user_id = data.get('user_id', 'default')
    records = data.get('records', [])

    if not records:
        return jsonify({'success': True, 'count': 0})

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('INSERT OR IGNORE INTO users (id) VALUES (?)', (user_id,))
    c.executemany('''
        INSERT INTO records (user_id, question_id, subject, topic, difficulty, selected_answer, correct_answer, is_correct, timestamp, time_spent)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', [
        (user_id, r.get('questionId'), r.get('subject'), r.get('topic'), r.get('difficulty', 1),
         r.get('selectedAnswer', 0), r.get('correctAnswer', 0), 1 if r.get('isCorrect') else 0,
         r.get('timestamp', 0), r.get('timeSpent', 0))
        for r in records
    ])
    conn.commit()
    conn.close()
    return jsonify({'success': True, 'count': len(records)})


@app.route('/api/records', methods=['GET'])
def get_records():
    user_id = request.args.get('user_id', 'default')
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''
        SELECT question_id, subject, topic, difficulty, selected_answer, correct_answer, is_correct, timestamp, time_spent
        FROM records WHERE user_id = ? ORDER BY timestamp ASC
    ''', (user_id,))
    rows = c.fetchall()
    conn.close()

    records = []
    for r in rows:
        records.append({
            'questionId': r[0], 'subject': r[1], 'topic': r[2], 'difficulty': r[3],
            'selectedAnswer': r[4], 'correctAnswer': r[5], 'isCorrect': bool(r[6]),
            'timestamp': r[7], 'timeSpent': r[8]
        })
    return jsonify(records)


@app.route('/api/leaderboard', methods=['GET'])
def get_leaderboard():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    # Overall leaderboard
    c.execute('''
        SELECT user_id, COUNT(*) as total, SUM(is_correct) as correct,
               COUNT(DISTINCT DATE(timestamp/1000, 'unixepoch')) as days,
               MAX(timestamp) as last_time
        FROM records GROUP BY user_id ORDER BY total DESC
    ''')
    rows = c.fetchall()
    conn.close()

    leaderboard = []
    for r in rows:
        uid, total, correct, days, last = r
        pct = round(correct / total * 100) if total else 0
        leaderboard.append({
            'user_id': uid,
            'total': total,
            'correct': correct,
            'accuracy': pct,
            'days': days,
            'last_time': last
        })
    return jsonify(leaderboard)


@app.route('/parent', methods=['GET'])
def parent_view():
    pwd = request.args.get('pwd', '')
    if pwd != PARENT_PASSWORD:
        return '''<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>家长查看</title>
<style>body{font-family:sans-serif;background:#1a1a2e;display:flex;justify-content:center;align-items:center;min-height:100vh;margin:0;}
.card{background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:20px;padding:40px;text-align:center;}
h2{color:#fff;margin-bottom:20px;}input{width:100%;padding:14px;border-radius:12px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);color:#fff;font-size:16px;text-align:center;margin-bottom:12px;outline:none;}
button{width:100%;padding:14px;background:linear-gradient(135deg,#ff6b6b,#ee5a24);color:#fff;font-size:16px;font-weight:800;border:none;border-radius:12px;cursor:pointer;}
</style></head><body><div class="card"><h2>🔐 家长查看面板</h2><form><input name="pwd" type="password" placeholder="请输入密码"><button type="submit">查看数据</button></form></div></body></html>''', 401

    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('SELECT id FROM users')
    users = [row[0] for row in c.fetchall()]

    # Overall stats per user
    c.execute('''
        SELECT user_id, COUNT(*) as total, SUM(is_correct) as correct,
               COUNT(DISTINCT DATE(timestamp/1000, 'unixepoch')) as days,
               MAX(timestamp) as last_time
        FROM records GROUP BY user_id ORDER BY last_time DESC
    ''')
    stats = c.fetchall()

    # Per subject stats
    c.execute('''
        SELECT user_id, subject, COUNT(*) as total, SUM(is_correct) as correct
        FROM records GROUP BY user_id, subject ORDER BY user_id, subject
    ''')
    subj_raw = c.fetchall()

    # Per topic stats
    c.execute('''
        SELECT user_id, topic, COUNT(*) as total, SUM(is_correct) as correct
        FROM records GROUP BY user_id, topic ORDER BY total DESC
    ''')
    topic_raw = c.fetchall()

    # Recent 30 records
    c.execute('''
        SELECT user_id, subject, topic, difficulty, is_correct, timestamp, time_spent
        FROM records ORDER BY timestamp DESC LIMIT 30
    ''')
    recent_raw = c.fetchall()
    conn.close()

    diff_labels = {1: '简单', 2: '中等', 3: '困难'}
    subj_names = {'math': '数学', 'chinese': '语文', 'english': '英语'}
    subj_icons = {'math': '📐', 'chinese': '📖', 'english': '🌍'}

    # Build rows
    rows_html = ''
    for s in stats:
        uid, total, correct, days, last = s
        pct = round(correct / total * 100) if total else 0
        pct_class = 'good' if pct >= 67 else ('mid' if pct >= 33 else 'bad')
        last_date = datetime.fromtimestamp(last / 1000).strftime('%m/%d %H:%M') if last else '从未'
        rows_html += f'<tr><td>{uid}</td><td>{total}</td><td class="{pct_class}">{pct}%</td><td>{days}天</td><td>{last_date}</td></tr>'

    # Subject breakdown
    subj_html = ''
    for sr in subj_raw:
        uid, subj, total, correct = sr
        pct = round(correct / total * 100) if total else 0
        bar_class = {'math': 'math-bar', 'chinese': 'chinese-bar', 'english': 'english-bar'}.get(subj, '')
        subj_html += f'''
        <div class="subj-row">
          <span>{subj_icons.get(subj,'📝')} {subj_names.get(subj,subj)}</span>
          <div class="bar-wrap"><div class="bar-inner {bar_class}" style="width:{pct}%"></div></div>
          <span style="color:#fff">{correct}/{total} ({pct}%)</span>
        </div>'''

    # Topic breakdown (weakest first)
    topic_html = ''
    topics_sorted = sorted(topic_raw, key=lambda x: x[3]/x[2] if x[2] else 1)
    for tr in topics_sorted:
        uid, topic, total, correct = tr
        pct = round(correct / total * 100) if total else 0
        color = '#00b894' if pct >= 67 else ('#feca57' if pct >= 33 else '#ff6b6b')
        topic_html += f'''
        <div class="topic-row">
          <span>📝 {topic}</span>
          <div class="bar-wrap"><div class="bar-inner" style="width:{pct}%;background:{color}"></div></div>
          <span style="color:{color};font-weight:700">{correct}/{total}</span>
        </div>'''

    # Recent records
    recent_html = ''
    for rr in recent_raw:
        uid, subj, topic, diff, is_correct, ts, spent = rr
        dt = datetime.fromtimestamp(ts / 1000).strftime('%m/%d %H:%M')
        icon = '✅' if is_correct else '❌'
        sec = round(spent / 1000)
        recent_html += f'<div class="log-item">{icon} {subj_icons.get(subj,"")} {topic} ({diff_labels.get(diff,"?")}) <span style="color:#8892b0">{dt} · {sec}秒</span></div>'

    return f'''<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>家长查看 · 学习数据</title>
<style>
*{{margin:0;padding:0;box-sizing:border-box}}
body{{font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;background:#0f0f1a;color:#fff;padding:20px;max-width:600px;margin:0 auto}}
h1{{color:#feca57;font-size:22px;margin-bottom:4px}}
.subtitle{{color:#8892b0;font-size:13px;margin-bottom:24px}}
h2{{color:#8892b0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:20px 0 10px}}
table{{width:100%;border-collapse:collapse;margin-bottom:16px}}
th,td{{padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.08);text-align:left;font-size:14px}}
th{{color:#8892b0;font-size:12px;font-weight:600}}
.good{{color:#00b894;font-weight:700}}.mid{{color:#feca57;font-weight:700}}.bad{{color:#ff6b6b;font-weight:700}}
.subj-row,.topic-row{{display:flex;align-items:center;gap:10px;background:rgba(255,255,255,0.04);border-radius:10px;padding:10px 14px;margin-bottom:6px;font-size:14px}}
.subj-row span:first-child,.topic-row span:first-child{{flex:1;color:#ccd6f6}}
.bar-wrap{{width:60px;height:6px;background:rgba(255,255,255,0.08);border-radius:3px;overflow:hidden}}
.bar-inner{{height:100%;border-radius:3px;transition:width .5s}}
.math-bar{{background:linear-gradient(90deg,#ff6b6b,#ee5a24)}}
.chinese-bar{{background:linear-gradient(90deg,#48dbfb,#0abde3)}}
.english-bar{{background:linear-gradient(90deg,#feca57,#ff9f43)}}
.log-item{{background:rgba(255,255,255,0.04);border-radius:8px;padding:8px 12px;margin-bottom:4px;font-size:13px;color:#ccd6f6}}
.refresh{{display:inline-block;margin-top:20px;color:#48dbfb;font-size:13px;text-decoration:none}}
</style></head><body>
<h1>👨‍👩‍👧‍👦 王汝豪学习数据</h1>
<div class="subtitle">更新于 {datetime.now().strftime("%m/%d %H:%M")} · <a href="?pwd=haogejiayou" class="refresh">刷新</a></div>

<h2>📊 总览</h2>
<table><tr><th>用户</th><th>总题数</th><th>正确率</th><th>学习天数</th><th>最近答题</th></tr>{rows_html}</table>

<h2>📈 各科掌握度</h2>
{subj_html}

<h2>🔍 知识点详情（薄弱优先）</h2>
{topic_html}

<h2>📋 最近答题</h2>
{recent_html}

<p style="text-align:center;color:#8892b0;font-size:12px;margin-top:24px">王汝豪每天进步一点点 💪</p>
</body></html>'''


if __name__ == '__main__':
    init_db()
    app.run(host='0.0.0.0', port=80, debug=False, threaded=True)

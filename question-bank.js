// 初中语数英题库 v3.0 - 三级难度体系
// 此文件由 question-bank.json 自动生成
const QUESTION_BANK = {
  "meta": {
    "version": "3.0",
    "description": "初中语数英题库 - 三级难度体系，适合30-80分段学生",
    "targetGrade": "初二升初三",
    "region": "广东",
    "total": 218
  },
  "subjects": {
    "math": {
      "name": "数学",
      "icon": "📐"
    },
    "chinese": {
      "name": "语文",
      "icon": "📖"
    },
    "english": {
      "name": "英语",
      "icon": "🌍"
    }
  },
  "topics": {
    "math-rational-add": {
      "name": "有理数加法",
      "subject": "math",
      "level": 1
    },
    "math-rational-sub": {
      "name": "有理数减法",
      "subject": "math",
      "level": 1
    },
    "math-rational-mul": {
      "name": "有理数乘法",
      "subject": "math",
      "level": 1
    },
    "math-rational-div": {
      "name": "有理数除法",
      "subject": "math",
      "level": 1
    },
    "math-rational-abs": {
      "name": "绝对值",
      "subject": "math",
      "level": 1
    },
    "math-rational-mix": {
      "name": "有理数混合运算",
      "subject": "math",
      "level": 2
    },
    "chinese-typo": {
      "name": "易错字词",
      "subject": "chinese",
      "level": 1
    },
    "chinese-grammar": {
      "name": "病句与关联词",
      "subject": "chinese",
      "level": 1
    },
    "chinese-idiom": {
      "name": "成语理解",
      "subject": "chinese",
      "level": 1
    },
    "english-be": {
      "name": "be动词",
      "subject": "english",
      "level": 1
    },
    "english-present": {
      "name": "一般现在时",
      "subject": "english",
      "level": 1
    },
    "english-words": {
      "name": "核心词汇",
      "subject": "english",
      "level": 1
    },
    "math-integer-op": {
      "name": "整式的加减",
      "subject": "math",
      "level": 1
    },
    "math-linear-eq": {
      "name": "一元一次方程",
      "subject": "math",
      "level": 1
    },
    "math-power": {
      "name": "乘方运算",
      "subject": "math",
      "level": 2
    },
    "math-frac": {
      "name": "分数运算",
      "subject": "math",
      "level": 2
    },
    "chinese-poem": {
      "name": "古诗默写与理解",
      "subject": "chinese",
      "level": 1
    },
    "chinese-classical": {
      "name": "文言文实词",
      "subject": "chinese",
      "level": 1
    },
    "chinese-lit": {
      "name": "文学常识",
      "subject": "chinese",
      "level": 1
    },
    "chinese-typo2": {
      "name": "易错字词(进阶)",
      "subject": "chinese",
      "level": 2
    },
    "english-phonetic": {
      "name": "音标与拼读",
      "subject": "english",
      "level": 1
    },
    "english-article": {
      "name": "冠词 a/an/the",
      "subject": "english",
      "level": 1
    },
    "english-pronoun": {
      "name": "人称代词与物主代词",
      "subject": "english",
      "level": 1
    },
    "english-prep": {
      "name": "方位介词",
      "subject": "english",
      "level": 1
    },
    "english-can": {
      "name": "情态动词 can/must",
      "subject": "english",
      "level": 1
    },
    "english-present-cont": {
      "name": "现在进行时",
      "subject": "english",
      "level": 2
    }
  },
  "questions": [
    {
      "id": "m-001",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 1,
      "question": "计算：(-3) + 5 = ？",
      "options": [
        "A. -8",
        "B. -2",
        "C. 2",
        "D. 8"
      ],
      "answer": 2,
      "explanation": "负数加正数：用大的减小的，取绝对值大的符号。\n5 > 3，所以 5 - 3 = 2，5是正数 → 结果是 2。"
    },
    {
      "id": "m-002",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 1,
      "question": "计算：(-8) + (-2) = ？",
      "options": [
        "A. -10",
        "B. -6",
        "C. 6",
        "D. 10"
      ],
      "answer": 0,
      "explanation": "两个负数相加：把绝对值相加，结果还是负数。\n|-8| + |-2| = 8 + 2 = 10，结果是 -10。\n口诀：同号相加，取相同的符号。"
    },
    {
      "id": "m-003",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 1,
      "question": "计算：6 + (-4) = ？",
      "options": [
        "A. -10",
        "B. -2",
        "C. 2",
        "D. 10"
      ],
      "answer": 2,
      "explanation": "正数加负数：用大的减小的。\n6 > 4，所以 6 - 4 = 2，6是正数 → 结果是 2。"
    },
    {
      "id": "m-004",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 1,
      "question": "计算：(-4) + (-6) + 3 = ？",
      "options": [
        "A. -13",
        "B. -7",
        "C. 5",
        "D. 13"
      ],
      "answer": 1,
      "explanation": "先算前两个：(-4) + (-6) = -10\n再算：(-10) + 3 = -7\n\n一步步来，先合并同号的！"
    },
    {
      "id": "m-005",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 1,
      "question": "计算：5 - 8 = ？",
      "options": [
        "A. -3",
        "B. 3",
        "C. -13",
        "D. 13"
      ],
      "answer": 0,
      "explanation": "5 减 8 不够减，差 3，所以结果是 -3。\n即：5 - 8 = -(8 - 5) = -3。"
    },
    {
      "id": "m-006",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 1,
      "question": "计算：(-3) - 5 = ？",
      "options": [
        "A. 2",
        "B. -2",
        "C. 8",
        "D. -8"
      ],
      "answer": 3,
      "explanation": "(-3) - 5：从 -3 开始向左走 5 步 = -8。\n或者理解成：(-3) + (-5) = -8\n减去一个正数，等于加上它的相反数。"
    },
    {
      "id": "m-007",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 1,
      "question": "计算：(-2) - (-5) = ？",
      "options": [
        "A. -7",
        "B. -3",
        "C. 3",
        "D. 7"
      ],
      "answer": 2,
      "explanation": "减去一个负数，等于加上它的相反数！\n(-2) - (-5) = (-2) + 5 = 3\n口诀：负负得正，减负变加正。"
    },
    {
      "id": "m-008",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 1,
      "question": "计算：7 - (-3) = ？",
      "options": [
        "A. -10",
        "B. -4",
        "C. 4",
        "D. 10"
      ],
      "answer": 3,
      "explanation": "减去负数 = 加正数！\n7 - (-3) = 7 + 3 = 10\n想象一下：减去一个负的，等于变多了。"
    },
    {
      "id": "m-009",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 1,
      "question": "计算：(-2) × (-6) = ？",
      "options": [
        "A. -12",
        "B. -8",
        "C. 8",
        "D. 12"
      ],
      "answer": 3,
      "explanation": "口诀：同号得正，异号得负。\n两个都是负数（同号）→ 结果为正。\n2 × 6 = 12，所以 (-2) × (-6) = 12。"
    },
    {
      "id": "m-010",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 1,
      "question": "计算：(-4) × 3 = ？",
      "options": [
        "A. -12",
        "B. -7",
        "C. 7",
        "D. 12"
      ],
      "answer": 0,
      "explanation": "口诀：同号得正，异号得负。\n一负一正（异号）→ 结果为负。\n4 × 3 = 12，所以 (-4) × 3 = -12。"
    },
    {
      "id": "m-011",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 1,
      "question": "计算：(-1) × (-1) × (-1) = ？",
      "options": [
        "A. 1",
        "B. -1",
        "C. 3",
        "D. -3"
      ],
      "answer": 1,
      "explanation": "有三个负数相乘！\n规则：奇数个负号 → 结果为负；偶数个负号 → 结果为正。\n3是奇数，所以 (-1) × (-1) × (-1) = -1。"
    },
    {
      "id": "m-012",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 2,
      "question": "计算：(-2) × 3 × (-5) = ？",
      "options": [
        "A. -30",
        "B. -10",
        "C. 10",
        "D. 30"
      ],
      "answer": 3,
      "explanation": "先看有几个负号：-2 和 -5 是两个负号 → 偶数个 → 结果为正。\n2 × 3 × 5 = 30，所以答案是 30。\n也可以一步步算：(-2) × 3 = -6，(-6) × (-5) = 30。"
    },
    {
      "id": "m-013",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 1,
      "question": "计算：12 ÷ (-4) = ？",
      "options": [
        "A. 3",
        "B. -3",
        "C. 8",
        "D. -8"
      ],
      "answer": 1,
      "explanation": "除法口诀和乘法一样：同号得正，异号得负。\n12正、-4负 → 异号 → 结果为负。\n12 ÷ 4 = 3，所以 12 ÷ (-4) = -3。"
    },
    {
      "id": "m-014",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 1,
      "question": "计算：(-15) ÷ (-5) = ？",
      "options": [
        "A. -3",
        "B. 3",
        "C. -20",
        "D. 20"
      ],
      "answer": 1,
      "explanation": "两个都是负数（同号）→ 结果为正。\n15 ÷ 5 = 3，所以 (-15) ÷ (-5) = 3。"
    },
    {
      "id": "m-015",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 2,
      "question": "计算：(-1/2) ÷ 2 = ？",
      "options": [
        "A. -1/4",
        "B. 1/4",
        "C. -1",
        "D. 1"
      ],
      "answer": 0,
      "explanation": "(-1/2) ÷ 2 = (-1/2) × (1/2) = -1/4\n除以一个数，等于乘以它的倒数。\n2 的倒数是 1/2。"
    },
    {
      "id": "m-016",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 1,
      "question": "|-7| = ？",
      "options": [
        "A. -7",
        "B. 7",
        "C. 0",
        "D. ±7"
      ],
      "answer": 1,
      "explanation": "绝对值表示一个数到0的距离，永远是正数或0。\n-7 到 0 的距离是 7，所以 |-7| = 7。\n绝对值永远 ≥ 0！"
    },
    {
      "id": "m-017",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 1,
      "question": "|3| - |-2| = ？",
      "options": [
        "A. -5",
        "B. -1",
        "C. 1",
        "D. 5"
      ],
      "answer": 2,
      "explanation": "|3| = 3，|-2| = 2\n所以 |3| - |-2| = 3 - 2 = 1。\n先把每个绝对值算出来，再看顺序运算。"
    },
    {
      "id": "m-018",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 2,
      "question": "已知 |a| = 5，则 a = ？",
      "options": [
        "A. 5",
        "B. -5",
        "C. 5 或 -5",
        "D. 无法确定"
      ],
      "answer": 2,
      "explanation": "绝对值等于 5 的数有两个：5 和 -5。\n因为 |5| = 5，|-5| = 5。\n注意：绝对值相等的数，可能一正一负！"
    },
    {
      "id": "m-019",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：(-3) + 5 × 2 = ？",
      "options": [
        "A. 4",
        "B. 7",
        "C. 10",
        "D. 16"
      ],
      "answer": 1,
      "explanation": "运算顺序：先乘除，后加减！\n5 × 2 = 10\n(-3) + 10 = 7\n千万不要先算 (-3) + 5 = 2，再 × 2 = 4！"
    },
    {
      "id": "m-020",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：8 ÷ (-2) + 6 = ？",
      "options": [
        "A. -10",
        "B. -2",
        "C. 2",
        "D. 10"
      ],
      "answer": 2,
      "explanation": "先乘除，后加减：\n8 ÷ (-2) = -4\n(-4) + 6 = 2"
    },
    {
      "id": "m-021",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：(-2)² + (-4) = ？",
      "options": [
        "A. -8",
        "B. -4",
        "C. 0",
        "D. 8"
      ],
      "answer": 2,
      "explanation": "注意区分 (-2)² 和 -2²！\n(-2)² = (-2) × (-2) = 4\n然后 4 + (-4) = 0。\n如果是 -2²，那是 -(2²) = -4。"
    },
    {
      "id": "m-022",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：6 - 2 × (3 - 5) = ？",
      "options": [
        "A. 0",
        "B. 10",
        "C. 12",
        "D. -8"
      ],
      "answer": 1,
      "explanation": "运算顺序：括号优先！\n(3 - 5) = -2\n2 × (-2) = -4\n6 - (-4) = 6 + 4 = 10"
    },
    {
      "id": "m-023",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：(-12) ÷ [(-2) × 3] = ？",
      "options": [
        "A. -2",
        "B. 2",
        "C. -18",
        "D. 18"
      ],
      "answer": 1,
      "explanation": "先算括号里面：(-2) × 3 = -6\n再算除法：(-12) ÷ (-6) = 2\n两个负数相除（同号）→ 结果为正。"
    },
    {
      "id": "m-024",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 1,
      "question": "计算：0 + (-9) = ？",
      "options": [
        "A. 9",
        "B. -9",
        "C. 0",
        "D. -0"
      ],
      "answer": 1,
      "explanation": "0 加任何数，等于那个数本身。\n0 + (-9) = -9。\n0 是加法里面的「隐身人」。"
    },
    {
      "id": "m-025",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：(-1)²⁰²⁴ = ？",
      "options": [
        "A. -1",
        "B. 1",
        "C. 2024",
        "D. -2024"
      ],
      "answer": 1,
      "explanation": "-1 的偶数次方 等于 1！\n2024 是偶数，所以 (-1)²⁰²⁴ = 1。\n口诀：负1的奇次方是-1，偶次方是1。"
    },
    {
      "id": "m-026",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 3,
      "question": "计算：|-3 - 5| + (-2)³ = ？",
      "options": [
        "A. 0",
        "B. 8",
        "C. 16",
        "D. -8"
      ],
      "answer": 0,
      "explanation": "先算绝对值里面：-3 - 5 = -8\n|-8| = 8\n(-2)³ = (-2)×(-2)×(-2) = -8（三个负号，奇数→为负）\n8 + (-8) = 0"
    },
    {
      "id": "c-001",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 1,
      "question": "下列词语中，没有错别字的一项是？",
      "options": [
        "A. 川流不息",
        "B. 穿流不息",
        "C. 川流不熄",
        "D. 穿流不熄"
      ],
      "answer": 0,
      "explanation": "「川」指河流，」川流不息」意思是像河流一样不停流淌。\n常见错误：写成」穿」（穿过）或」熄」（熄灭），都不对。"
    },
    {
      "id": "c-002",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 1,
      "question": "下列词语书写正确的是？",
      "options": [
        "A. 再接再励",
        "B. 再接再厉",
        "C. 再接再历",
        "D. 再接再利"
      ],
      "answer": 1,
      "explanation": "「厉」通」砺」，磨刀石的意思。」再接再厉」本意是公鸡斗架前磨嘴（厉），比喻继续努力。\n别写成」励」（鼓励）或」历」（经历）！"
    },
    {
      "id": "c-003",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 1,
      "question": "下列哪个词书写正确？",
      "options": [
        "A. 一愁莫展",
        "B. 一筹莫展",
        "C. 一筹莫展",
        "D. 一酬莫展"
      ],
      "answer": 1,
      "explanation": "「筹」是古代计数用的竹签，」一筹莫展」意思是一点办法也拿不出来。\n不是」愁」（发愁），也不是」酬」（报酬）。"
    },
    {
      "id": "c-004",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 1,
      "question": "下列书写正确的是？",
      "options": [
        "A. 变本加利",
        "B. 变本加厉",
        "C. 变本加力",
        "D. 变本加丽"
      ],
      "answer": 1,
      "explanation": "「厉」是厉害的意思。」变本加厉」指变得比原来更厉害（多指缺点错误）。\n不是」利」（利益）或」力」（力量）。"
    },
    {
      "id": "c-005",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 1,
      "question": "「虽然这次考试很难，___大家都没有放弃。」 括号里填什么？",
      "options": [
        "A. 所以",
        "B. 但是",
        "C. 因为",
        "D. 而且"
      ],
      "answer": 1,
      "explanation": "「虽然……但是……」 是固定搭配，表示转折。\n前面说困难，后面说不放弃，意思相反 → 用」但是」。"
    },
    {
      "id": "c-006",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 1,
      "question": "下列句子中，没有语病的一项是？",
      "options": [
        "A. 这本书对我很感兴趣",
        "B. 我对这本书很感兴趣",
        "C. 我对这本书感兴趣很",
        "D. 这本书对我感兴趣很"
      ],
      "answer": 1,
      "explanation": "「对……感兴趣」的主体是人，不是物。\n不能说」书对人感兴趣」，只能说」人对书感兴趣」。\n正确：我 + 对 + 这本书 + 很感兴趣。"
    },
    {
      "id": "c-007",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 1,
      "question": "下列句子中，有语病的一项是？",
      "options": [
        "A. 通过努力，他的成绩提高了",
        "B. 经过努力，他的成绩提高了",
        "C. 由于努力，他的成绩提高了",
        "D. 通过努力，使他的成绩提高了"
      ],
      "answer": 3,
      "explanation": "D 是病句！」通过……使……」 缺少主语。\n「通过努力」是状语，」使他的成绩提高」没有主语。\n去掉」使」就对了：通过努力，他的成绩提高了。"
    },
    {
      "id": "c-008",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 2,
      "question": "选择关联词填空：___明天不下雨，我们___去爬山。",
      "options": [
        "A. 因为……所以……",
        "B. 虽然……但是……",
        "C. 如果……就……",
        "D. 不但……而且……"
      ],
      "answer": 2,
      "explanation": "「如果……就……」 表示假设条件。\n「不下雨」是一个条件，」去爬山」是条件成立后的结果。\n其他选项：因为所以（因果）、虽然但是（转折）、不但而且（递进）都不对。"
    },
    {
      "id": "c-009",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 1,
      "question": "「望梅止渴」这个成语的意思是什么？",
      "options": [
        "A. 看到梅子就不渴了",
        "B. 用想象来安慰自己",
        "C. 吃了梅子解渴",
        "D. 梅子可以止渴"
      ],
      "answer": 1,
      "explanation": "出自三国曹操的故事：士兵行军口渴，曹操说前面有梅林，士兵想到酸梅流口水，不渴了。\n现在比喻：用空想来安慰自己，愿望无法实现。"
    },
    {
      "id": "c-010",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 1,
      "question": "「画蛇添足」形容什么？",
      "options": [
        "A. 画得很好",
        "B. 多此一举，反而不好",
        "C. 画画很有创意",
        "D. 做事很认真"
      ],
      "answer": 1,
      "explanation": "蛇本来没脚，画蛇的人非要给它加脚，结果反而输了。\n比喻做了多余的事，不但无益，反而有害。"
    },
    {
      "id": "c-011",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 2,
      "question": "「小明平时不复习，考试前___，熬到半夜。」 横线上填什么？",
      "options": [
        "A. 废寝忘食",
        "B. 孜孜不倦",
        "C. 临时抱佛脚",
        "D. 坚持不懈"
      ],
      "answer": 2,
      "explanation": "「临时抱佛脚」 意思是平时不准备，事到临头才慌忙应付。\n其他三个都是褒义的（认真、勤奋），不符合」平时不复习」的语境。"
    },
    {
      "id": "c-012",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 1,
      "question": "下列哪个成语用来形容」兄弟之间感情很深」？",
      "options": [
        "A. 相敬如宾",
        "B. 情同手足",
        "C. 一见如故",
        "D. 青梅竹马"
      ],
      "answer": 1,
      "explanation": "「情同手足」：手足指手和脚，形容感情像亲兄弟一样好。\n「相敬如宾」形容夫妻，」一见如故」形容刚认识就很投缘，」青梅竹马」形容从小一起长大。"
    },
    {
      "id": "e-001",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 1,
      "question": "She ___ a student.",
      "options": [
        "A. am",
        "B. is",
        "C. are",
        "D. be"
      ],
      "answer": 1,
      "explanation": "be动词口诀：\nI 用 am，You 用 are，\nis 连着他她它（He / She / It）。\nShe（她）→ 第三人称单数 → 用 is。"
    },
    {
      "id": "e-002",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 1,
      "question": "I ___ twelve years old.",
      "options": [
        "A. am",
        "B. is",
        "C. are",
        "D. be"
      ],
      "answer": 0,
      "explanation": "I（我）必须配 am！\n记住：I am, You are, He/She/It is。\nI 和 am 是固定搭配，永远不会变。"
    },
    {
      "id": "e-003",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 1,
      "question": "These ___ my good friends.",
      "options": [
        "A. am",
        "B. is",
        "C. are",
        "D. be"
      ],
      "answer": 2,
      "explanation": "These（这些）是复数，复数主语用 are！\n口诀：复数都用 are。\nThis is...（这个）单数 → is\nThese are...（这些）复数 → are"
    },
    {
      "id": "e-004",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 2,
      "question": "There ___ a book and two pens on the desk.",
      "options": [
        "A. am",
        "B. is",
        "C. are",
        "D. be"
      ],
      "answer": 1,
      "explanation": "There be 句型看最近的名词！\n「a book」 是单数，离动词最近 → 用 is。\n尽管后面有「two pens」（复数），但只看最靠近 be 的那个。\n这叫「就近原则」。"
    },
    {
      "id": "e-005",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 1,
      "question": "I ___ to school by bus every day.",
      "options": [
        "A. go",
        "B. goes",
        "C. going",
        "D. went"
      ],
      "answer": 0,
      "explanation": "every day（每天）→ 一般现在时。\n主语 I → 动词用原形 go。\n如果是 She，才用 goes。"
    },
    {
      "id": "e-006",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 1,
      "question": "Tom ___ basketball after school every day.",
      "options": [
        "A. play",
        "B. plays",
        "C. playing",
        "D. played"
      ],
      "answer": 1,
      "explanation": "Tom（汤姆）是第三人称单数 → 动词加 s！\nplay → plays\n记住：I play, You play, He plays。\nevery day 说明是一般现在时。"
    },
    {
      "id": "e-007",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 1,
      "question": "___ your mother like cooking?",
      "options": [
        "A. Do",
        "B. Does",
        "C. Is",
        "D. Are"
      ],
      "answer": 1,
      "explanation": "your mother（你妈妈）= she（她），第三人称单数。\n一般现在时疑问句：Does + 主语 + 动词原形？\n不要写成 Does your mother likes！does后动词要用原形。"
    },
    {
      "id": "e-008",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 2,
      "question": "They don't ___ English at home.",
      "options": [
        "A. speaks",
        "B. speak",
        "C. speaking",
        "D. spoke"
      ],
      "answer": 1,
      "explanation": "don't（do not）后面动词用原形！\n口诀：do / does / don't / doesn't 后面的动词全用原形。\nThey don't speak English. ✓\nThey don't speaks English. ✗"
    },
    {
      "id": "e-009",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 1,
      "question": "妈妈 → ___",
      "options": [
        "A. father",
        "B. mother",
        "C. brother",
        "D. sister"
      ],
      "answer": 1,
      "explanation": "核心家庭成员词汇：\nfather(爸爸) / mother(妈妈) / brother(兄弟) / sister(姐妹)"
    },
    {
      "id": "e-010",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 1,
      "question": "「apple」的中文意思是？",
      "options": [
        "A. 香蕉",
        "B. 苹果",
        "C. 橘子",
        "D. 西瓜"
      ],
      "answer": 1,
      "explanation": "常见水果词汇：\napple(苹果) / banana(香蕉) / orange(橘子) / watermelon(西瓜)"
    },
    {
      "id": "e-011",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 1,
      "question": "Which word means 「学校」?",
      "options": [
        "A. hospital",
        "B. library",
        "C. school",
        "D. park"
      ],
      "answer": 2,
      "explanation": "场所词汇：\nschool(学校) / hospital(医院) / library(图书馆) / park(公园)"
    },
    {
      "id": "e-012",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 1,
      "question": "I ___ my homework after dinner.",
      "options": [
        "A. do",
        "B. does",
        "C. doing",
        "D. did"
      ],
      "answer": 0,
      "explanation": "do homework = 做作业。\n主语是 I → 用 do（一般现在时）。\n如果是 He，才是 does。"
    },
    {
      "id": "e-013",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 2,
      "question": "She ___ like swimming. She likes running.",
      "options": [
        "A. don't",
        "B. doesn't",
        "C. isn't",
        "D. aren't"
      ],
      "answer": 1,
      "explanation": "She 第三人称单数 → 否定用 doesn't。\n注意：doesn't 后面动词用原形！\nShe doesn't like（不是 likes！）\n对比：She likes running.（肯定句用 likes）"
    },
    {
      "id": "e-014",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 2,
      "question": "___ your parents at home now?",
      "options": [
        "A. Am",
        "B. Is",
        "C. Are",
        "D. Do"
      ],
      "answer": 2,
      "explanation": "your parents（你父母）= they（他们），复数。\n复数 + be 动词 → Are。\n不是 Do，因为后面是」at home「（介词短语），不是动词。\n比较：Are they at home?（用 be）/ Do they live here?（有动词用 do）"
    },
    {
      "id": "m-027",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "计算：3x + 5x = ？",
      "options": [
        "A. 8x",
        "B. 8x²",
        "C. 15x",
        "D. 15x²"
      ],
      "answer": 0,
      "explanation": "同类项合并：系数相加，字母及指数不变。\n3x 和 5x 都是 x 项 → 3+5=8 → 结果是 8x。\n注意：x 和 x² 不是同类项，不能合并！"
    },
    {
      "id": "m-028",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "计算：2a - 7a = ？",
      "options": [
        "A. 5a",
        "B. -5a",
        "C. 9a",
        "D. -9a"
      ],
      "answer": 1,
      "explanation": "2a - 7a：系数相减，2-7=-5 → 结果是 -5a。\n可以理解成：2个a 减去 7个a = 欠了5个a。"
    },
    {
      "id": "m-029",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "计算：-4y + 9y = ？",
      "options": [
        "A. -13y",
        "B. -5y",
        "C. 5y",
        "D. 13y"
      ],
      "answer": 2,
      "explanation": "系数相加：-4+9=5 → 结果是 5y。\n负4个y 加上 9个y = 5个y。"
    },
    {
      "id": "m-030",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "去括号：2(x + 3) = ？",
      "options": [
        "A. 2x + 3",
        "B. 2x + 6",
        "C. x + 6",
        "D. 2x + 5"
      ],
      "answer": 1,
      "explanation": "乘法分配律：2乘进去给每一项。\n2 × x = 2x，2 × 3 = 6 → 2x + 6。\n千万不要只乘第一项！"
    },
    {
      "id": "m-031",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "去括号：-(a - b) = ？",
      "options": [
        "A. a + b",
        "B. a - b",
        "C. -a - b",
        "D. -a + b"
      ],
      "answer": 3,
      "explanation": "括号前是负号 → 括号内每一项都要变号！\n-(a - b) = -a + b。\na 变成了 -a，-b 变成了 +b。\n口诀：负号如锤子，敲一下全反。"
    },
    {
      "id": "m-032",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 1,
      "question": "去括号：3(m - 2n) = ？",
      "options": [
        "A. 3m - 2n",
        "B. 3m + 2n",
        "C. 3m - 6n",
        "D. m - 6n"
      ],
      "answer": 2,
      "explanation": "3 乘括号里的每一项：\n3 × m = 3m，3 × (-2n) = -6n → 3m - 6n。\n和上题一样用分配律，别忘了负号！"
    },
    {
      "id": "m-033",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：(3x + 2) + (5x - 4) = ？",
      "options": [
        "A. 8x - 2",
        "B. 8x + 6",
        "C. 2x - 2",
        "D. 2x + 6"
      ],
      "answer": 0,
      "explanation": "去括号：3x + 2 + 5x - 4\n合并同类项：3x + 5x = 8x，2 - 4 = -2\n结果：8x - 2"
    },
    {
      "id": "m-034",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：(2a - 3b) - (a - b) = ？",
      "options": [
        "A. a - 2b",
        "B. a - 4b",
        "C. 3a - 2b",
        "D. 3a - 4b"
      ],
      "answer": 0,
      "explanation": "去括号：第二个括号前有负号，里面的 a 变 -a，-b 变 +b。\n2a - 3b - a + b\n合并：2a - a = a，-3b + b = -2b → a - 2b"
    },
    {
      "id": "m-035",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：x + x = ？",
      "options": [
        "A. x",
        "B. 2x",
        "C. x²",
        "D. 0"
      ],
      "answer": 1,
      "explanation": "x + x = 1x + 1x = 2x。\n注意：x 和 x² 不一样！x 是一次项，x² 是二次项。\n加法不是乘法：x + x ≠ x²。"
    },
    {
      "id": "m-036",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：3x² + 5x² = ？",
      "options": [
        "A. 8x²",
        "B. 8x⁴",
        "C. 15x²",
        "D. 15x⁴"
      ],
      "answer": 0,
      "explanation": "x² 和 x² 是同类项，系数相加：3+5=8 → 8x²。\n注意：x² + x² ≠ x⁴！次数不变，只加系数。"
    },
    {
      "id": "m-037",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：2(a + b) - (a - b) = ？",
      "options": [
        "A. a - b",
        "B. a + 3b",
        "C. 3a + b",
        "D. a + b"
      ],
      "answer": 1,
      "explanation": "分步：2(a+b) = 2a+2b；-(a-b) = -a+b\n合并：2a+2b-a+b = a+3b"
    },
    {
      "id": "m-038",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 1,
      "question": "方程 x + 5 = 12 的解是？",
      "options": [
        "A. x = 7",
        "B. x = 17",
        "C. x = -7",
        "D. x = -17"
      ],
      "answer": 0,
      "explanation": "解方程目标：求出 x = ？\nx + 5 = 12 → 两边同时减5：x = 12 - 5 = 7。\n口诀：挪到等号另一边，正变负。"
    },
    {
      "id": "m-039",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 1,
      "question": "方程 2x = 14 的解是？",
      "options": [
        "A. x = 12",
        "B. x = 7",
        "C. x = 28",
        "D. x = -7"
      ],
      "answer": 1,
      "explanation": "2x = 14 → 两边除以2：x = 14 ÷ 2 = 7。\n2x 意思是 2 乘 x，挪到另一边变成除以。"
    },
    {
      "id": "m-040",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 1,
      "question": "方程 3x - 4 = 11 的解是？",
      "options": [
        "A. x = 3",
        "B. x = 4",
        "C. x = 5",
        "D. x = 6"
      ],
      "answer": 2,
      "explanation": "分两步：\n① 移项：3x = 11 + 4 = 15\n② 两边除以3：x = 15 ÷ 3 = 5\n口诀：先整理，再算x。"
    },
    {
      "id": "m-041",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 1,
      "question": "方程 5x + 2 = 3x + 8 的解是？",
      "options": [
        "A. x = 1",
        "B. x = 2",
        "C. x = 3",
        "D. x = 4"
      ],
      "answer": 2,
      "explanation": "两边都有x：先把含x的移到一边。\n5x - 3x = 8 - 2\n2x = 6 → x = 3\n移到等号另一边，符号要变！"
    },
    {
      "id": "m-042",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 1,
      "question": "方程 2(x + 3) = 10 的解是？",
      "options": [
        "A. x = 1",
        "B. x = 2",
        "C. x = 3",
        "D. x = 4"
      ],
      "answer": 1,
      "explanation": "先展开括号：2x + 6 = 10\n再移项：2x = 10 - 6 = 4\nx = 4 ÷ 2 = 2"
    },
    {
      "id": "m-043",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "方程 -x = 4 的解是？",
      "options": [
        "A. x = 4",
        "B. x = -4",
        "C. x = 0",
        "D. x = 1"
      ],
      "answer": 1,
      "explanation": "-x = 4 意思是「负x等于4」。\n两边同乘-1：x = -4。\n小心：-x不是小数，是符号！"
    },
    {
      "id": "m-044",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "方程 x ÷ 3 = 6 的解是？",
      "options": [
        "A. x = 2",
        "B. x = 3",
        "C. x = 9",
        "D. x = 18"
      ],
      "answer": 3,
      "explanation": "x ÷ 3 = 6 → 两边同乘3：x = 6 × 3 = 18。\n除以3挪到另一边变成乘3。"
    },
    {
      "id": "m-045",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "方程 4x - 7 = 2x + 3 的解是？",
      "options": [
        "A. x = 2",
        "B. x = 3",
        "C. x = 4",
        "D. x = 5"
      ],
      "answer": 3,
      "explanation": "4x - 2x = 3 + 7\n2x = 10 → x = 5"
    },
    {
      "id": "m-046",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "小明买了3支笔共花了x元，又买了一本笔记本花了8元，一共花了20元。x等于多少？",
      "options": [
        "A. 3",
        "B. 4",
        "C. 6",
        "D. 12"
      ],
      "answer": 3,
      "explanation": "列方程：x + 8 = 20。\n解：x = 20 - 8 = 12。\n注意审题：「共花了x元」表示3支笔的总价是x元，不是每支笔的价格。"
    },
    {
      "id": "m-047",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "某数的3倍加5等于20，这个数是？",
      "options": [
        "A. 3",
        "B. 4",
        "C. 5",
        "D. 6"
      ],
      "answer": 2,
      "explanation": "设这个数为 x，列方程：3x + 5 = 20\n3x = 15 → x = 5"
    },
    {
      "id": "m-048",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "甲比乙大3岁，两人年龄和是25岁，甲多少岁？",
      "options": [
        "A. 11",
        "B. 14",
        "C. 13",
        "D. 15"
      ],
      "answer": 1,
      "explanation": "设乙为x，甲为x+3。\n(x+3) + x = 25 → 2x + 3 = 25 → 2x = 22 → x = 11\n甲 = 11 + 3 = 14 岁。\n一步错步步错——看清楚问的是谁！"
    },
    {
      "id": "m-049",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 1,
      "question": "计算：(-3)² = ？",
      "options": [
        "A. -9",
        "B. 9",
        "C. -6",
        "D. 6"
      ],
      "answer": 1,
      "explanation": "(-3)² = (-3) × (-3) = 9\n负数的平方（偶次方）结果为正。\n注意区别于 -3²：-3² = -(3²) = -9！\n加不加括号，结果完全不同。"
    },
    {
      "id": "m-050",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 1,
      "question": "计算：-3² = ？",
      "options": [
        "A. -9",
        "B. 9",
        "C. -6",
        "D. 6"
      ],
      "answer": 0,
      "explanation": "没有括号！-3² 的意思是「负的 3²」。\n先算 3² = 9，再取负 → -9。\n对比：(-3)² = 9，-3² = -9。"
    },
    {
      "id": "m-051",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 1,
      "question": "计算：(-2)³ = ？",
      "options": [
        "A. -6",
        "B. 6",
        "C. 8",
        "D. -8"
      ],
      "answer": 3,
      "explanation": "(-2)³ = (-2)×(-2)×(-2)；有三个负号 → 奇数 → 结果为负。\n前两个得 4，4×(-2) = -8。"
    },
    {
      "id": "m-052",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 1,
      "question": "(-1)¹⁰⁰ = ？",
      "options": [
        "A. -1",
        "B. 1",
        "C. 100",
        "D. -100"
      ],
      "answer": 1,
      "explanation": "-1 的偶次方永远是 1，奇次方永远是 -1。\n100是偶数 → 答案是 1。"
    },
    {
      "id": "m-053",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 2,
      "question": "计算：2³ = ？",
      "options": [
        "A. 6",
        "B. 8",
        "C. 9",
        "D. 5"
      ],
      "answer": 1,
      "explanation": "2³ = 2×2×2 = 8。\n不要和 2×3=6 搞混！\n³ 不是乘3，是乘自己3次。"
    },
    {
      "id": "m-054",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 2,
      "question": "(-1)⁹⁹ + (-1)¹⁰⁰ = ？",
      "options": [
        "A. -2",
        "B. -1",
        "C. 0",
        "D. 2"
      ],
      "answer": 2,
      "explanation": "(-1)⁹⁹ = -1（99是奇数）\n(-1)¹⁰⁰ = 1（100是偶数）\n-1 + 1 = 0"
    },
    {
      "id": "m-055",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 2,
      "question": "(-1/2)² = ？",
      "options": [
        "A. -1/4",
        "B. 1/4",
        "C. -1/2",
        "D. 1/2"
      ],
      "answer": 1,
      "explanation": "(-1/2)² = (-1/2)×(-1/2) = 1/4\n负数平方得正。分子和分母分别平方。"
    },
    {
      "id": "m-056",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 2,
      "question": "计算：3.5 - (-2.5) = ？",
      "options": [
        "A. -6",
        "B. -1",
        "C. 6",
        "D. 1"
      ],
      "answer": 2,
      "explanation": "减去负数 = 加正数：3.5 - (-2.5) = 3.5 + 2.5 = 6。\n小数也一样用这个规则！"
    },
    {
      "id": "m-057",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 1,
      "question": "(-0.5) × 6 = ？",
      "options": [
        "A. -3",
        "B. 3",
        "C. -6",
        "D. 0"
      ],
      "answer": 0,
      "explanation": "0.5×6 = 3，前面有负号 → -3。\n小数和分数的运算跟整数规则一样。"
    },
    {
      "id": "m-058",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 1,
      "question": "下列哪个数最大？",
      "options": [
        "A. -10",
        "B. -3",
        "C. 0",
        "D. 2"
      ],
      "answer": 3,
      "explanation": "正数 > 0 > 负数。\n负数中，绝对值越小的越大。\n-3 > -10，但 2 比它们都大。"
    },
    {
      "id": "c-013",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「床前明月光」的下一句是？",
      "options": [
        "A. 低头思故乡",
        "B. 疑是地上霜",
        "C. 举头望明月",
        "D. 月是故乡明"
      ],
      "answer": 1,
      "explanation": "李白《静夜思》：床前明月光，疑是地上霜。举头望明月，低头思故乡。\n这是小学就学的，中考也会考——不能掉以轻心！"
    },
    {
      "id": "c-014",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「春蚕到死丝方尽」的下一句是？",
      "options": [
        "A. 蜡炬成灰泪始干",
        "B. 化作春泥更护花",
        "C. 春风吹又生",
        "D. 润物细无声"
      ],
      "answer": 0,
      "explanation": "李商隐《无题》：春蚕到死丝方尽，蜡炬成灰泪始干。\n「丝」谐音「思」，比喻思念到死才停止。这句在中考古诗默写里是高频考点。"
    },
    {
      "id": "c-015",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「海内存知己」的下一句是？",
      "options": [
        "A. 儿女共沾巾",
        "B. 天涯若比邻",
        "C. 风烟望五津",
        "D. 同是宦游人"
      ],
      "answer": 1,
      "explanation": "王勃《送杜少府之任蜀州》：海内存知己，天涯若比邻。\n意思是只要心意相通，再远也像邻居。送别诗中的名句。"
    },
    {
      "id": "c-016",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「乱花渐欲迷人眼」的上一句是？",
      "options": [
        "A. 浅草才能没马蹄",
        "B. 几处早莺争暖树",
        "C. 最爱湖东行不足",
        "D. 水面初平云脚低"
      ],
      "answer": 1,
      "explanation": "白居易《钱塘湖春行》：几处早莺争暖树，谁家新燕啄春泥。乱花渐欲迷人眼，浅草才能没马蹄。\n注意顺序：先写莺燕，再写花草。"
    },
    {
      "id": "c-017",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「落红不是无情物」的下一句是？",
      "options": [
        "A. 化作春泥更护花",
        "B. 花落人亡两不知",
        "C. 春色满园关不住",
        "D. 一枝红杏出墙来"
      ],
      "answer": 0,
      "explanation": "龚自珍《己亥杂诗》：落红不是无情物，化作春泥更护花。\n落花不是无情，变成泥土还能滋养新花——比喻奉献精神。必考！"
    },
    {
      "id": "c-018",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "下列哪首不是李白的诗？",
      "options": [
        "A. 《静夜思》",
        "B. 《望庐山瀑布》",
        "C. 《春望》",
        "D. 《早发白帝城》"
      ],
      "answer": 2,
      "explanation": "《春望》是杜甫写的（国破山河在，城春草木深）。\n区分：李白是浪漫主义（「飞流直下三千尺」），杜甫是现实主义。"
    },
    {
      "id": "c-019",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "「会当凌绝顶」的下一句是？",
      "options": [
        "A. 一览众山小",
        "B. 齐鲁青未了",
        "C. 阴阳割昏晓",
        "D. 决眦入归鸟"
      ],
      "answer": 0,
      "explanation": "杜甫《望岳》：会当凌绝顶，一览众山小。\n不是写泰山风景的，而是表达「一定要登上顶峰，看群山都在脚下」的豪情。"
    },
    {
      "id": "c-020",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 1,
      "question": "下列诗人中，被称为「诗圣」的是？",
      "options": [
        "A. 李白",
        "B. 杜甫",
        "C. 白居易",
        "D. 王维"
      ],
      "answer": 1,
      "explanation": "杜甫 = 诗圣，李白 = 诗仙，白居易 = 诗魔/诗王，王维 = 诗佛。\n记法：杜甫的诗像圣人一样关心百姓疾苦。"
    },
    {
      "id": "c-021",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "「大漠孤烟直」的下一句是？",
      "options": [
        "A. 长河落日圆",
        "B. 萧关逢候骑",
        "C. 都护在燕然",
        "D. 归雁入胡天"
      ],
      "answer": 0,
      "explanation": "王维《使至塞上》：大漠孤烟直，长河落日圆。\n画面感极强的一句——「直」和「圆」两个字就画出整个沙漠。"
    },
    {
      "id": "c-022",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "下列哪个不是描写春天的诗句？",
      "options": [
        "A. 春眠不觉晓",
        "B. 草长莺飞二月天",
        "C. 映日荷花别样红",
        "D. 万紫千红总是春"
      ],
      "answer": 2,
      "explanation": "「映日荷花别样红」（杨万里）写的是夏天的荷花。\n其他三个都是写春天。\n考试常考「判断诗句描写的季节」，要记住关键意象。"
    },
    {
      "id": "c-023",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "「山重水复疑无路」的下一句是？",
      "options": [
        "A. 柳暗花明又一村",
        "B. 丰年留客足鸡豚",
        "C. 从今若许闲乘月",
        "D. 拄杖无时夜叩门"
      ],
      "answer": 0,
      "explanation": "陆游《游山西村》：山重水复疑无路，柳暗花明又一村。\n经典名句——感觉走投无路了，突然看到希望。人生哲理！"
    },
    {
      "id": "c-024",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "《送东阳马生序》的作者是？",
      "options": [
        "A. 韩愈",
        "B. 柳宗元",
        "C. 宋濂",
        "D. 欧阳修"
      ],
      "answer": 2,
      "explanation": "《送东阳马生序》是明代宋濂写的。\n讲自己小时候借书苦读的经历，劝勉后辈。\n「序」是一种文体，这里是赠序（不是书序）。"
    },
    {
      "id": "c-025",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 1,
      "question": "「学而时习之」中「时」的意思是？",
      "options": [
        "A. 时间",
        "B. 按时",
        "C. 有时候",
        "D. 时代"
      ],
      "answer": 1,
      "explanation": "《论语》开篇。\n「时」在这里是副词「按时、时常」。\n整句：学习了然后按时复习它。不要把文言文的「时」直接理解成现代汉语的「时间」。"
    },
    {
      "id": "c-026",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 1,
      "question": "「温故而知新」中「故」的意思是？",
      "options": [
        "A. 故事",
        "B. 原因",
        "C. 旧的(知识)",
        "D. 故意"
      ],
      "answer": 2,
      "explanation": "「故」是「旧的」，这里指学过的旧知识。\n温习旧知识，能有新体会。\n文言文里「故」有很多意思：旧的/原因/故意/所以——要根据上下文判断。"
    },
    {
      "id": "c-027",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "「不亦乐乎」中「亦」的意思是？",
      "options": [
        "A. 不",
        "B. 也",
        "C. 很",
        "D. 就"
      ],
      "answer": 1,
      "explanation": "「亦」= 也。\n「不亦乐乎」= 不也很快乐吗？\n常见的文言虚词：亦（也）、乃（于是/竟然）、则（就）。"
    },
    {
      "id": "c-028",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "「吾日三省吾身」中「三」的意思是？",
      "options": [
        "A. 三次",
        "B. 三次",
        "C. 多次",
        "D. 第三天"
      ],
      "answer": 2,
      "explanation": "文言文中的「三」常表示「多次」，不一定是确数3。\n「吾日三省吾身」：我每天多次反省自己。\n类似：三思而行（反复思考）、三令五申（多次命令）。"
    },
    {
      "id": "c-029",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "下列「之」字用法不同的是？",
      "options": [
        "A. 学而时习之",
        "B. 知之者不如好之者",
        "C. 送杜少府之任蜀州",
        "D. 择其善者而从之"
      ],
      "answer": 2,
      "explanation": "C 中「之」是动词，意思是「去、往」。\n其他三个都是代词（它）。\n文言文「之」用法很多：代词/助词「的」/动词「去」/无意。"
    },
    {
      "id": "c-030",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "四大名著不包括哪一部？",
      "options": [
        "A. 《西游记》",
        "B. 《红楼梦》",
        "C. 《聊斋志异》",
        "D. 《水浒传》"
      ],
      "answer": 2,
      "explanation": "四大名著：三国、水浒、西游、红楼。\n《聊斋志异》是蒲松龄写的志怪小说，不在四大名著之列。"
    },
    {
      "id": "c-031",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "「但愿人长久，千里共婵娟」的作者是？",
      "options": [
        "A. 李白",
        "B. 杜甫",
        "C. 苏轼",
        "D. 辛弃疾"
      ],
      "answer": 2,
      "explanation": "苏轼《水调歌头·明月几时有》。\n「婵娟」指月亮。这首词是中秋写给弟弟苏辙的。\n苏轼 = 豪放派词人代表，唐宋八大家之一。"
    },
    {
      "id": "c-032",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "《论语》是哪家经典？",
      "options": [
        "A. 道家",
        "B. 法家",
        "C. 儒家",
        "D. 墨家"
      ],
      "answer": 2,
      "explanation": "《论语》记录孔子及其弟子的言行，是儒家核心经典。\n儒家：孔孟（孔子、孟子）；道家：老庄（老子、庄子）。"
    },
    {
      "id": "c-033",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "下列哪部作品的作者是鲁迅？",
      "options": [
        "A. 《骆驼祥子》",
        "B. 《朝花夕拾》",
        "C. 《家》",
        "D. 《雷雨》"
      ],
      "answer": 1,
      "explanation": "《朝花夕拾》是鲁迅的散文集（里面有名篇《从百草园到三味书屋》《藤野先生》）。\n《骆驼祥子》是老舍的，《家》是巴金的，《雷雨》是曹禺的。"
    },
    {
      "id": "c-034",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "唐宋八大家中，唐朝的有几位？",
      "options": [
        "A. 2位",
        "B. 3位",
        "C. 5位",
        "D. 8位"
      ],
      "answer": 0,
      "explanation": "唐朝2位：韩愈、柳宗元。宋朝6位：欧阳修、苏洵、苏轼、苏辙、王安石、曾巩。\n记法：唐二宋六，唐朝只有韩柳。"
    },
    {
      "id": "c-035",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 1,
      "question": "下列哪个不属于「四书」？",
      "options": [
        "A. 《大学》",
        "B. 《中庸》",
        "C. 《诗经》",
        "D. 《孟子》"
      ],
      "answer": 2,
      "explanation": "四书：《大学》《中庸》《论语》《孟子》。\n五经：《诗》《书》《礼》《易》《春秋》。\n《诗经》属于五经，不在四书里。"
    },
    {
      "id": "e-015",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "哪个字母发 /eɪ/ 的音？",
      "options": [
        "A. A",
        "B. B",
        "C. C",
        "D. D"
      ],
      "answer": 0,
      "explanation": "字母 A 的音标是 /eɪ/。\n26个字母中，A/H/J/K 都含有 /eɪ/。\n元音字母 a e i o u 各有两个发音：本音和短音。"
    },
    {
      "id": "e-016",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "单词 'cat' 中字母 a 发什么音？",
      "options": [
        "A. /eɪ/",
        "B. /æ/",
        "C. /ɑː/",
        "D. /ə/"
      ],
      "answer": 1,
      "explanation": "cat 中 a 发短音 /æ/（嘴张大，舌头压低）。\n对比：cake 中 a 发本音 /eɪ/。\n规则：辅音+元音+辅音+不发音e → 元音发本音。"
    },
    {
      "id": "e-017",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "哪个单词中 ee 发 /iː/（长音）？",
      "options": [
        "A. bed",
        "B. see",
        "C. pen",
        "D. red"
      ],
      "answer": 1,
      "explanation": "ee 组合固定发 /iː/（长音），类似中文「衣」拉长。\nsee /siː/、meet /miːt/、tree /triː/。"
    },
    {
      "id": "e-018",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "单词 'name' 有几个音节？",
      "options": [
        "A. 1",
        "B. 2",
        "C. 3",
        "D. 4"
      ],
      "answer": 0,
      "explanation": "name 只有一个元音发音 → 单音节。\n结尾的 e 不发音，不算音节。\n判断音节：数有几个响亮的元音（不是数字母）。"
    },
    {
      "id": "e-019",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "下列哪个单词的重音在第一个音节？",
      "options": [
        "A. to-day",
        "B. a-bout",
        "C. ap-ple",
        "D. be-gin"
      ],
      "answer": 2,
      "explanation": "apple 重音在第一个音节：AP-ple。\n其他三个重音都在第二个音节：to-DAY、a-BOUT、be-GIN。\n重音符号在音标中用「'」表示，如 /ˈæp.l/。"
    },
    {
      "id": "e-020",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 1,
      "question": "/ˈtiːtʃər/ 是哪个单词的音标？",
      "options": [
        "A. student",
        "B. friend",
        "C. teacher",
        "D. school"
      ],
      "answer": 2,
      "explanation": "/ˈtiːtʃər/：/tiː/ = tea，/tʃə/ = cher，连起来就是 teacher（老师）。\n音标就是单词的「拼音」，读准音标就能读出任何单词！"
    },
    {
      "id": "e-021",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 1,
      "question": "She has ___ apple.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 1,
      "explanation": "apple 开头是元音音素 /æ/ → 用 an。\n口诀：元音开头用 an，辅音开头用 a。\n注意：是看发音，不是看字母！\n比如 hour（h不发音，/aʊər/）用 an hour。"
    },
    {
      "id": "e-022",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 1,
      "question": "I can see ___ sun in the sky.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 2,
      "explanation": "sun（太阳）是独一无二的东西 → 用 the。\n定冠词 the 的用法之一：世界上独一无二的事物。\n还有：the moon（月亮）、the earth（地球）。"
    },
    {
      "id": "e-023",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 1,
      "question": "There is ___ book on the desk.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 0,
      "explanation": "book 开头是辅音音素 /b/ → 用 a。\n第一次提到某个东西，泛指用 a/an。\n如果第二次提到就用 the：The book is mine."
    },
    {
      "id": "e-024",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 2,
      "question": "Tom is ___ honest boy.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 1,
      "explanation": "honest 中 h 不发音！发音是 /ˈɒnɪst/，元音开头 → 用 an。\n考点：看发音而非拼写！\nhour、honest、honor 的 h 都不发音。"
    },
    {
      "id": "e-025",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 2,
      "question": "I play ___ basketball after school.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 3,
      "explanation": "球类运动/三餐/学科前不加冠词！\nplay basketball（打篮球）、have lunch（吃午饭）、learn English（学英语）。\n对比：play the piano（弹钢琴），乐器前加 the！"
    },
    {
      "id": "e-026",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 1,
      "question": "___ is my best friend. (他)",
      "options": [
        "A. He",
        "B. Him",
        "C. His",
        "D. Her"
      ],
      "answer": 0,
      "explanation": "作主语用主格：He（他）。\n人称代词主格：I/you/he/she/it/we/they。\n宾格（作宾语）：me/you/him/her/it/us/them。"
    },
    {
      "id": "e-027",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 1,
      "question": "This is not ___ book. (我的)",
      "options": [
        "A. I",
        "B. me",
        "C. my",
        "D. mine"
      ],
      "answer": 2,
      "explanation": "book 是名词，前面需要形容词性物主代词 my。\nmy book = 我的书（my后面要跟名词）。\nmine = 我的（东西），后面不跟名词：This book is mine."
    },
    {
      "id": "e-028",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 1,
      "question": "Please give ___ a pen. (我)",
      "options": [
        "A. I",
        "B. me",
        "C. my",
        "D. mine"
      ],
      "answer": 1,
      "explanation": "give 后面接宾语 → 用宾格 me。\n口诀：动词后面用宾格！\nGive me... / Tell him... / Help us..."
    },
    {
      "id": "e-029",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 2,
      "question": "This pen is ___. (她的)",
      "options": [
        "A. she",
        "B. her",
        "C. hers",
        "D. she's"
      ],
      "answer": 2,
      "explanation": "后面没有名词 → 用名词性物主代词 hers。\nThis pen is hers = 这支笔是她的。\n对比：This is her pen（her后面有名词pen）。"
    },
    {
      "id": "e-030",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 2,
      "question": "We can do it by ___. (我们自己)",
      "options": [
        "A. our",
        "B. us",
        "C. we",
        "D. ourselves"
      ],
      "answer": 3,
      "explanation": "by oneself = 靠自己。\n反身代词：myself/yourself/himself/herself/itself/ourselves/yourselves/themselves。\n固定搭配：by oneself、enjoy oneself、help oneself。"
    },
    {
      "id": "e-031",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 1,
      "question": "The cat is ___ the table. (在桌子下面)",
      "options": [
        "A. on",
        "B. in",
        "C. under",
        "D. at"
      ],
      "answer": 2,
      "explanation": "under = 在……正下方。\n方位介词：on（在上面接触）、in（在里面）、under（在下面）、behind（在后面）、in front of（在前面）。"
    },
    {
      "id": "e-032",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 1,
      "question": "There is a map ___ the wall. (在墙上)",
      "options": [
        "A. on",
        "B. in",
        "C. at",
        "D. under"
      ],
      "answer": 0,
      "explanation": "map 挂在墙的表面 → 用 on。\n地图贴在墙面上（接触表面），不是嵌在墙里面。\n对比：There is a window in the wall（窗户是嵌在墙里的）。"
    },
    {
      "id": "e-033",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 1,
      "question": "Guangzhou is ___ the south of China.",
      "options": [
        "A. on",
        "B. in",
        "C. at",
        "D. to"
      ],
      "answer": 1,
      "explanation": "广州在中国内部 → 用 in。\nin the south of China = 在中国南部的内部。\n对比：Japan is to the east of China（日本在中国外部东边 → 用 to）。"
    },
    {
      "id": "e-034",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 1,
      "question": "My school is ___ the left of the park.",
      "options": [
        "A. in",
        "B. on",
        "C. at",
        "D. to"
      ],
      "answer": 1,
      "explanation": "on the left = 在左边。\n固定搭配：on the left/right（在左/右边）。"
    },
    {
      "id": "e-035",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 1,
      "question": "I usually get up ___ six o'clock.",
      "options": [
        "A. on",
        "B. in",
        "C. at",
        "D. of"
      ],
      "answer": 2,
      "explanation": "具体时间点前用 at。\n规则：at + 具体时刻（at 6:00）；on + 具体某天（on Monday）；in + 年月季节（in July, in 2026）。"
    },
    {
      "id": "e-036",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 1,
      "question": "___ you swim? - Yes, I can.",
      "options": [
        "A. Can",
        "B. Must",
        "C. Do",
        "D. Are"
      ],
      "answer": 0,
      "explanation": "can 表示能力（能、会）。\n回答用 Yes, I can / No, I can't。\ncan 后面动词用原形：Can you swim？不是 Can you swimming？"
    },
    {
      "id": "e-037",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 1,
      "question": "You ___ smoke here. It's not allowed.",
      "options": [
        "A. can",
        "B. must",
        "C. mustn't",
        "D. needn't"
      ],
      "answer": 2,
      "explanation": "mustn't = 禁止、不允许。\n这里有「不允许抽烟」的标志 → 用 mustn't。\nneedn't = 不必（不需要），不是禁止的意思。"
    },
    {
      "id": "e-038",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 1,
      "question": "- Must I finish it today? - No, you ___.",
      "options": [
        "A. mustn't",
        "B. can't",
        "C. needn't",
        "D. don't"
      ],
      "answer": 2,
      "explanation": "Must I...? 的否定回答是 No, you needn't（不必）。\n考点：must 提问，否定用 needn't，不是 mustn't！\nmustn't 是「禁止」，needn't 是「不必」。"
    },
    {
      "id": "e-039",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 2,
      "question": "She ___ play the piano very well.",
      "options": [
        "A. can",
        "B. must",
        "C. need",
        "D. do"
      ],
      "answer": 0,
      "explanation": "弹钢琴弹得很好 → 表示能力 → 用 can。\ncan 表示能力，must 表示必须/一定。"
    },
    {
      "id": "e-040",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 2,
      "question": "We ___ be quiet in the library.",
      "options": [
        "A. can",
        "B. must",
        "C. need",
        "D. may"
      ],
      "answer": 1,
      "explanation": "图书馆要保持安静 → 表示义务/必须 → 用 must。\nmust = 必须（主观或客观要求）。"
    },
    {
      "id": "e-041",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "Look! They ___ football now.",
      "options": [
        "A. play",
        "B. plays",
        "C. are playing",
        "D. played"
      ],
      "answer": 2,
      "explanation": "Look! + now → 正在发生的事 → 现在进行时。\n结构：be + 动词ing。They（复数）→ are playing。"
    },
    {
      "id": "e-042",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "Listen! Who ___ in the room?",
      "options": [
        "A. sing",
        "B. sings",
        "C. is singing",
        "D. sang"
      ],
      "answer": 2,
      "explanation": "Listen! → 提示正在发生 → 用现在进行时。\nWho（谁）当主语视为第三人称单数 → is singing。"
    },
    {
      "id": "e-043",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "My mother ___ dinner at the moment.",
      "options": [
        "A. cook",
        "B. is cooking",
        "C. cooks",
        "D. cooked"
      ],
      "answer": 1,
      "explanation": "at the moment（此刻）→ 现在进行时。\nMy mother（第三人称单数）→ is cooking。\n时间标志词：now / Look! / Listen! / at the moment → 进行时。"
    },
    {
      "id": "e-044",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "- What are you doing? - I ___ my homework.",
      "options": [
        "A. do",
        "B. does",
        "C. am doing",
        "D. did"
      ],
      "answer": 2,
      "explanation": "问 What are you doing？是在问「你正在做什么」→ 现在进行时。\n回答要用进行时：I am doing my homework。"
    },
    {
      "id": "e-045",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "He ___ TV every evening, but now he ___ a book.",
      "options": [
        "A. watches... reads",
        "B. watches... is reading",
        "C. is watching... reads",
        "D. watch... read"
      ],
      "answer": 1,
      "explanation": "every evening → 一般现在时 → watches。\nnow → 现在进行时 → is reading。\n同时出现两个时间 → 两种时态混用！"
    },
    {
      "id": "m-059",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 2,
      "question": "计算：(-12) + 7 + (-5) + 9 = ？",
      "options": [
        "A. -19",
        "B. -1",
        "C. 1",
        "D. -15"
      ],
      "answer": 1,
      "explanation": "按顺序分步：(-12) + 7 = -5；(-5) + (-5) = -10；(-10) + 9 = -1。\n也可以先合并同号：负数 -12 和 -5 加起来 = -17；正数 7+9 = 16；-17+16 = -1。\n口诀：同号先加，再算异号。"
    },
    {
      "id": "m-060",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 2,
      "question": "某市一天的最高气温是 5°C，最低气温是 -7°C，温差是多少？",
      "options": [
        "A. 2°C",
        "B. 12°C",
        "C. -2°C",
        "D. -12°C"
      ],
      "answer": 1,
      "explanation": "温差 = 最高 - 最低 = 5 - (-7) = 5 + 7 = 12°C。\n注意：温差是正数，不能是负数！减去负数变加正数。\n陷阱：有些同学直接算 5 + (-7) = -2，这不对，那是求和不是温差。"
    },
    {
      "id": "m-061",
      "subject": "math",
      "topic": "math-rational-add",
      "difficulty": 3,
      "question": "计算：|-8| + (-3) + (-|4|) + |-(-5)| = ？",
      "options": [
        "A. -4",
        "B. 4",
        "C. 6",
        "D. 14"
      ],
      "answer": 2,
      "explanation": "逐步算每个部分：\n① |-8| = 8\n② -|4| = -4（先算绝对值 |4|=4，再取负）\n③ |-(-5)| = |5| = 5（-(-5)=5，再取绝对值）\n合起来：8 + (-3) + (-4) + 5 = 8 - 3 - 4 + 5 = 6。\n\n陷阱：|-(-5)| 有两层负号，先算里面的 -(-5)=5，再取绝对值 |5|=5。\n很多同学会搞错 -|4| 和 |-4| 的区别：-|4| = -4，而 |-4| = 4。"
    },
    {
      "id": "m-062",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 2,
      "question": "计算：(-3) - (-8) - (-2) = ？",
      "options": [
        "A. -13",
        "B. -7",
        "C. 7",
        "D. 13"
      ],
      "answer": 2,
      "explanation": "连续减法，减负数变加正数：\n(-3) - (-8) - (-2) = (-3) + 8 + 2 = 7。\n\n口诀：减负变加正，一个接一个。\n\n分步验证：\n第一步：(-3) - (-8) = (-3) + 8 = 5\n第二步：5 - (-2) = 5 + 2 = 7"
    },
    {
      "id": "m-063",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 2,
      "question": "已知 a = -5，b = -3，则 a - b = ？",
      "options": [
        "A. -8",
        "B. -2",
        "C. 2",
        "D. 8"
      ],
      "answer": 1,
      "explanation": "代入：a - b = (-5) - (-3) = (-5) + 3 = -2。\n\n注意：b 是 -3，减 b 就是减 (-3)，负负得正，等于加 3。\n\n常见错误：有同学直接把 a - b 当成了 -5 - 3 = -8，忘了 b 本身带负号。"
    },
    {
      "id": "m-064",
      "subject": "math",
      "topic": "math-rational-sub",
      "difficulty": 3,
      "question": "若 |a| = 3，|b| = 2，且 a < 0 < b，求 a - b 的值。",
      "options": [
        "A. -5",
        "B. -1",
        "C. 1",
        "D. 5"
      ],
      "answer": 0,
      "explanation": "由条件判断：\n|a| = 3 且 a < 0 → a = -3\n|b| = 2 且 b > 0 → b = 2\n所以 a - b = (-3) - 2 = -5。\n\n陷阱：题目给了 a < 0 < b，这是用来确定符号的！\n如果没有这个条件，a 可能是 3 或 -3，b 可能是 2 或 -2，答案就不唯一了。\n\n口诀：先定符号，再算数值。"
    },
    {
      "id": "m-065",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 2,
      "question": "计算：(-4) × 5 × (-2) × (-1) = ？",
      "options": [
        "A. -40",
        "B. -8",
        "C. 40",
        "D. 8"
      ],
      "answer": 0,
      "explanation": "先数负号的个数：-4、-2、-1 共三个负号 → 奇数 → 结果为负。\n再算绝对值：4 × 5 × 2 × 1 = 40。\n所以答案是 -40。\n\n口诀：负号个数定正负，绝对值直接乘。"
    },
    {
      "id": "m-066",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 2,
      "question": "计算：(-0.5) × (-0.2) × (-10) = ？",
      "options": [
        "A. -1",
        "B. 1",
        "C. -10",
        "D. 10"
      ],
      "answer": 0,
      "explanation": "先数负号：三个都是负数 → 奇数 → 结果为负。\n再算绝对值：0.5 × 0.2 = 0.1，0.1 × 10 = 1。\n所以结果是 -1。\n\n小数乘法也一样规则，不要怕小数！"
    },
    {
      "id": "m-067",
      "subject": "math",
      "topic": "math-rational-mul",
      "difficulty": 3,
      "question": "若 a × b < 0，a + b > 0，且 |a| > |b|，则 a 和 b 的符号分别是？",
      "options": [
        "A. a > 0, b < 0",
        "B. a < 0, b > 0",
        "C. a > 0, b > 0",
        "D. a < 0, b < 0"
      ],
      "answer": 0,
      "explanation": "逐一分析条件：\n① a × b < 0 → a 和 b 异号（一正一负）。\n② a + b > 0 → 正数的绝对值更大。\n③ |a| > |b| → a 的绝对值更大。\n综合：a 的绝对值更大且和为正 → a 是正数，b 是负数。\n\n推理口诀：乘积为负必异号，和为正是正者大。"
    },
    {
      "id": "m-068",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 2,
      "question": "计算：(-18) ÷ 6 ÷ (-3) = ？",
      "options": [
        "A. -1",
        "B. 1",
        "C. -9",
        "D. 9"
      ],
      "answer": 1,
      "explanation": "从左到右：(-18) ÷ 6 = -3；(-3) ÷ (-3) = 1。\n\n注意：除法要按从左到右的顺序！不能先算 6 ÷ (-3) = -2，再算 (-18) ÷ (-2) = 9，那是错的！\n\n除法没有结合律，必须从左到右一步步算。"
    },
    {
      "id": "m-069",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 2,
      "question": "计算：(-3/4) ÷ (-1/2) = ？",
      "options": [
        "A. -3/2",
        "B. -3/8",
        "C. 3/8",
        "D. 3/2"
      ],
      "answer": 3,
      "explanation": "除以一个分数 = 乘以它的倒数：\n(-3/4) ÷ (-1/2) = (-3/4) × (-2) = 6/4 = 3/2。\n\n口诀：除以分数变乘倒数。\n\n两个负数相除（同号）→ 结果为正。"
    },
    {
      "id": "m-070",
      "subject": "math",
      "topic": "math-rational-div",
      "difficulty": 3,
      "question": "计算：(-2/3) ÷ 4 × (-3) = ？",
      "options": [
        "A. -1/2",
        "B. 1/2",
        "C. -2",
        "D. 2"
      ],
      "answer": 1,
      "explanation": "从左到右运算：\n第一步：(-2/3) ÷ 4 = (-2/3) × (1/4) = -2/12 = -1/6\n第二步：(-1/6) × (-3) = 3/6 = 1/2\n\n陷阱：有同学会先算 4 × (-3) = -12，再算 (-2/3) ÷ (-12) = 2/36 = 1/18，这是错误的！\n\n乘除同级，必须从左到右。"
    },
    {
      "id": "m-071",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 2,
      "question": "计算：| -3 + 1 | + | 2 - 5 | = ？",
      "options": [
        "A. 5",
        "B. 3",
        "C. 1",
        "D. 7"
      ],
      "answer": 0,
      "explanation": "先算每个绝对值里面的：\n-3 + 1 = -2 → |-2| = 2\n2 - 5 = -3 → |-3| = 3\n然后 2 + 3 = 5。\n\n口诀：先算里面，再取绝对。"
    },
    {
      "id": "m-072",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 2,
      "question": "若 |x - 2| = 3，则 x 等于？",
      "options": [
        "A. 5",
        "B. -1",
        "C. 5 或 -1",
        "D. 5 或 1"
      ],
      "answer": 2,
      "explanation": "|x - 2| = 3 表示 x - 2 到 0 的距离是 3，\n所以 x - 2 = 3 或 x - 2 = -3。\n情况一：x - 2 = 3 → x = 5\n情况二：x - 2 = -3 → x = -1\n\n口诀：绝对值方程有两解，一正一负都考虑。"
    },
    {
      "id": "m-073",
      "subject": "math",
      "topic": "math-rational-abs",
      "difficulty": 3,
      "question": "已知 |a| = 4，|b| = 2，且 a < b，则 a + b 可能的值是？",
      "options": [
        "A. 只有 -2",
        "B. 只有 -6",
        "C. -2 或 -6",
        "D. 6 或 -6"
      ],
      "answer": 2,
      "explanation": "由 |a|=4 得 a=4 或 a=-4；由 |b|=2 得 b=2 或 b=-2。\n条件 a < b，逐一验证：\n\n① 若 a=4：不可能 a<b，因为 b 最大是 2，4>2。❌\n② 若 a=-4：b 可以是 2（-4<2 ✓），也可以是 -2（-4<-2 ✓）。\n  - 当 a=-4, b=2 → a+b = -2\n  - 当 a=-4, b=-2 → a+b = -6\n\n所以 a+b 可能是 -2 或 -6。\n\n陷阱：很多同学只考虑一种情况，忽略了绝对值方程的多解性。"
    },
    {
      "id": "m-074",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：(-2)³ - 3 × (-2) = ？",
      "options": [
        "A. -2",
        "B. 2",
        "C. -14",
        "D. 14"
      ],
      "answer": 0,
      "explanation": "先乘方，再乘法，最后减法：\n(-2)³ = (-2)×(-2)×(-2) = -8\n3 × (-2) = -6\n(-8) - (-6) = -8 + 6 = -2\n\n注意：(-2)³ 和 -2³ 是一样的（奇数次方有没有括号结果一样），\n但是 (-2)² 和 -2² 不一样！"
    },
    {
      "id": "m-075",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 2,
      "question": "计算：[(-3) + 5] × [(-2) - 3] = ？",
      "options": [
        "A. -10",
        "B. 10",
        "C. -40",
        "D. 40"
      ],
      "answer": 0,
      "explanation": "先算每个中括号：\n[(-3) + 5] = 2\n[(-2) - 3] = -5\n然后相乘：2 × (-5) = -10。\n\n括号优先！把每个括号当一个小房子，先算完里面的。"
    },
    {
      "id": "m-076",
      "subject": "math",
      "topic": "math-rational-mix",
      "difficulty": 3,
      "question": "计算：|(-3)² - 2³| ÷ (-1)⁵ + (-6) × (-2) = ？",
      "options": [
        "A. 11",
        "B. 13",
        "C. -11",
        "D. -13"
      ],
      "answer": 0,
      "explanation": "分步计算：\n① (-3)² = 9，2³ = 8，所以 |9 - 8| = |1| = 1\n② (-1)⁵ = -1（奇数次）\n③ 1 ÷ (-1) = -1\n④ (-6) × (-2) = 12\n⑤ 最后：(-1) + 12 = 11\n\n陷阱1：|(-3)² - 2³|，先算 (-3)² = 9，不是 -9！\n陷阱2：(-1)⁵ 是 -1，不是 1。5 是奇数。\n\n运算顺序：先括号内乘方 → 取绝对值 → 乘除 → 加减。"
    },
    {
      "id": "m-077",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：3a - (2a - 3b) + b = ？",
      "options": [
        "A. a + 4b",
        "B. a + 2b",
        "C. 5a + 4b",
        "D. a - 2b"
      ],
      "answer": 0,
      "explanation": "去括号：括号前是负号，里面的 2a 变 -2a，-3b 变 +3b。\n3a - 2a + 3b + b = (3a - 2a) + (3b + b) = a + 4b。\n\n口诀：负号去括号，里面全变号。"
    },
    {
      "id": "m-078",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 2,
      "question": "化简：2(3x - y) - 3(x + 2y) = ？",
      "options": [
        "A. 3x - 8y",
        "B. 3x + 4y",
        "C. 9x - 8y",
        "D. 3x + 8y"
      ],
      "answer": 0,
      "explanation": "分步：\n① 2(3x - y) = 6x - 2y\n② 3(x + 2y) = 3x + 6y\n③ 6x - 2y - 3x - 6y = (6x - 3x) + (-2y - 6y) = 3x - 8y\n\n注意：第二步前面是减号，所以 3(x+2y) 算出来后，整体前面有个负号，\n实际是 -3x - 6y，不是 -3x + 6y！"
    },
    {
      "id": "m-079",
      "subject": "math",
      "topic": "math-integer-op",
      "difficulty": 3,
      "question": "先化简再求值：当 x = -2 时，式子 4x - [2x + 3(1 - x)] 的值是？",
      "options": [
        "A. 13",
        "B. -11",
        "C. 11",
        "D. -13"
      ],
      "answer": 3,
      "explanation": "先化简，从最内层括号开始：\n① 3(1 - x) = 3 - 3x\n② 中括号内：2x + (3 - 3x) = 2x + 3 - 3x = -x + 3\n③ 外面：4x - (-x + 3) = 4x + x - 3 = 5x - 3\n\n再代入 x = -2：5×(-2) - 3 = -10 - 3 = -13。\n\n陷阱1：中括号前是减号，去掉中括号时里面每一项都要变号。\n陷阱2：3(1-x) 展开时，-x 要变成 -3x，不要漏掉负号。\n\n口诀：括号从内向外拆，每层拆完再合并。"
    },
    {
      "id": "m-080",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "解方程：3(x - 2) = 2(x + 1)",
      "options": [
        "A. x = 4",
        "B. x = 8",
        "C. x = -4",
        "D. x = -8"
      ],
      "answer": 1,
      "explanation": "展开括号：3x - 6 = 2x + 2\n移项：3x - 2x = 2 + 6\n合并：x = 8\n\n口诀：先去括号，再移项，移项要变号。"
    },
    {
      "id": "m-081",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 2,
      "question": "解方程：x/3 - 1 = x/2 + 2",
      "options": [
        "A. x = -18",
        "B. x = -6",
        "C. x = 6",
        "D. x = 18"
      ],
      "answer": 0,
      "explanation": "先去分母，两边同乘 6（3和2的最小公倍数）：\n2x - 6 = 3x + 12\n移项：2x - 3x = 12 + 6\n合并：-x = 18\n所以 x = -18。\n\n口诀：含分母方程，先去分母（乘最小公倍数），再去括号移项。"
    },
    {
      "id": "m-082",
      "subject": "math",
      "topic": "math-linear-eq",
      "difficulty": 3,
      "question": "某商店将进价为 80 元的商品按标价的八折出售，仍可获利 20%，求标价是多少元？",
      "options": [
        "A. 100 元",
        "B. 110 元",
        "C. 120 元",
        "D. 130 元"
      ],
      "answer": 2,
      "explanation": "设标价为 x 元。\n八折售价 = 0.8x\n获利 20% 意味着：售价 = 进价 × (1 + 20%) = 80 × 1.2 = 96 元\n\n列方程：0.8x = 96\n解：x = 96 ÷ 0.8 = 120 元。\n\n关键公式：\n- 打折后售价 = 标价 × 折扣\n- 利润 = 售价 - 进价\n- 利润率 = 利润 ÷ 进价 × 100%\n\n陷阱：获利 20% 是相对于进价 80 元，不是相对于标价！"
    },
    {
      "id": "m-083",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 2,
      "question": "计算：(-2)⁴ - 2⁴ = ？",
      "options": [
        "A. -32",
        "B. 0",
        "C. 16",
        "D. 32"
      ],
      "answer": 1,
      "explanation": "(-2)⁴ = (-2)×(-2)×(-2)×(-2) = 16（四个负号 → 偶数 → 为正）\n2⁴ = 2×2×2×2 = 16\n16 - 16 = 0。\n\n注意：(-2)⁴ 和 2⁴ 的结果都是 16。\n但对于奇数次方就不同了：(-2)³ = -8，2³ = 8。"
    },
    {
      "id": "m-084",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 2,
      "question": "比较大小：-2⁴ 与 (-2)⁴，正确的是？",
      "options": [
        "A. -2⁴ > (-2)⁴",
        "B. -2⁴ < (-2)⁴",
        "C. -2⁴ = (-2)⁴",
        "D. 无法比较"
      ],
      "answer": 1,
      "explanation": "-2⁴ = -(2⁴) = -16（负号在平方外）\n(-2)⁴ = 16（括号里的 -2 四次方）\n-16 < 16，所以 -2⁴ < (-2)⁴。\n\n超级对比：\n- 有括号：(-2)⁴ → 整个 -2 的 4 次方 = 16\n- 没括号：-2⁴ → 负的 2⁴ = -16\n差了一个负号，天壤之别！"
    },
    {
      "id": "m-085",
      "subject": "math",
      "topic": "math-power",
      "difficulty": 3,
      "question": "计算：(-1)²⁰²⁵ + (-1)²⁰²⁴ + (-2²) - |(-2)² - 2²| = ？",
      "options": [
        "A. -4",
        "B. 0",
        "C. 4",
        "D. -8"
      ],
      "answer": 0,
      "explanation": "逐项计算：\n① (-1)²⁰²⁵ = -1（2025 是奇数）\n② (-1)²⁰²⁴ = 1（2024 是偶数）\n③ -2² = -(2²) = -4\n④ |(-2)² - 2²| = |4 - 4| = |0| = 0\n\n合起来：(-1) + 1 + (-4) - 0 = -4。\n\n陷阱 1：(-1)²⁰²⁵ 奇数次 = -1，不是 1。\n陷阱 2：-2² = -4，不是 4。负号不在括号内。\n陷阱 3：|(-2)² - 2²| = |4-4| = 0，不要误以为里面是 -4-4 = -8。"
    },
    {
      "id": "m-086",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 2,
      "question": "计算：(-3/5) + 2/3 = ？",
      "options": [
        "A. -1/15",
        "B. 1/15",
        "C. -19/15",
        "D. 19/15"
      ],
      "answer": 1,
      "explanation": "先通分，分母 5 和 3 的最小公倍数是 15：\n(-3/5) = -9/15，2/3 = 10/15\n(-9/15) + 10/15 = 1/15。\n\n口诀：异分母加减，先通分再算分子。"
    },
    {
      "id": "m-087",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 2,
      "question": "计算：(-1/2) × 3/4 × (-8/3) = ？",
      "options": [
        "A. -1",
        "B. 1",
        "C. -2",
        "D. 2"
      ],
      "answer": 1,
      "explanation": "先看符号：两个负号（-1/2 和 -8/3）→ 偶数 → 结果为正。\n分子相乘：1 × 3 × 8 = 24\n分母相乘：2 × 4 × 3 = 24\n24/24 = 1。\n\n也可以约分简化：(-1/2) × (-8/3) = 8/6 = 4/3\n再乘以 3/4：(4/3) × (3/4) = 1。\n\n口诀：先定符号，再约分，最后乘。"
    },
    {
      "id": "m-088",
      "subject": "math",
      "topic": "math-frac",
      "difficulty": 3,
      "question": "计算：(-3/4) × 8/9 ÷ (-1/2) = ？",
      "options": [
        "A. -4/3",
        "B. -3/4",
        "C. 3/4",
        "D. 4/3"
      ],
      "answer": 3,
      "explanation": "从左到右运算，把除法变乘法：\n(-3/4) × 8/9 × (-2) = ？\n\n先约分：3 和 9 约掉得 1/3，4 和 8 约掉得 2。\n(-1/1) × (2/3) × (-2) = (-2/3) × (-2) = 4/3。\n\n符号：两个负号 → 偶数 → 结果为正。\n\n陷阱 1：÷ (-1/2) 要变成 × (-2)，不要写反了变成 × (-1/2)。\n陷阱 2：约分时注意分子分母，别约反了。"
    },
    {
      "id": "c-036",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 2,
      "question": "下列各组词语中，书写完全正确的一组是？",
      "options": [
        "A. 呕心沥血  迫不急待  脍炙人口",
        "B. 呕心沥血  迫不及待  脍炙人口",
        "C. 呕心历血  迫不及待  会炙人口",
        "D. 偶心沥血  迫不急待  脍灸人口"
      ],
      "answer": 1,
      "explanation": "B组三个词全部正确。\n易错辨析：\n①「呕心沥血」的「沥」是滴落，不是「历」（经历）；\n②「迫不及待」的「及」是来得及，不是「急」（着急）——虽然意思上都表示着急，但成语固定用「及」；\n③「脍炙人口」的「脍」是切细的肉（月字旁），「炙」是烤肉（火上烤肉），不是「灸」（针灸，久字底）。\n这种三词组合判断题比单选更难，需要同时排查多个易错点。"
    },
    {
      "id": "c-037",
      "subject": "chinese",
      "topic": "chinese-typo",
      "difficulty": 3,
      "question": "下列句子中，加点词语使用完全正确的一项是？",
      "options": [
        "A. 他的发言旁证博引，赢得了阵阵掌声。",
        "B. 他的发言旁征博引，赢得了阵阵掌声。",
        "C. 他的发言旁征搏引，赢得了阵阵掌声。",
        "D. 他的发言旁证搏引，赢得了阵阵掌声。"
      ],
      "answer": 1,
      "explanation": "正确答案是「旁征博引」，指说话写文章广泛引用材料作为依据。\n辨析四个字的含义：\n- 「旁」：广泛；\n- 「征」：收集、验证（非「证」——证明）；\n- 「博」：广博；\n- 「引」：引用。\n这道题放在句子语境中考，增加了迷惑性。A的「旁证」是另一个词（指间接证据），放在这里不对。成语中每个字都有特定含义，不能随意替换同音字。"
    },
    {
      "id": "c-038",
      "subject": "chinese",
      "topic": "chinese-typo2",
      "difficulty": 2,
      "question": "下列词语中，书写完全正确的一项是？",
      "options": [
        "A. 谈笑风声",
        "B. 谈笑风生",
        "C. 谈笑锋声",
        "D. 谈笑锋生"
      ],
      "answer": 1,
      "explanation": "正确答案是「谈笑风生」，「生」在这里是「产生、发生」的意思，形容谈话时有说有笑，兴致很高。\n常见错误：误写成「风声」，以为是谈话如风、笑声如声，这就望文生义了。\n「风生」出自古语，意为风趣横生，与「风声」无关。\n类似易错词：「老生常谈」不是「老声常谈」；「妙趣横生」不是「妙趣横声」。"
    },
    {
      "id": "c-039",
      "subject": "chinese",
      "topic": "chinese-typo2",
      "difficulty": 2,
      "question": "下列各组词语中，书写有误的一组是？",
      "options": [
        "A. 按部就班  委曲求全  一筹莫展",
        "B. 按步就班  委屈求全  一筹莫展",
        "C. 按部就班  委曲求全  一愁莫展",
        "D. 按步就班  委屈求全  一愁莫展"
      ],
      "answer": 3,
      "explanation": "D组三个词全错了。正确答案应为：按部就班、委曲求全、一筹莫展。\n逐个解析：\n①「按部就班」：「部」指门类、次序，「班」指排列。按一定的步骤进行。不能写成「步」（脚步）。\n②「委曲求全」：「委曲」是曲意迁就。注意和「委屈」（受到不公平对待而难过）不同！「委曲求全」是为了大局而勉强迁就。\n③「一筹莫展」：「筹」是竹签（古代计数工具），比喻一点办法也没有。不是「愁」（发愁）。"
    },
    {
      "id": "c-040",
      "subject": "chinese",
      "topic": "chinese-typo2",
      "difficulty": 3,
      "question": "下列四个选项中，哪一项中的两个成语书写全都正确？",
      "options": [
        "A. 不径而走 / 不胫而走",
        "B. 不胫而走 / 不翼而飞",
        "C. 不翼而飞 / 不径而飞",
        "D. 不径而走 / 不径而飞"
      ],
      "answer": 1,
      "explanation": "B组两个成语都正确：\n①「不胫而走」：「胫」是小腿。没有腿却跑了——比喻消息传播得很快。不能写成「径」（小路）。\n②「不翼而飞」：「翼」是翅膀。没有翅膀却飞走了——比喻东西突然不见了，也比喻消息传播很快。\n两个成语意思相近，都形容传播迅速。但「不翼而飞」还可以指东西丢失，而「不胫而走」只指消息传播。\nA/C/D中「不径而走/飞」都是错的，「径」是道路，不是小腿。"
    },
    {
      "id": "c-041",
      "subject": "chinese",
      "topic": "chinese-typo2",
      "difficulty": 3,
      "question": "下列各句中，没有错别字的一句是？",
      "options": [
        "A. 他工作认真负责，从不敷掩了事。",
        "B. 这篇文章针贬时弊，发人深省。",
        "C. 这幅画构思精巧，令人叹为观止。",
        "D. 我们要发扬坚苦奋斗的优良传统。"
      ],
      "answer": 2,
      "explanation": "C项全部正确。「叹为观止」指赞叹所见到的事物好到了极点。\n其他各项错误：\nA项：「敷掩」应为「敷衍」——「衍」是扩散，「敷衍」指做事不认真、表面应付。不能写成「掩」（掩盖）。\nB项：「针贬」应为「针砭」——「砭」是古代用石针治病，比喻指出错误。「贬」是降低、指责，与「砭」不同。\nD项：「坚苦」应为「艰苦」——「艰」指困难，「艰苦」指艰难困苦。虽然也有「坚苦」一词（指坚忍刻苦），但「艰苦奋斗」是固定搭配，习惯用「艰」。\n这类句境判断题要求学生在具体语境中识别错别字，比单纯看词语难度更高。"
    },
    {
      "id": "c-042",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 2,
      "question": "下列句子中，关联词使用恰当的一项是？",
      "options": [
        "A. 因为今天下雨，所以我不去上学了。",
        "B. 虽然今天下雨，但是我不去上学了。",
        "C. 如果今天下雨，就我不去上学了。",
        "D. 不但今天下雨，而且我不去上学了。"
      ],
      "answer": 0,
      "explanation": "A项使用正确：「因为……所以……」表示因果关系。下雨是原因，不去上学是结果。\nB项错误：「虽然……但是……」表示转折，但「下雨」和「不去上学」之间不是转折关系（下雨→不去，是顺承的因果，不是转折）。\nC项错误：「如果……就……」表示假设，但语序应为「我就不去上学了」，不能把「就」放在主语「我」前面。\nD项错误：「不但……而且……」表示递进，下雨和不去上学不是递进关系。\n关键：关联词的选择取决于前后分句的逻辑关系（因果/转折/假设/递进/并列/条件/选择）。"
    },
    {
      "id": "c-043",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 3,
      "question": "下列句子中，没有语病的一项是？",
      "options": [
        "A. 能否刻苦学习，是取得好成绩的关键。",
        "B. 这次活动，使同学们增长了见识。",
        "C. 他的写作水平有了明显的提高和改善。",
        "D. 为了防止这类事故不再发生，学校加强了安全教育。"
      ],
      "answer": 1,
      "explanation": "B项没有语病。主语是「这次活动」，谓语「使」，宾语「同学们」，补语「增长了见识」，结构完整。\nA项语病：两面对一面。「能否」是两面词（能和不能），而「取得好成绩」只对应一面。应改为「刻苦学习是取得好成绩的关键」，或前后都用两面：「能否刻苦学习，决定着能否取得好成绩」。\nC项语病：搭配不当。「水平」可以「提高」，但不能「改善」。「改善」一般搭配「条件」「状况」「关系」等。\nD项语病：否定不当。「防止」已含否定意，「不再」又加了一层否定，双重否定变成了肯定——意思变成了「让事故再次发生」。应删去「不」。\n这是一道综合病句辨析题，考查了四种不同的病句类型，需要逐项分析。"
    },
    {
      "id": "c-044",
      "subject": "chinese",
      "topic": "chinese-grammar",
      "difficulty": 3,
      "question": "下列各句中，属于「句式杂糅」语病的是？",
      "options": [
        "A. 老师对这个问题进行了详细地分析和研究。",
        "B. 这种精神值得我们可歌可泣。",
        "C. 他之所以取得好成绩的原因，是因为他努力学习。",
        "D. 校园里到处都是一片欢声笑语的景象。"
      ],
      "answer": 2,
      "explanation": "C项属于句式杂糅（也叫结构混乱）。「之所以……是因为……」和「……的原因，是……」是两个不同的句式，不能混用。\n应改为：「他之所以取得好成绩，是因为他努力学习。」或「他取得好成绩的原因，是他努力学习。」\nA项：「地」应为「的」——「进行分析和研究」，「分析」和「研究」是动词名物化用法，前面用「的」。这是「的/地/得」用法错误，不是句式杂糅。\nB项：「值得」和「可歌可泣」语义重复。「可歌可泣」本身就含有「值得」的意思。应改为「这种精神可歌可泣」或「这种精神值得我们歌颂」。属于语义重复，不是句式杂糅。\nD项：「到处」和「一片」语义重复。属于重复啰嗦，不是句式杂糅。\n句式杂糅是中考常考的病句类型，典型表现是把两个句子结构硬拼在一起。"
    },
    {
      "id": "c-045",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 2,
      "question": "下列句子中，成语使用恰当的一项是？",
      "options": [
        "A. 他在学习上总是好高骛远，所以成绩一直很好。",
        "B. 这道数学题很难，同学们都在处心积虑地思考。",
        "C. 张老师讲课深入浅出，同学们都听得津津有味。",
        "D. 看到朋友获了奖，他心里产生了趋之若鹜的想法。"
      ],
      "answer": 2,
      "explanation": "C项使用正确：「深入浅出」指用浅显的语言把深刻的内容讲明白，形容讲课好很恰当。\nA项错误：「好高骛远」是贬义词，指不切实际地追求过高过远的目标。前面说成绩很好，后面用贬义词，前后矛盾。\nB项错误：「处心积虑」是贬义词，指千方百计地谋划（做坏事）。同学们思考数学题应该用褒义或中性词，如「冥思苦想」「绞尽脑汁」。\nD项错误：「趋之若鹜」是贬义词，指像鸭子一样成群跑过去，比喻很多人争相追逐（不好的事物）。看到朋友获奖产生想法，不能用贬义词。\n这道题重点考查成语的感情色彩——褒义、贬义、中性要分清楚。"
    },
    {
      "id": "c-046",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 2,
      "question": "下列句子中，成语使用不恰当的一项是？",
      "options": [
        "A. 这些珍贵的史料在历史研究中发挥着举足轻重的作用。",
        "B. 小明在演讲比赛中侃侃而谈，获得了评委的一致好评。",
        "C. 听到这个好消息，他高兴得手舞足蹈起来。",
        "D. 对于这个问题，大家众说纷纭，莫衷一是，最终达成了共识。"
      ],
      "answer": 3,
      "explanation": "D项成语使用不恰当，前后矛盾。「众说纷纭」指说法很多很杂；「莫衷一是」指不能得出一致结论。但后面又说「最终达成了共识」，与前两个成语矛盾。\nA项：「举足轻重」指所处地位重要，一举一动都关系到全局。用来形容珍贵史料的作用，恰当。\nB项：「侃侃而谈」指理直气壮、从容不迫地说话，形容小明演讲得体，恰当。\nC项：「手舞足蹈」指双手舞动、双脚跳动，形容高兴到极点，恰当。\n易错提醒：使用成语时，要注意前后语境是否一致，不能自相矛盾。"
    },
    {
      "id": "c-047",
      "subject": "chinese",
      "topic": "chinese-idiom",
      "difficulty": 3,
      "question": "下列句子中，加点的成语使用最恰当的一项是？",
      "options": [
        "A. 他在比赛中【差强人意】的表现让教练非常满意。",
        "B. 这部小说情节曲折、【首当其冲】，让人爱不释手。",
        "C. 王老师【耳提面命】地教导学生，深受大家爱戴。",
        "D. 对于学习中的困难，我们不能【望其项背】，要迎难而上。"
      ],
      "answer": 2,
      "explanation": "C项使用正确：「耳提面命」出自《诗经》，原意是提着耳朵当面教导，形容长辈恳切教导。用来形容王老师认真教导学生，恰当。\nA项错误：「差强人意」的意思是「大体上还能使人满意」（差=稍微，强=振奋），是一个中性偏褒义的成语。但很多同学误以为是「很差、不如人意」的意思！这里教练「非常满意」与「差强人意」的程度不匹配。\nB项错误：「首当其冲」指最先受到攻击或遭遇灾难，不能用来形容小说情节精彩。这是对成语望文生义的典型错误。\nD项错误：「望其项背」指能看到别人的颈项和后背，比喻赶得上。通常用否定形式「难以望其项背」表示差距大追不上。这里说「不能望其项背」是想表达「不能畏惧」，但成语用错了。\n这道题的难点在于几个成语都有常见的误解误用，考查的是对成语本义的精准把握。"
    },
    {
      "id": "c-048",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "下列诗句中，描写秋天景色的是？",
      "options": [
        "A. 碧玉妆成一树高，万条垂下绿丝绦",
        "B. 接天莲叶无穷碧，映日荷花别样红",
        "C. 停车坐爱枫林晚，霜叶红于二月花",
        "D. 忽如一夜春风来，千树万树梨花开"
      ],
      "answer": 2,
      "explanation": "C项出自杜牧《山行》，「霜叶红于二月花」——经霜的枫叶比二月的春花还红，典型的秋天景象（枫叶、霜）。\nA项：贺知章《咏柳》——「碧玉」「绿丝绦」写的是春天柳树发芽的景象。\nB项：杨万里《晓出净慈寺送林子方》——「荷花别样红」写的是夏天（六月）的西湖。\nD项：岑参《白雪歌送武判官归京》——「千树万树梨花开」看似写春天，实际是用梨花比喻雪花，写的是冬天的雪景！这是常考陷阱。\n季节判断题的关键是抓住诗中的典型意象：春（柳、花、燕）、夏（荷、蝉、蛙）、秋（枫、霜、菊、雁）、冬（雪、梅、冰）。"
    },
    {
      "id": "c-049",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "「烽火连三月，家书抵万金」出自杜甫的哪首诗？",
      "options": [
        "A. 《春望》",
        "B. 《登高》",
        "C. 《望岳》",
        "D. 《茅屋为秋风所破歌》"
      ],
      "answer": 0,
      "explanation": "出自杜甫《春望》：国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。\n这首诗写于安史之乱期间，杜甫被困长安，看到春天景象却满心忧伤。「烽火」指战火，「家书抵万金」是说在战乱中一封家信比万两黄金还珍贵。\n注意区分杜甫其他名篇：《登高》是「无边落木萧萧下，不尽长江滚滚来」；《望岳》是「会当凌绝顶，一览众山小」；《茅屋为秋风所破歌》是「安得广厦千万间，大庇天下寒士俱欢颜」。"
    },
    {
      "id": "c-050",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 2,
      "question": "下列对「沉舟侧畔千帆过，病树前头万木春」理解不正确的一项是？",
      "options": [
        "A. 这句诗出自刘禹锡的《酬乐天扬州初逢席上见赠》",
        "B. 「沉舟」和「病树」是诗人自比",
        "C. 表达了诗人消沉悲观的情绪",
        "D. 蕴含了「新事物必将取代旧事物」的哲理"
      ],
      "answer": 2,
      "explanation": "C项理解错误。这句诗并非消沉悲观，恰恰相反——沉船旁边有千帆竞发，病树前面是万木争春，表达了诗人乐观豁达的心态和对新生事物的信心。\n刘禹锡被贬多年后回到京城，朋友白居易为他写诗感叹，刘禹锡以此诗作答，展现了他虽历经挫折却依然积极向上的精神。\nA/B/D三项都正确。这句诗常考的哲理：「沉舟侧畔千帆过」说明新事物层出不穷，时代永远向前。"
    },
    {
      "id": "c-051",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 3,
      "question": "阅读下面的诗句，选出对其表达情感分析正确的一项。\n「我寄愁心与明月，随君直到夜郎西。」（李白《闻王昌龄左迁龙标遥有此寄》）",
      "options": [
        "A. 表达了诗人对月亮的喜爱之情",
        "B. 表达了诗人送别友人时的依依不舍之情",
        "C. 表达了诗人对友人被贬的同情与关切之情",
        "D. 表达了诗人想要隐居山林的想法"
      ],
      "answer": 2,
      "explanation": "正确答案是C。李白听到好友王昌龄被贬到龙标（今湖南黔阳），写了这首诗。\n「左迁」就是贬官降职（古代以右为尊，左迁就是降职）。\n「我寄愁心与明月」——我把忧愁的心托付给明月；\n「随君直到夜郎西」——让明月陪着你一直到夜郎以西（龙标在夜郎的西边）。\n这里运用了拟人手法，把明月当成了传递情感的使者。\n易错点：A项只看到表面（明月），忽略了深层情感；B项「依依不舍」不够准确，重点不是不舍而是关切和安慰；D项完全偏离。\n鉴赏古诗情感，要结合作者的写作背景和诗中的关键词（如「左迁」「愁心」）。"
    },
    {
      "id": "c-052",
      "subject": "chinese",
      "topic": "chinese-poem",
      "difficulty": 3,
      "question": "下列诗句与其蕴含哲理对应不正确的一项是？",
      "options": [
        "A. 「山重水复疑无路，柳暗花明又一村」——困境中蕴藏着希望",
        "B. 「不畏浮云遮望眼，自缘身在最高层」——站得高才能看得远",
        "C. 「问渠那得清如许，为有源头活水来」——要不断学习新知识",
        "D. 「春蚕到死丝方尽，蜡炬成灰泪始干」——大自然生生不息"
      ],
      "answer": 3,
      "explanation": "D项对应不正确。「春蚕到死丝方尽，蜡炬成灰泪始干」（李商隐《无题》）表达的哲理是「至死不渝的奉献精神/执着追求」，而不是「大自然生生不息」。\nA项正确：陆游《游山西村》，山重水复看似无路，柳暗花明又出现村庄——绝境中总有转机。\nB项正确：王安石《登飞来峰》，不怕浮云遮住视线，因为站在最高层——高瞻远瞩，不被眼前小事迷惑。\nC项正确：朱熹《观书有感》，池塘的水为什么这么清澈？因为有活水不断流入——人也要不断读书学习。\n这类哲理对应题要求既要读懂诗句字面意思，又要理解其深层寓意，是古诗鉴赏中的高难度题型。"
    },
    {
      "id": "c-053",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "下列句子中「以」字用法与其他三项不同的一项是？",
      "options": [
        "A. 屠惧，投以骨（《狼》）",
        "B. 以刀劈狼首（《狼》）",
        "C. 蒙辞以军中多务（《孙权劝学》）",
        "D. 不以物喜，不以己悲（《岳阳楼记》）"
      ],
      "answer": 3,
      "explanation": "D项中「以」表原因，意思是「因为」。整句：不因为外物的好坏和自己的得失而或喜或悲。\nA项：「以」是介词「把」——投以骨=以骨投之，把骨头扔给狼。\nB项：「以」是介词「用」——以刀劈狼首，用刀劈狼头。\nC项：「以」是介词「用」——蒙辞以军中多务=吕蒙用军中事务多来推辞。\nA/B/C三项都是介词（表工具/方式），D项是介词但表原因，用法不同。\n「以」是中考高频虚词，常见用法有：①用/拿/把（介词）②因为（介词）③来/用来（连词）④认为（动词）⑤按照（介词）。需结合具体语境判断。"
    },
    {
      "id": "c-054",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "下列句子中「其」字用法与其他三项不同的一项是？",
      "options": [
        "A. 择其善者而从之（《论语》）",
        "B. 场主积薪其中（《狼》）",
        "C. 其真无马邪（《马说》）",
        "D. 屠大窘，恐前后受其敌（《狼》）"
      ],
      "answer": 2,
      "explanation": "C项中「其」表反问语气，相当于「难道」。整句：难道真的没有千里马吗？\nA项：「其」是代词「他们的」——选择他们好的方面来学习。\nB项：「其」是代词「那（麦场的）」——场主在麦场中间堆了柴草。\nD项：「其」是代词「它们的（狼的）」——屠夫很窘迫，担心前后受到狼的攻击。\nA/B/D三项都是代词，C项是语气副词。\n「其」的主要用法：①代词（他/她/它/他们/那）②语气副词（难道/大概/一定）③指示代词（其中的）。中考常考代词与语气副词的区分。"
    },
    {
      "id": "c-055",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 2,
      "question": "下列「于」字用法分析正确的一项是？",
      "options": [
        "A. 「于我如浮云」的「于」和「其一犬坐于前」的「于」都表示「在」",
        "B. 「于我如浮云」的「于」表示「对于」，「其一犬坐于前」的「于」表示「在」",
        "C. 「皆以美于徐公」的「于」和「其一犬坐于前」的「于」都表示「在」",
        "D. 「于我如浮云」的「于」和「皆以美于徐公」的「于」都表示「比」"
      ],
      "answer": 1,
      "explanation": "B项分析正确。\n- 「于我如浮云」（《论语》）：对于我来说就像浮云一样，「于」是「对、对于」。\n- 「其一犬坐于前」（《狼》）：其中一只狼像狗一样坐在前面，「于」是「在」。\n- 「皆以美于徐公」（《邹忌讽齐王纳谏》）：都认为（我）比徐公美，「于」是「比」。\n三个「于」意思各不相同：对于/在/比。\nA项错在把「对于」和「在」混为一谈；C项错在把「比」当成了「在」；D项错在把「对于」当成了「比」。\n「于」的主要用法：①在（处所）②对/对于（对象）③比（比较）④从（起点）⑤被（被动）。"
    },
    {
      "id": "c-056",
      "subject": "chinese",
      "topic": "chinese-classical",
      "difficulty": 3,
      "question": "阅读下列四个句子，判断「之」字用法分类正确的一项是？\n①学而时习之  ②送杜少府之任蜀州  ③禽兽之变诈几何哉  ④久之，目似瞑",
      "options": [
        "A. ①③/②④  —— ①③代词，②④助词",
        "B. ①②/③④  —— ①②动词，③④助词",
        "C. ①/②/③/④  —— 四个「之」用法各不相同",
        "D. ①④/②/③  —— ①④代词，②动词，③助词"
      ],
      "answer": 2,
      "explanation": "C项正确，四个「之」用法各不相同。\n①「学而时习之」：之=代词「它」（指学过的知识）。\n②「送杜少府之任蜀州」：之=动词「去、往」。\n③「禽兽之变诈几何哉」：之=助词「的」——禽兽的欺骗手段能有多少呢？\n④「久之，目似瞑」：之=音节助词，无实义，只起凑足音节的作用——过了很久，（狼的）眼睛好像闭上了。\nA项错误：①是代词，③是助词「的」，不能归为一类。\nB项错误：①不是动词。\nD项错误：①是代词，④是音节助词（无实义），不能归为同类。\n「之」是文言文中最常见的虚词，必须掌握的用法有：\n1. 代词（它/他/她/这）\n2. 助词「的」\n3. 动词「去、往」\n4. 用在主谓之间，取消句子独立性（不译）\n5. 音节助词（不译）"
    },
    {
      "id": "c-057",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 2,
      "question": "下列文学常识表述正确的一项是？",
      "options": [
        "A. 「大李杜」指李白和杜牧，「小李杜」指李商隐和杜甫",
        "B. 《诗经》是我国第一部诗歌总集，分为「风」「雅」「颂」三部分",
        "C. 《史记》是我国第一部编年体通史，作者是西汉的司马迁",
        "D. 唐宋八大家中，属于唐朝的有韩愈、柳宗元、欧阳修"
      ],
      "answer": 1,
      "explanation": "B项完全正确。《诗经》收集了西周初年至春秋中叶的诗歌305篇，按内容分为风（民间歌谣）、雅（宫廷正乐）、颂（宗庙祭祀）。\nA项错误：「大李杜」是李白和杜甫（不是杜牧），「小李杜」是李商隐和杜牧（不是杜甫）。记法：大李杜是盛唐两大诗人，小李杜是晚唐两大诗人。\nC项错误：《史记》是纪传体（以人物为中心），不是编年体（按时间顺序）。编年体代表是《左传》《资治通鉴》。纪传体=《史记》开创。\nD项错误：唐宋八大家中唐朝只有2位（韩愈、柳宗元），欧阳修是宋朝的。"
    },
    {
      "id": "c-058",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 2,
      "question": "下列关于鲁迅作品的表述，不正确的一项是？",
      "options": [
        "A. 《朝花夕拾》是鲁迅的散文集",
        "B. 《故乡》选自小说集《呐喊》",
        "C. 《社戏》选自散文集《朝花夕拾》",
        "D. 《藤野先生》选自散文集《朝花夕拾》"
      ],
      "answer": 2,
      "explanation": "C项表述错误。《社戏》是小说，选自鲁迅的小说集《呐喊》，不是选自散文集《朝花夕拾》。\nA项正确：《朝花夕拾》是鲁迅唯一的散文集（回忆性散文），共10篇。\nB项正确：《故乡》选自《呐喊》（里面有名句「其实地上本没有路，走的人多了，也便成了路」）。\nD项正确：《藤野先生》选自《朝花夕拾》，回忆了鲁迅在日本留学时的老师。\n辨析技巧：鲁迅的作品集有——小说集《呐喊》《彷徨》《故事新编》，散文集《朝花夕拾》，散文诗集《野草》。不要搞混！"
    },
    {
      "id": "c-059",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 3,
      "question": "下列关于古代文体知识的表述，正确的一项是？",
      "options": [
        "A. 「记」是古代一种叙事文体，如《小石潭记》《岳阳楼记》《醉翁亭记》都属于「记」",
        "B. 「说」是古代一种议论文体，如《马说》《爱莲说》《出师表》都属于「说」",
        "C. 「铭」是古代刻在器物上用来警戒自己的文字，如《陋室铭》《岳阳楼记》都属于「铭」",
        "D. 「表」是古代臣子向帝王陈情的文书，如《出师表》《陈情表》《马说》都属于「表」"
      ],
      "answer": 0,
      "explanation": "A项正确。「记」是古代的一种散文体裁，以叙事、写景、状物为主，也可抒发情怀或阐述观点。初中学过的名篇：《小石潭记》（柳宗元）、《岳阳楼记》（范仲淹）、《醉翁亭记》（欧阳修）、《桃花源记》（陶渊明）。\nB项错误：《出师表》是「表」不是「说」。「说」是议论文体（《马说》韩愈、《爱莲说》周敦颐、《师说》韩愈），而《出师表》是臣子向君主陈情的「表」。\nC项错误：《岳阳楼记》是「记」不是「铭」。「铭」的代表是《陋室铭》（刘禹锡），特点是篇幅短小、有韵。\nD项错误：《马说》是「说」不是「表」。「表」的代表是《出师表》（诸葛亮）、《陈情表》（李密）。\n这道题考查古代文体分类，需要准确区分「记/说/铭/表/序」等常见文体的特征和代表作品。"
    },
    {
      "id": "c-060",
      "subject": "chinese",
      "topic": "chinese-lit",
      "difficulty": 3,
      "question": "下列对文学名著的表述，完全正确的一项是？",
      "options": [
        "A. 《水浒传》中「智取生辰纲」的组织者是宋江，他带领吴用等人截取了梁中书的生辰纲",
        "B. 《西游记》中孙悟空的第一位师父是唐僧，教会了他七十二变和筋斗云",
        "C. 《骆驼祥子》中祥子最大的梦想是拥有一辆自己的洋车，但三次买车梦想都破灭了",
        "D. 《钢铁是怎样炼成的》的作者是苏联作家高尔基，主人公是保尔·柯察金"
      ],
      "answer": 2,
      "explanation": "C项正确。老舍《骆驼祥子》中，祥子从农村来到北平城，最大的梦想就是拥有一辆自己的洋车。他三次买车：第一次买了被大兵抢走，第二次攒的钱被孙侦探敲诈，第三次用虎妞的钱买车但虎妞死后又卖掉办丧事——三次梦想全部破灭。\nA项错误：「智取生辰纲」的组织者是晁盖（不是宋江），参与的有吴用、公孙胜、刘唐、阮氏三兄弟等。宋江此时不在场。\nB项错误：孙悟空的第一位师父是菩提祖师（不是唐僧），菩提祖师教会了他七十二变和筋斗云。唐僧是后来救他出五行山、带他取经的师父。\nD项错误：《钢铁是怎样炼成的》作者是奥斯特洛夫斯基（不是高尔基）。高尔基的代表作是《童年》《在人间》《我的大学》和《海燕》。\n这道题考查名著细节，每个干扰项都设置了学生常犯的错误，需要精读名著才能准确判断。"
    },
    {
      "id": "e-046",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 3,
      "question": "Tom usually ___ to school on foot, but today he ___ a bus because it's raining.",
      "options": [
        "A. go... takes",
        "B. goes... is taking",
        "C. is going... takes",
        "D. goes... take"
      ],
      "answer": 1,
      "explanation": "此题考查一般现在时与现在进行时的混合辨析，是中考高频陷阱！\n\n解题步骤：\n① usually（通常）→ 习惯性动作 → 一般现在时 → Tom是第三人称单数 → goes\n② but today（但今天）+ 原因从句 → 当前正在发生的临时变化 → 现在进行时 → is taking\n\n典型错误：\n- 选A：today后面动词没变进行时\n- 选C：把usually错当成进行时\n- 选D：today后面用了动词原形\n\n口诀：usually/always/every day → 一般现在时；now/today/Look! → 进行时。两个时态同框时，各自找各自的时间标志词！"
    },
    {
      "id": "e-047",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 3,
      "question": "There ___ some milk and two apples in the fridge.",
      "options": [
        "A. is",
        "B. are",
        "C. am",
        "D. be"
      ],
      "answer": 0,
      "explanation": "此题考查There be句型的「就近原则」+ 不可数名词陷阱。\n\n解题思路：\n① milk是不可数名词，视为单数，milk离be动词最近 → 用is\n② 后面虽然有两个苹果（复数），但就近原则只看离be最近的那个名词！\n\n易错点：很多同学看到后面的\"two apples\"是复数就选了are，大错特错！\n\n口诀：There be就近看，离谁近就听谁的。不可数名词永远当单数！\n\n常见不可数名词：milk, water, bread, rice, money, news, information"
    },
    {
      "id": "e-048",
      "subject": "english",
      "topic": "english-present",
      "difficulty": 3,
      "question": "阅读对话，选择正确答案。\nA: ___ your father ___ English?\nB: Yes, he does. He ___ it every morning.",
      "options": [
        "A. Do... speak... speaks",
        "B. Does... speak... speaks",
        "C. Does... speaks... speak",
        "D. Do... speaks... speaks"
      ],
      "answer": 1,
      "explanation": "此题考查一般现在时疑问句和肯定句的完整填空，基础弱的同学极易在第二空翻车！\n\n解题步骤：\n第一空+第二空（问句）：your father = 第三人称单数 → 用Does提问 → Does后动词必须用原形speak（不能加s！）\n第三空（答句）：He是第三人称单数，肯定句 → speaks（要加s！）\n\n核心陷阱：does后面动词用原形，但doesn't后面也是原形；肯定句主语是第三人称单数时动词才加s！\n\n对比记忆：\n- He speaks English.（肯定句，speak加s）\n- Does he speak English?（问句，does后speak用原形）\n- He doesn't speak English.（否定句，doesn't后speak用原形）\n\n口诀：does出场，动词光膀子（脱掉s）！"
    },
    {
      "id": "e-049",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 3,
      "question": "找出划线部分发音与其他三个不同的单词。",
      "options": [
        "A. cake",
        "B. name",
        "C. cat",
        "D. late"
      ],
      "answer": 2,
      "explanation": "此题考查元音字母a在不同音节结构中的发音规律，是音标题中的经典题型！\n\n分析：\n- cake /keɪk/：a_e结构（辅音+a+辅音+不发音e），a发本音/eɪ/\n- name /neɪm/：同上，a发本音/eɪ/\n- cat /kæt/：闭音节（辅音+a+辅音），a发短音/æ/\n- late /leɪt/：同上，a发本音/eɪ/\n\n规律：末尾有不发音e时，前面的元音发「本音」（字母本身的读音）；闭音节（辅元辅结尾）发短音。\n\n口诀：元辅e结构，元音读本音；辅元辅结构，元音读短音。\ncat是短音/æ/，其他三个都是长音/eɪ/。"
    },
    {
      "id": "e-050",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 3,
      "question": "My father is ___ university teacher and he goes to work by ___ bike every day.",
      "options": [
        "A. a... /",
        "B. an... /",
        "C. a... the",
        "D. an... a"
      ],
      "answer": 0,
      "explanation": "此题考查a/an的发音判断 + 交通工具前零冠词的用法，两个陷阱！\n\n陷阱一：university开头字母是u（元音字母），但发音是/juː/，开头音素/j/是辅音！所以用a，不是an。\n类似词：a university, a useful book, a uniform, a European（u发/juː/开头都用a）\n\n陷阱二：by + 交通工具 = 零冠词（不加a/an/the）。\nby bike ✓  by a bike ✗\nby bus ✓  by the bus ✗\n\n口诀：a/an看音不看形！u发「优」就用a。交通工具by后免冠词！"
    },
    {
      "id": "e-051",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 3,
      "question": "— Is this ___ schoolbag?\n— No, it isn't ___. It's ___.",
      "options": [
        "A. your... mine... his",
        "B. yours... my... him",
        "C. your... my... his",
        "D. yours... mine... his"
      ],
      "answer": 0,
      "explanation": "此题考查形容词性物主代词和名词性物主代词的混合辨析，代词题中的「老大难」！\n\n解题步骤：\n第一空：schoolbag是名词，前面需要用形容词性物主代词修饰 → your（你的）\n第二空：后面没有名词，需要用名词性物主代词 → mine（我的）\n第三空：后面没有名词，同样需要名词性物主代词 → his（他的）\n\n对比表：\n| 形容词性（后接名词） | 名词性（独立使用） |\n|---|---|\n| my book | This book is mine. |\n| your pen | This pen is yours. |\n| his bag | This bag is his. |\n| her ruler | This ruler is hers. |\n\n口诀：有名用形代，无名用名代！his特殊记——形代名代一个样。"
    },
    {
      "id": "e-052",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 3,
      "question": "My birthday is ___ July 15th, and I was born ___ 2011 ___ Guangzhou.",
      "options": [
        "A. on... in... in",
        "B. in... on... in",
        "C. on... in... at",
        "D. at... in... in"
      ],
      "answer": 0,
      "explanation": "此题考查in/on/at在时间+地点中的综合使用，三大介词混用是中考必考难点！\n\n时间介词规则：\n① at + 具体时刻（at 8:00, at noon, at night）\n② on + 具体某天/某日上午下午晚上（on July 15th, on Monday, on a cold morning）\n③ in + 年月季节/泛指上午下午晚上（in 2011, in July, in summer, in the morning）\n\n地点介词：\n④ in + 大地点（城市、国家、省份）→ in Guangzhou\n\n解题：July 15th是具体某一天 → on；2011是年份 → in；Guangzhou是城市 → in\n\n口诀：at点on天in月年；in大on小at点。广州是大城市→in。"
    },
    {
      "id": "e-053",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 3,
      "question": "— Mom, ___ I go out to play now?\n— No, you ___. You ___ finish your homework first.",
      "options": [
        "A. can... can't... must",
        "B. must... needn't... can",
        "C. may... mustn't... can",
        "D. can... can't... can"
      ],
      "answer": 0,
      "explanation": "此题考查情态动词can/must/may在不同语境下的细微区别，是情态动词的综合应用题！\n\n分析每个空：\n第一空：孩子请求妈妈允许 → can或may都可以表示「可以吗？」\n第二空：妈妈不允许 → can't（不可以）\n第三空：妈妈提出要求，必须先完成作业 → must（必须）\n\n易混辨析：\n- can = 能/可以（能力+许可）\n- may = 可以（正式许可，语气更礼貌）\n- must = 必须（义务/命令）\n- mustn't = 禁止\n- needn't = 不必\n\n为什么B不对？must提问时否定才用needn't，但这里妈妈是直接说「不可以」，用can't即可。must finish表示「必须完成」，语气强烈。\n\n口诀：请求许可用can/may，禁止用can't/mustn't，必须用must！"
    },
    {
      "id": "e-054",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 3,
      "question": "阅读短文，选择正确答案。\nIt's 7:30 in the evening. Tom's family are all at home. Mr. Green ___ a newspaper. Mrs. Green ___ dinner in the kitchen. Tom and his sister ___ their homework in the study.",
      "options": [
        "A. reads... cooks... do",
        "B. is reading... is cooking... are doing",
        "C. read... cook... are doing",
        "D. is reading... cooks... do"
      ],
      "answer": 1,
      "explanation": "此题考查现在进行时的语境判断——完形填空式的综合时态题！\n\n解题思路：\n开头\"It's 7:30 in the evening\"交代了具体时间背景，描述的是「此时此刻正在发生的事」→ 全部用现在进行时。\n\n逐空分析：\n- Mr. Green（第三人称单数）→ is reading\n- Mrs. Green（第三人称单数）→ is cooking\n- Tom and his sister（复数）→ are doing\n\n易错点：\n很多同学看到Tom是第三人称单数就会犹豫，但Tom and his sister是两个人在做同一件事 → 复数主语 → are doing。\n\n口诀：描述正在进行的画面，一镜到底用进行时！主语单复数决定be动词用is还是are。"
    },
    {
      "id": "e-055",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 2,
      "question": "I want to ___ some vegetables at the supermarket.",
      "options": [
        "A. buy",
        "B. by",
        "C. bye",
        "D. bring"
      ],
      "answer": 0,
      "explanation": "核心词汇辨析：\nbuy = 买；by = 通过/在……旁边；bye = 再见；bring = 带来。\n\nwant to do sth = 想要做某事，to后面跟动词原形。\n\n常见同音词混淆：buy / by / bye 发音都是 /baɪ/，但意思完全不同！\n\n记法：buy里的u像购物袋 → 买东西；by里的y像箭头 → 通过；bye有e → 告别时拖长音bye~"
    },
    {
      "id": "e-056",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 2,
      "question": "Which word means 「困难的」?",
      "options": [
        "A. easy",
        "B. difficult",
        "C. different",
        "D. delicious"
      ],
      "answer": 1,
      "explanation": "形容词辨析（易混词）：\neasy = 容易的；difficult = 困难的；different = 不同的；delicious = 美味的。\n\n易混点：difficult和different长得像，但意思完全不同！\ndifficult = dif + ficult（困难）\ndifferent = dif + ferent（不同）\n\n记法：difficult里有「cult」像「苦」→ 困难让人苦；different里有「rent」像「人特」→ 与众不同。"
    },
    {
      "id": "e-057",
      "subject": "english",
      "topic": "english-words",
      "difficulty": 2,
      "question": "The opposite of 'hot' is ___.",
      "options": [
        "A. warm",
        "B. cool",
        "C. cold",
        "D. wet"
      ],
      "answer": 2,
      "explanation": "反义词辨析：\nhot（热）↔ cold（冷）——完全相反\nwarm（温暖）↔ cool（凉爽）——程度较轻的相反\nwet（湿）↔ dry（干）\n\n温度从高到低：hot > warm > cool > cold\n\n注意区分：warm和cool也是反义词，但题目问的是hot的反义词，hot的程度最强 → 对应cold。\n\n口诀：hot↔cold（极端），warm↔cool（温和）。"
    },
    {
      "id": "e-058",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 2,
      "question": "How much ___ these shoes?",
      "options": [
        "A. is",
        "B. are",
        "C. am",
        "D. be"
      ],
      "answer": 1,
      "explanation": "问价格句型：How much + be动词 + 主语？\n\n关键：be动词的单复数由主语决定！\nthese shoes（这些鞋子）→ 复数主语 → 用are。\n\n对比：\n- How much is this book?（这本书多少钱？→ 单数）\n- How much are these shoes?（这些鞋子多少钱？→ 复数）\n\n易错点：不要看到much就觉得用单数！much修饰的是钱（不可数），但be动词和主语保持一致。\n\n口诀：how much看主语，单is复are不迷糊。"
    },
    {
      "id": "e-059",
      "subject": "english",
      "topic": "english-be",
      "difficulty": 2,
      "question": "Both my mother and I ___ interested in music.",
      "options": [
        "A. is",
        "B. am",
        "C. are",
        "D. be"
      ],
      "answer": 2,
      "explanation": "both...and...（……和……都）连接两个主语时，视为复数！\n\nmy mother and I = 两个人 → 复数 → 用are。\n\n易错点：有同学看到I就想用am，但both A and B = A和B加在一起 → 永远是复数。\n\n类似结构：\n- Both Tom and Jerry are funny.\n- Both she and her sister like music.\n\n口诀：both...and...连接两个，be动词永远用are！"
    },
    {
      "id": "e-060",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 2,
      "question": "He can play ___ violin, but he can't play ___ chess.",
      "options": [
        "A. the... the",
        "B. /... /",
        "C. the... /",
        "D. /... the"
      ],
      "answer": 2,
      "explanation": "冠词特殊规则：乐器前加the，棋类/球类不加冠词！\n\n规则总结：\n① 乐器前 + the：play the piano / play the violin / play the guitar\n② 球类零冠词：play basketball / play football / play tennis\n③ 棋类零冠词：play chess / play Chinese chess\n\n记法：乐器是「西洋乐器」，加个the显得洋气；球类和棋类是中国学生天天玩的，不用加the。\n\n口诀：西洋乐器the上场，球类棋类the下岗！"
    },
    {
      "id": "e-061",
      "subject": "english",
      "topic": "english-article",
      "difficulty": 2,
      "question": "This is ___ useful dictionary. I use it every day.",
      "options": [
        "A. a",
        "B. an",
        "C. the",
        "D. /"
      ],
      "answer": 0,
      "explanation": "此题是a/an辨析的经典陷阱题！\n\nuseful开头字母u是元音字母，但发音是/juːsfl/，开头音素/j/是辅音 → 用a！\n\n同类词总结（u发/juː/，用a）：\n- a university（一所大学）\n- a useful book（一本有用的书）\n- a uniform（一套校服）\n- a European country（一个欧洲国家）\n\n对比（u发/ʌ/，用an）：\n- an umbrella（一把伞）\n- an uncle（一个叔叔）\n- an ugly duckling（一只丑小鸭）\n\n口诀：u发「优」用a，u发「啊」用an！看音不看形！"
    },
    {
      "id": "e-062",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 2,
      "question": "Please help ___ to some fish, children.",
      "options": [
        "A. you",
        "B. your",
        "C. yourself",
        "D. yourselves"
      ],
      "answer": 3,
      "explanation": "此题考查反身代词的单复数 + 固定搭配！\n\nhelp oneself to sth = 随便吃/自取（食物）\n\n解题关键：children（孩子们）是复数 → 用yourselves。\n\n反身代词对照：\n- 单数：myself / yourself / himself / herself / itself\n- 复数：ourselves / yourselves / themselves\n\n如果是对一个人说 → help yourself\n如果是对多个人说 → help yourselves\n\n固定搭配总结：\n- help oneself to sth（自取）\n- enjoy oneself（玩得开心）\n- by oneself（独自）\n- teach oneself（自学）\n\n口诀：help oneself请自便，单yourself复yourselves。"
    },
    {
      "id": "e-063",
      "subject": "english",
      "topic": "english-pronoun",
      "difficulty": 2,
      "question": "My bike is broken. Can I use ___?",
      "options": [
        "A. you",
        "B. your",
        "C. yours",
        "D. yourself"
      ],
      "answer": 2,
      "explanation": "此题考查名词性物主代词yours的用法！\n\n分析句子：use后面需要一个宾语，指的是「你的（自行车）」→ 后面没有名词bike → 用名词性物主代词yours。\n\nCan I use yours? = Can I use your bike?\nyours代替了your bike，避免重复。\n\n四选项辨析：\n- you（你，主格/宾格）→ 不能说Can I use you\n- your（你的，形容词性，后面必须跟名词）→ Can I use your bike ✓ / Can I use your ✗\n- yours（你的，名词性，独立使用）→ Can I use yours ✓\n- yourself（你自己，反身代词）→ 逻辑不通\n\n口诀：有名用形代，无名用名代。后面没名词，名代顶上！"
    },
    {
      "id": "e-064",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 2,
      "question": "The hospital is ___ the post office and the bank.",
      "options": [
        "A. in",
        "B. on",
        "C. between",
        "D. among"
      ],
      "answer": 2,
      "explanation": "此题考查between和among的辨析！\n\nbetween = 在两者之间（between A and B）\namong = 在三者或三者以上之间\n\n题目：医院在邮局和银行之间 → 两个地点 → 用between。\n\n例句对比：\n- The cat is between the two chairs.（猫在两把椅子之间）\n- The teacher is among the students.（老师在学生中间，学生是很多人）\n\n口诀：between是两者间（and连两边），among是三者以上间。\n\n固定搭配：between...and...（在……和……之间）"
    },
    {
      "id": "e-065",
      "subject": "english",
      "topic": "english-prep",
      "difficulty": 2,
      "question": "We will have a class meeting ___ the afternoon of Friday.",
      "options": [
        "A. in",
        "B. on",
        "C. at",
        "D. for"
      ],
      "answer": 1,
      "explanation": "此题是时间介词的陷阱题！\n\n规则：\n- in the afternoon（泛指下午）→ 用in\n- on Friday afternoon（具体某天下午）→ 用on\n- on the afternoon of Friday（具体到周五的下午）→ 用on\n\n核心规律：只要涉及具体某一天（或某一天的某个时段），就用on！\n\n对比：\n- in the afternoon ✓（泛指的下午）\n- on Friday afternoon ✓（具体周五下午）\n- on the afternoon of May 1st ✓（具体五月一日的下午）\n\n口诀：泛指时段用in，具体到天就用on。记住：有of + 具体日期/星期 → 用on！"
    },
    {
      "id": "e-066",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 2,
      "question": "— ___ I borrow your ruler?\n— Of course. Here you are.",
      "options": [
        "A. Must",
        "B. Need",
        "C. May",
        "D. Do"
      ],
      "answer": 2,
      "explanation": "此题考查请求许可时的情态动词选择！\n\n情景分析：向别人借东西，请求许可 → 用May或Can。\nMay比Can更正式、更有礼貌。\n\n情态动词表请求许可：\n- May I...?（我可以……吗？最礼貌）\n- Can I...?（我能……吗？口语常用）\n- Could I...?（我能……吗？更委婉）\n\n为什么不选其他：\n- Must I...? = 我必须……吗？（表示义务，不表示请求）\n- Need I...? = 我需要……吗？（询问必要性）\n- Do I...? = 我……吗？（一般疑问句，不表示情态）\n\n口诀：借东西问许可，May/Can最常用。May更礼貌，Can更日常。"
    },
    {
      "id": "e-067",
      "subject": "english",
      "topic": "english-can",
      "difficulty": 2,
      "question": "You look tired. You ___ go to bed early tonight.",
      "options": [
        "A. can",
        "B. must",
        "C. should",
        "D. may"
      ],
      "answer": 2,
      "explanation": "此题考查情态动词should表建议的用法！\n\n语境：你看上去很累 → 建议你早点睡觉 → 用should（应该）。\n\n情态动词语气强弱：\n- must（必须）= 命令/强制，不照做不行\n- should（应该）= 建议/劝告，最好这样做\n- can（可以）= 允许/能力\n- may（可以）= 允许（更正式）\n\n这里妈妈或朋友在劝你，不是命令你 → should更合适。\n\n对比：\n- You must go to bed.（你必须睡觉——不睡不行！）\n- You should go to bed.（你应该睡觉——为你好，建议你这样做。）\n\n口诀：must是命令必须做，should是建议应该做。累了劝休息，should最贴心。"
    },
    {
      "id": "e-068",
      "subject": "english",
      "topic": "english-present-cont",
      "difficulty": 2,
      "question": "— Where is your brother?\n— He ___ a model plane in his room.",
      "options": [
        "A. makes",
        "B. make",
        "C. is making",
        "D. made"
      ],
      "answer": 2,
      "explanation": "此题考查现在进行时的语境判断！\n\n分析：问句\"Where is your brother?\"（你弟弟在哪儿？）→ 问的是「此时此刻」的位置 → 答句也应该描述正在做的事 → 现在进行时。\n\n结构：He（第三人称单数）+ is + making（make的ing形式，去e加ing）。\n\n时间推断技巧：\n当问句是：\n- Where is/are...? → 大概率答句用进行时\n- What is/are...doing? → 100%用进行时\n\n动词ing变化规则：\nmake → making（去e加ing）\nrun → running（重读闭音节双写辅音）\nplay → playing（直接加ing）\n\n口诀：问人在哪儿，答在做什么→用进行时！"
    },
    {
      "id": "e-069",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 2,
      "question": "找出划线部分发音与其他三个不同的单词。",
      "options": [
        "A. book",
        "B. food",
        "C. look",
        "D. good"
      ],
      "answer": 1,
      "explanation": "此题考查oo字母组合的两种常见发音！\n\noo组合有两种发音：\n① 短音/ʊ/：book, look, good, cook, foot（短而轻）\n② 长音/uː/：food, school, room, cool, moon（长而圆）\n\n分析：\n- book /bʊk/（短音）\n- food /fuːd/（长音）← 和其他三个不同！\n- look /lʊk/（短音）\n- good /ɡʊd/（短音）\n\n记忆技巧：大部分oo发长音/uː/，但book/look/good/cook/foot这五个词发短音/ʊ/。\n\n口诀：书本看，好厨师用脚——book, look, good, cook, foot（这五个oo发短音，其他的大多发长音）。"
    },
    {
      "id": "e-070",
      "subject": "english",
      "topic": "english-phonetic",
      "difficulty": 2,
      "question": "下列单词中，哪个单词的重音位置与其他三个不同？",
      "options": [
        "A. about",
        "B. today",
        "C. apple",
        "D. begin"
      ],
      "answer": 2,
      "explanation": "此题考查单词重音位置的判断！\n\n重音分析：\n- about /əˈbaʊt/ → 重音在第二音节\n- today /təˈdeɪ/ → 重音在第二音节\n- apple /ˈæpl/ → 重音在第一音节 ← 与其他三个不同！\n- begin /bɪˈɡɪn/ → 重音在第二音节\n\n规律总结：\n- 双音节词的重音多数在第一个音节（如apple, sister, teacher）\n- 但以a-/be-/to-等前缀开头的双音节词，重音常在第二个音节（如about, begin, today, become）\n\n重音判断技巧：\n1. 试着把重音放在不同位置读一遍\n2. 听起来最自然的就是正确重音\n3. 多听多模仿是最佳方法\n\n口诀：a/be/to开头的双音节词，重音往往往后跑！"
    }
  ]
};

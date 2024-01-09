var letterRUS_UZB = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "x",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "ʺ",
    ы: "i",
    ь: "ʹ",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "Yo",
    Ж: "J",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "X",
    Ц: "Ts",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ъ: "ʺ",
    Ы: "I",
    Ь: "ʹ",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    ғ: "g'",
    ў: "o'",
    Ў: "O'",
    қ: "q",
};
var letterUZB_RUS = {
    a: "a",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "э",
    yo: "ё",
    j: "ж",
    z: "з",
    i: "и",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "o",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    x: "х",
    ts: "ц",
    ch: "ч",
    sh: "ш",
    shch: "щ",
    ʺ: "ъ",
    i: "и",
    ʹ: "ь",
    e: "э",
    yu: "ю",
    ya: "я",
    A: "А",
    B: "Б",
    V: "В",
    G: "Г",
    D: "Д",
    E: "Э",
    Yo: "Ё",
    J: "Ж",
    Z: "З",
    I: "И",
    Y: "Й",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "К",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    F: "Ф",
    X: "Х",
    Ts: "Ц",
    Ch: "Ч",
    Sh: "Ш",
    Shch: "Щ",
    ʺ: "Ъ",
    I: "Ы",
    ʹ: "Ь",
    E: "Э",
    Yu: "Ю",
    Ya: "Я",
    "g'": "г",
    "o'": "у́",
    "O'": "У́",
    q: "к",
};
let input = document.querySelector("#input");
let output = document.querySelector("#output");
let btn = document.querySelector(".btn");
let btn1 = document.querySelector(".btn1");
let clear = document.querySelector(".clear");

clear.addEventListener("click", function() {
    input.value = "";
    output.value = "";
});

btn1.addEventListener("click", function() {
    let outputText = "";

    for (let i = 0; i < input.value.length; i++) {
        let letter = input.value[i];

        if (letterUZB_RUS[letter]) {
            outputText = outputText + letterUZB_RUS[letter];
        } else {
            outputText = outputText + letter;
        }
    }

    output.value = outputText;
});

btn.addEventListener("click", function() {
    let outputText = "";

    for (let i = 0; i < input.value.length; i++) {
        let letter = input.value[i];

        if (letterRUS_UZB[letter]) {
            outputText = outputText + letterRUS_UZB[letter];
        } else {
            outputText = outputText + letter;
        }
    }

    output.value = outputText;
});
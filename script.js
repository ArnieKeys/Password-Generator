const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let ch = characters.join("");
let lo = characters.slice(0, 52);
let ln = characters.slice(0, 62);

let buttonEl = document.getElementById("generate");
const password = document.getElementById("password1");
const passwordBtn = document.getElementById("password1Btn");
const password2 = document.getElementById("password2");
const password2Btn = document.getElementById("password2Btn");
const appContainer = document.querySelector(".container");
const theme = document.getElementById("theme");
const txtColor1 = document.getElementById("txt-color1");
const txtColor2 = document.getElementById("txt-color2");
const paraEl = document.querySelector("p");
const labelEl = document.querySelector("label");
const radioLabelEl1 = document.getElementById("lo");
const radioEl1 = document.querySelector("#letters");
const radioLabelEl2 = document.getElementById("ln");
const radioEl2 = document.querySelector("#numbersInc");
const radioLabelEl3 = document.getElementById("ch");
const radioEl3 = document.querySelector("#special");
const radioFields = document.querySelectorAll(
  'input[type=radio][name="passwordType"]'
);
const lengthField = document.getElementById("length");

let passwordLength = 15;
lengthField.addEventListener('change',function(){
passwordLength = lengthField.value;
})

radioFields.forEach((radio) =>
  radio.addEventListener("change", function () {
    if (radio.value === "letters") {
      lettersOnly();
    } else if (radio.value === "numbersInc") {
      lettersAndNumbers();
    } else if (radio.value === "special") {
      specialCharacters();
    }
  })
);

function lettersOnly() {
  buttonEl.onclick = function () {
    password.value = "";
    password2.value = "";

    for (let i = 0; i < passwordLength; i++) {
      let p = Math.floor(Math.random() * lo.length);
      let q = Math.floor(Math.random() * lo.length);
      password.value += ch[p];
      password2.value += ch[q];
    }
  };
}
function lettersAndNumbers() {
  buttonEl.onclick = function () {
    password.value = "";
    password2.value = "";

    for (let i = 0; i < passwordLength; i++) {
      let p = Math.floor(Math.random() * ln.length);
      let q = Math.floor(Math.random() * ln.length);
      password.value += ch[p];
      password2.value += ch[q];
    }
  };
}

function specialCharacters() {
  buttonEl.onclick = function () {
    password.value = "";
    password2.value = "";

    for (let i = 0; i < passwordLength; i++) {
      let p = Math.floor(Math.random() * ch.length);
      let q = Math.floor(Math.random() * ch.length);
      password.value += ch[p];
      password2.value += ch[q];
    }
  };
}

function backgroundMode(
  bgColor,
  textColor1,
  textColor2,
  paraTxt,
  labelColor,
  labelColor2
) {
  appContainer.style.backgroundColor = bgColor;
  txtColor1.style.color = textColor1;
  txtColor2.style.color = textColor2;
  paraEl.style.color = paraTxt;
  labelEl.style.color = labelColor;
  radioLabelEl1.style.color = labelColor2;
  radioLabelEl2.style.color = labelColor2;
  radioLabelEl3.style.color = labelColor2;
}
theme.addEventListener("change", () =>
  theme.value === "dark"
    ? backgroundMode("black", "white", "green", "white", "white", "white")
    : backgroundMode(
        "antiquewhite",
        "green",
        "black",
        "green",
        "black",
        "black"
      )
);

passwordBtn.onclick = function () {
  const copy1 = document.getElementById("password1").value;
  navigator.clipboard.writeText(copy1);
};
password2Btn.onclick = function () {
  const copy2 = document.getElementById("password2").value;
  navigator.clipboard.writeText(copy2);
};



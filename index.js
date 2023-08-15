const input = document.querySelector("input");
const button = document.querySelector("button");
const dictionary = document.querySelector(".dictionary");

button.addEventListener("click", addWord);

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addWord();
  }
});

function addWord() {
  const newRow = document.createElement("div");
  newRow.className = "dictionary-row";
  newRow.style.borderTop = "1px solid black";

  const newRus = document.createElement("div");
  newRus.className = "rus";
  newRus.style["border-radius"] = 0;

  const newEng = document.createElement("div");
  newEng.className = "eng";

  const newIndex = document.createElement("span");
  const indexes = document.querySelectorAll(".index");
  newIndex.innerText = indexes.length + 1;
  newIndex.className = "index";

  const rusWord = document.createElement("span");
  rusWord.className = "word";
  rusWord.innerText = input.value;

  const engWord = document.createElement("span");
  engWord.className = "word";
  engWord.innerText = translit(input.value);
  engWord.style.zIndex = "2";
  const engButton = document.createElement("img");

  engButton.className = "eng-button";
  engButton.src = "./icons/Group-1.png";
  engButton.alt = "Удалить";
  engButton.style.zIndex = "2";

  const divBackground = document.createElement("div");
  divBackground.className = "background";
  divBackground.style["border-radius"] = 0;

  newRus.append(newIndex, rusWord);
  newEng.append(engWord, engButton, divBackground);
  newRow.append(newRus, newEng);
  dictionary.append(newRow);

  engButton.addEventListener("click", () => {
    engButton.parentElement.parentElement.remove();
    const newIndexes = document.querySelectorAll(".index");
    console.log(newIndexes);
    for (let i = 0; i < newIndexes.length; i += 1) {
      newIndexes[i].innerText = i + 1;
    }
  });

  if (input.value.length > 7) {
    rusWord.innerText = `${input.value.slice(0, 7)}...`;
    engWord.innerText = `${translit(input.value).slice(0, 7)}...`;

    const fullRusText = document.createElement("div");
    fullRusText.className = "full";
    fullRusText.innerText = input.value;

    const fullEngText = document.createElement("div");
    fullEngText.className = "full";
    fullEngText.innerText = translit(input.value);

    rusWord.addEventListener("mouseenter", () => {
      fullRusText.style.display = "block";
    });
    rusWord.addEventListener("mouseleave", () => {
      fullRusText.style.display = "none";
    });

    engWord.addEventListener("mouseenter", () => {
      fullEngText.style.display = "block";
    });
    engWord.addEventListener("mouseleave", () => {
      fullEngText.style.display = "none";
    });

    newRus.append(fullRusText);
    newEng.append(fullEngText);
  }
  input.value = "";
}

const deleteAll = document.querySelector("#delete-button");
deleteAll.addEventListener("click", () => {
  document.location.reload();
});

function translit(word) {
  let transWord = "";
  const alphabetObj = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "e",
    ж: "zh",
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
    х: "h",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "sch",
    ь: "",
    ы: "y",
    ъ: "",
    э: "e",
    ю: "yu",
    я: "ya",
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "E",
    Ж: "Zh",
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
    Х: "H",
    Ц: "C",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Sch",
    Ь: "",
    Ы: "Y",
    Ъ: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
  };

  for (let i = 0; i < word.length; i += 1) {
    if (alphabetObj[word[i]] === undefined) {
      transWord += word[i];
    } else {
      transWord += alphabetObj[word[i]];
    }
  }
  return transWord;
}

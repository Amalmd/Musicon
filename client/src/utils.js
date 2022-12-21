const letters = {
  א: "ا",
  ב: "ب",
  ג: "ج",
  ד: "د",
  ה: "ه",
  ו: "و",
  ז: "ز",
  ח: "ح",
  ט: "ط",
  י: "ي",
  כ: "خ",
  ך: "خ",
  ל: "ل",
  מ: "م",
  ם: "م",
  נ: "ن",
  ן: "ن",
  ס: "س",
  ע: "ع",
  פ: "ف",
  ף: "ف",
  צ: "تس",
  ץ: "تس",
  ק: "ك",
  ר: "ر",
  ש: "ش",
  ת: "ت",
};

export const converText = (text) => {
  let convertedText = "";
  for (let i = 0; i < text.length; i++)
    for (let letter in letters) {
      if (text[i] === letter) {
        convertedText += letters[letter];
        break;
      } else if (text[i] === " ") {
        convertedText += " ";
        break;
      }
    }
  return convertedText;
};

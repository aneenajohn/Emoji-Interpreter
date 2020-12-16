import React, { useState } from "react";
import "./styles.css";

var headingText = "Find your emoji";

var emojiDictionary = {
  "😊": "smiling",
  "😀": "grinning face",
  "😂": "Face With Tears of Joy",
  "😃": "Smiling Face With Open Mouth",
  "😍": "Smiling Face With Heart-Eyes",
  "😇": "Smiling Face With Halo",
  "😉": "wink",
  "😐": "neutral face",
  "😌": "relieved face",
  "😟": "worried",
  "😳": "disbelief",
  "😒": "annoyance",
  "😔": "dissatisfaction and frustration",
  "😕": "Confused",
  "😣": "struggling",
  "😖": "extremely dismayed and bewildered",
  "😫": "tired",
  "😩": "weary face",
  "😢": "crying face",
  "😭": "loudly crying face",
  "😤": "Face With Look of Triumph",
  "🤬": "cursing",
  "😠": "Angry Face",
  "😡": "Pouting Face",
  "😷": "masked face",
  "😵": "dizzy",
  "😯": "Speechless Face",
  "😦": "Frowning Face With Open Mouth",
  "😮": "surprised",
  "😲": "Astonished Face",
  "🧐": "Face with monocle",
  "🤯": "Mind blown",
  "🤓": "Nerd face",
  "🥶": "freezing",
  "🥵": "Overheated face",
  "🤗": "hugging",
  "😈": "grinning goblin smiley with small devil horns",
  "👹": "demon",
  "👻": "ghost",
  "💀": "extremely dangerous",
  "☠": "Skull and Crossbones",
  "👽": "Alien",
  "🎃": "Pumpkin lantern",
  "🥡": "takeout box",
  "👐": "affection and openness or hug",
  "👏": "Clapping Hands",
  "👍": "Well done!",
  "👎": "rejection, disapproval and dislike",
  "✌": "Victory Hand",
  "👌": "Ok Hand Sign",
  "✋": "Raised Hand",
  "👋": "wave",
  "💪": "strong",
  "👣": "Footprints",
  "💃": "dancing",
  "❤️": "love"
};
// console.log(Object.keys(emojiDictionary));
// console.log(Object.values(emojiDictionary));
// console.log(Object.entries(emojiDictionary));

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputEventHandler(event) {
    var userInput = event.target.value;
    console.log(userInput);
    var meaning = emojiDictionary[userInput];
    console.log("emojiDictionary[userInput] :", emojiDictionary[userInput]);
    if (meaning === undefined) {
      meaning = "Not found in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
    // console.log(emoji);
  }

  return (
    <div className="App">
      <header>
        <h1>{headingText}</h1>
        <img src="https://img.icons8.com/emoji/48/000000/face-with-monocle.png" />
      </header>

      <input
        placeholder="🔎 Insert Emoji here..."
        onChange={inputEventHandler}
      />

      {/* <div style={{ padding: "1rem", fontWeight: "bolder" }}>{meaning}</div> */}

      <div id="output" placeholder="meaning appears here">
        {meaning}
      </div>
      <h2 style={{ padding: "1rem" }}>Emojis We know</h2>
      {/* <h3 className="sub-heading">Smiley</h3> */}
      <div className="grid">
        {emojiWeKnow.map((emoji) => {
          return (
            <span
              // style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}

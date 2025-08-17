/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
[首頁 | Emoji表情符號詞典 📓 | Emojiall繁體中文官方網站](https://www.emojiall.com/zh-hant)
*/
function CommonEmojis() {
  return [
    "🙋‍♂️",
    "🙏",
    "👌",
    "👋",
    "😆",
    "😊",
    "🤤",
    "🤒",
    "🤮",
    "🥳",
    "☹️",
    "😰",
    "🤬"
  ].map(emoji => 
        <button onClick={() =>  navigator.clipboard.writeText('Copy this text to clipboard')}>{emoji}</button>
  )
}

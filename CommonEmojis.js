/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
[首頁 | Emoji表情符號詞典 📓 | Emojiall繁體中文官方網站](https://www.emojiall.com/zh-hant)
*/
function CommonEmojis() {
  const [ copied, setCopied ] = React.useState("");
  
  React.useEffect(async () => {
     await navigator.clipboard.writeText(copied);
  }, [ copied ]);
  
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
        <button onClick={() => setCopied(`${emoji}`)}>{emoji}{copied == emoji && " is copied"}</button>
  )
}

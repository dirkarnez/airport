/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
[首頁 | Emoji表情符號詞典 📓 | Emojiall繁體中文官方網站](https://www.emojiall.com/zh-hant)
[Copy and Paste Symbols - Cool Text Symbols - Symbolonly.com](https://symbolonly.com/)
*/
function CommonEmojis() {
  const [ toCopy, setToCopy ] = React.useState("");
  const [ copied, setCopied ] = React.useState("");
  
  React.useEffect(() => {
      if (!!toCopy) {
        (async () => {
          await navigator.clipboard.writeText(toCopy);
          setCopied(toCopy);
        })();
      }
  }, [ toCopy ]);
  
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
    "🤬",
    "☐",
    "🗹",
    "☒",
    "⬛",
    "✓",
    "✗",
    "✔",
    "✖"
  ].map(emoji => 
        <button 
          type="button" 
          style={{ marginRight: "10px", marginBottom: "10px" }} 
          className="btn btn-primary" 
          onClick={() => {
            setToCopy(`${emoji}`)
          }}
        >
          {emoji}{copied == emoji && " is copied"}
        </button>
  )
}

/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
[首頁 | Emoji表情符號詞典 📓 | Emojiall繁體中文官方網站](https://www.emojiall.com/zh-hant)
*/
function CommonChineseWordsICannotType() {
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
    { word: "窗", howto: "十大" },
    { word: "伊", howto: "人大" },
    { word: "尹", howto: "尸大" },
    { word: "肉", howto: "人人" },
    { word: "片", howto: "中中" },
    { word: "面面相覷", howto: "卜山" },
    { word: "凹", howto: "尸山" },
    { word: "凸", howto: "月尸" },
    { word: "曱", howto: "日中" },
    { word: "甴", howto: "中日" },
    { word: "屯", howto: "心山" },
    { word: "函", howto: "弓水" },
    { word: "幽", howto: "山戈" },
    { word: "繼", howto: "女戈" },
    { word: "乒", howto: "人竹" },
    { word: "乓", howto: "人戈" },
    { word: "兵", howto: "人金" },
    { word: "韜", howto: "木難" },
    { word: "樁", howto: "木難" },
    { word: "框", howto: "木土" },
    { word: "鼠", howto: "竹女" },
    { word: "謙", howto: "卜金" },
    { word: "鼻", howto: "竹中" },
    { word: "撐", howto: "手手" },
    { word: "越", howto: "土女" },
    { word: "兆", howto: "中人" },
    { word: "趨", howto: "土山" }
  ].map(({word, howto}) => 
        <button 
          type="button" 
          style={{ marginRight: "10px", marginBottom: "10px" }} 
          className="btn btn-primary" 
          onClick={() => {
            setToCopy(`${word}`)
          }}
        >
          {word}({howto}){copied == word && " is copied"}
        </button>
  )
}

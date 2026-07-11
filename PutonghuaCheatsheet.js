/*

*/
function PutonghuaCheatsheet() {
  // const [ toCopy, setToCopy ] = React.useState("");
  // const [ copied, setCopied ] = React.useState("");
  
  // React.useEffect(() => {
  //     if (!!toCopy) {
  //       (async () => {
  //         await navigator.clipboard.writeText(toCopy);
  //         setCopied(toCopy);
  //       })();
  //     }
  // }, [ toCopy ]);
  
  return (
    <React.Fragment>
      <h5><a href="https://github.com/dirkarnez/airport/blob/main/PutonghuaCheatsheet.js" target="_blank">Putonghua Cheatsheet</a></h5>
      { /* <a href="https://www.hkcards.com" target="_blank">hkcards 倉頡字典</a> */ }
      <br/>
      <div style={{maxHeight: "200px", overflowY: "scroll"}}>
      {
        /*
        留學VS流血
        纜車 vs 爛車
        研習 ─ 演習 ─ 演戲
        rán hòu{然} 後 yán yǔ {言} 語
        fū rén {夫} 人 hū jiào {呼} 叫
        yùn dòng {運} 動 wēn dù {溫} 度
        */
        [
          { word: "完成", howto: "wán chéng" },
          { word: "全部", howto: "quán bù" },
          { word: "软件", howto: "ruǎn jiàn" }
        ].map(({word, howto}) => 
              <span 
                style={{ marginRight: "10px", marginBottom: "10px" }} 
              >
                {word} ({howto})
              </span>
        )
      }
      </div>
    </React.Fragment>
  )
}

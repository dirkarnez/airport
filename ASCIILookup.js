/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
\x02
&#02;
&amp;
[ASCII table - Table of ASCII codes, characters and symbols](https://www.ascii-code.com/)
[ASCII Table - ASCII Character Codes, HTML, Octal, Hex, Decimal](https://www.asciitable.com/)
[【前端HTML】&amp;&amp;&nbsp在html里是什么意思 - 青墟 - 博客园](https://www.cnblogs.com/guoxinyu/p/12659075.html)
*/
function ASCIILookup() {
  const divRef = React.useRef(null);
   function handleClick() {
    divRef.current.innerHTML = "Chris&apos; corner";
    console.log(divRef.current.innerText)
  }

  return (
    <div className="myDiv" >
      <div ref={divRef} />
      <h2>This is a heading in a div element</h2>
      <button onClick={handleClick}>This is some text in a div element.</button>
    </div>
  )
}

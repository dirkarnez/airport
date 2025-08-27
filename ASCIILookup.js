/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
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

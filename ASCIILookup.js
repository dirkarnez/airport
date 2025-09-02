/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
\x02
&#02;
&amp;

todos: \u00A0
[ASCII table - Table of ASCII codes, characters and symbols](https://www.ascii-code.com/)
[ASCII Table - ASCII Character Codes, HTML, Octal, Hex, Decimal](https://www.asciitable.com/)
[【前端HTML】&amp;&amp;&nbsp在html里是什么意思 - 青墟 - 博客园](https://www.cnblogs.com/guoxinyu/p/12659075.html)
*/
const TextInputComponent = () => {
  const [ inputValue, setInputValue ] = React.useState('');
  const [ transformedValue, setTransformedValue ] = React.useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  React.useEffect(() => {
    if (!inputValue) {
      return;
    }
    
    const div = document.createElement("div");
    div.innerHTML = inputValue;
    setTransformedValue(div.innerText);
  }, [ inputValue ]);

  return (
    <React.Fragment>
      <label htmlfor="ascii-input">Input example: &amp;amp;, &amp;#39;</label>
      <br/>
      <input
        name="ascii-input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Transformed: -&gt;{transformedValue}&lt;-</p>
    </React.Fragment>
  );
};

function ASCIILookup() {
  // const divRef = React.useRef(null);
  //  function handleClick() {
  //   divRef.current.innerHTML = "Chris&apos; corner";
  //   console.log(divRef.current.innerText)
  // }
  //    <div ref={divRef} />
  return (
    <TextInputComponent/>
  )
}

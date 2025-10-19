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
const HTML_ENTITIES = "HTML_ENTITIES";
const URL_ENCODED = "URL_ENCODED";
const UNKNOWN = "UNKNOWN";

const TextInputComponent = () => {
  const [ inputValue, setInputValue ] = React.useState('');
  const [ transformedValue, setTransformedValue ] = React.useState({
    type: "",
    value: ""
  });

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const detect = str => {
    if (/&[a-zA-Z0-9#]+;/.test(str)) {
      return HTML_ENTITIES;
    } else if (/%[0-9A-Fa-f]{2}/.test(str)) {
      return URL_ENCODED;
    }
    return UNKNOWN;
  };

  const transformHTMLEntities = str => {
    const div = document.createElement("div");
    div.innerHTML = `${str}`;
    return div.innerText;
  };
  
  React.useEffect(() => {
    let result = {
      type: "",
      value: ""
    };
    if (!!inputValue) {
      result = {
        ...result, 
        type: detect(inputValue)
      };
      switch(result.type) {
        case URL_ENCODED:
          result = {
            ...result, 
            value: decodeURIComponent(inputValue)
          };
          break;
        case HTML_ENTITIES:
          result = {
            ...result, 
            value: transformHTMLEntities(inputValue)
          };
          break;
        default:
          result = {
            ...result, 
            value: ""
          };
      }
    }
    setTransformedValue(result);
  }, [ inputValue ]);

  return (
    <React.Fragment>
      <label htmlfor="ascii-input">Input example: <span style={{background: "#373737", color: "white"}}>&amp;amp;</span>, <span style={{background: "#373737", color: "white"}}>&amp;#39;</span>, <span style={{background: "#373737", color: "white"}}>%2A</span></label>
      <br/>
      <input
        name="ascii-input"
        type="text"
        style={{width: "100%"}}
        value={inputValue}
        onChange={handleChange}
      />
      <p>Transformed ({transformedValue.type}): -&gt;{transformedValue.value}&lt;-</p>
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
    <div style={{border: "solid", padding: "1rem"}}>
      <h5>ASCII Lookup</h5>
      <TextInputComponent/>
    </div>
  )
}

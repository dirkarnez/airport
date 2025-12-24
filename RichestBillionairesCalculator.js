/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/
function Div({children}) {
  return (
    <div style={{ border: "1px solid black", fontSize: "1rem", textAlign: "center" }}>{ children }</div>
  )
}

const TextInputComponent = () => {
  const [ inputValue, setInputValue ] = React.useState('');
  const [ transformedValue, setTransformedValue ] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  
  React.useEffect(() => {
    setTransformedValue(!!inputValue ? inputValue.replaceAll("/", "-").replaceAll("_", "-").toLocaleLowerCase() : "");
  }, [ inputValue ]);

  return (
    <React.Fragment>
      <label htmlfor="input">Input</label>
      <br/>
      <input
        name="input"
        type="number"
        style={{width: "100%"}}
        value={inputValue}
        onChange={handleChange}
      />
      <p>Transformed: {transformedValue}</p>
    </React.Fragment>
  );
};

function RichestBillionairesCalculator() {
  // const divRef = React.useRef(null);
  //  function handleClick() {
  //   divRef.current.innerHTML = "Chris&apos; corner";
  //   console.log(divRef.current.innerText)
  // }
  //    <div ref={divRef} />
  const [ people, setPeople ] = React.useState([]);
  
  return (
    <React.Fragment>
      <h5><a href="https://github.com/dirkarnez/airport/edit/main/RichestBillionairesCalculator.js" target="_blank">Richest Billionaires Calculator</a></h5>
      <a href="https://www.forbes.com/real-time-billionaires/" target="_blank">Forbes Real Time Billionaires List</a><br/>
      <button type="button" className="btn btn-primary" onClick={() => setPeople([...people, {name: "", money: 0 }])}>Add person</button>
      <div style={{ display: "grid", gridTemplateColumns: Array.from({length: 3 + people.length}).fill("auto").join(String.fromCharCode(32)), border: "1px solid black" }}>
        <Div>Person</Div>
        <Div>USD (Billions)</Div>
        <Div>HKD (Billions)</Div>
        {people.map(person => <Div>{person}</Div>)}
        {people.map(person => <Div>{person}</Div>)}
      </div>
    </React.Fragment>
  )
}

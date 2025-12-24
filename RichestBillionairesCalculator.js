/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

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
        type="text"
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
  return (
    <React.Fragment>
      <h5>Richest Billionaires Calculator</h5>
      <a href="https://www.forbes.com/real-time-billionaires/" target="_blank">Forbes Real Time Billionaires List - The World's Richest People</a>
      <TextInputComponent/>
    </React.Fragment>
  )
}

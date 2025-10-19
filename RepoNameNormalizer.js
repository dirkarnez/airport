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
        value={inputValue}
        onChange={handleChange}
      />
      <p>Transformed: {transformedValue}</p>
    </React.Fragment>
  );
};

function RepoNameNormalizer() {
  // const divRef = React.useRef(null);
  //  function handleClick() {
  //   divRef.current.innerHTML = "Chris&apos; corner";
  //   console.log(divRef.current.innerText)
  // }
  //    <div ref={divRef} />
  return (
    <div style={{border: "solid", padding: "1rem"}}>
      <TextInputComponent/>
    </div>
  )
}

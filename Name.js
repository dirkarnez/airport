/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

function Div({children}) {
  return (
    <div style={{ border: "1px solid black", fontSize: "1rem", textAlign: "center" }}>{ children }</div>
  )
}

function Name() {
  return (
    <React.Fragment>
      <h5><a href="https://github.com/dirkarnez/airport/blob/main/Name.js" target="_blank">Name</a></h5>
      <br/>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto", border: "1px solid black" }}>
        <Div>姓</Div>
        <Div>名</Div>
        <Div>Last name</Div>  
        <Div>First name</Div>
        <Div>Surname</Div>
        <Div>Given name</Div>  
        <Div>Family name</Div>
        <Div></Div>
      </div>
    </React.Fragment>
  )
}

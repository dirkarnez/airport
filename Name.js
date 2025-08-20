/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

function Div({children}) {
  return (
    <div style={{ border: "1px solid black", padding: "20px", fontSize: "30px", textAlign: "center" }}>{children}</div>
  )
}

function Name() {
  return (
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
  )
}

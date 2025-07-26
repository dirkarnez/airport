/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/
function OnlineDocViewer() {
	const [ url, setUrl ] = React.useState("https://www.mtr.com.hk/digitalleaflet/data/upload/ch/article/pdf/WEK-leaflet-Digital-202506_1750939c6496.pdf");

  	const handleChange = (event) => {
		setUrl(event.target.value);
	};
  
        return (
		<React.Fragment>
			<input type="text" value={url} onChange={handleChange} style={{width: "100%"}}/>
			<br/>
			<iframe src={`https://docs.google.com/gview?embedded=true&url=${url}`} style={{width: "100%", height: "1000px"}} frameborder="0"></iframe>
		</React.Fragment>
        )
}

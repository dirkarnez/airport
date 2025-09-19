/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/

/*
[Embedded File Viewer: Google Drive, OneDrive](https://gist.github.com/tzmartin/1cf85dc3d975f94cfddc04bc0dd399be)
[Embeddable Google Document Viewer](https://googlesystem.blogspot.com/2009/09/embeddable-google-document-viewer.html)
[快速在網頁上預覽 Office 檔案](https://blog.poychang.net/office-word-excel-powerpoint-online-viewer/)
https://view.officeapps.live.com/op/view.aspx?src=https://github.com/poychang/blog.poychang.net/raw/master/assets/post-files/THIS-IS-WORD.docx
https://docs.google.com/viewer?url=https://github.com/poychang/blog.poychang.net/raw/master/assets/post-files/THIS-IS-WORD.docx
*/
function OnlineDocViewer() {
	const [ url, setURL ] = React.useState("https://www.mtr.com.hk/digitalleaflet/data/upload/ch/article/pdf/WEK-leaflet-Digital-202506_1750939c6496.pdf");

  	const handleChange = (event) => {
		setURL(event.target.value);
	};
  
    return (
		<React.Fragment>
			<input type="text" value={url} onChange={handleChange} style={{width: "100%"}}/>
			<br/>
			<button onClick={() => setURL(`https://www.polyu.edu.hk/cfso/docdrive/Operation_mode_and_opening_hours_of_campus_catering_outlets.pdf`)}>PolyU canteens</button>
			<br/>
			<iframe src={`https://docs.google.com/gview?embedded=true&url=${url}`} style={{width: "100%", height: "1000px"}} frameborder="0"></iframe>
		</React.Fragment>
    )
}

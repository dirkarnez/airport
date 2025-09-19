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
	const [ url, setURL ] = React.useState(``);

  	const handleChange = (event) => {
		setURL(event.target.value);
	};
	
    return (
		<React.Fragment>
			<input type="text" value={url} onChange={handleChange} style={{width: "100%"}}/>
			<br/>
			<button type="button" onClick={() => setURL(`https://www.polyu.edu.hk/cfso/docdrive/Operation_mode_and_opening_hours_of_campus_catering_outlets.pdf`)}>PolyU canteens</button>
			<button type="button" onClick={() => setURL(`https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/WEK-leaflet-Digital-202506_175099b64I96.pdf`)}>High Speed Rail Leaflet</button>
			<button type="button" onClick={() => setURL(`https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/DIH_17459803p3n8.pdf`)}>Diamond Hill Leaflet</button>
			<button type="button" onClick={() => setURL(`https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/Digital_Station_information_leaflet_WTS_Mar_2024_171108O95980.pdf`)}>Wong Tai Sin Leaflet</button>
			<button type="button" onClick={() => setURL(`https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/HUH_Digital_Leaflet_032025_174n29584r99.pdf`)}>Hung Hom Leaflet</button>
			<br/>
			{ !!url && <iframe src={`https://docs.google.com/gview?embedded=true&url=${url}`} style={{width: "100%", height: "1000px"}} frameborder="0"></iframe> }
		</React.Fragment>
    )
}

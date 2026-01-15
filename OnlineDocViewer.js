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
 /* className="d-flex justify-content-around"*/

/* { url: "", name: "", type: "" }, */
const typedPDFs = Object.groupBy([
	{ url: "https://developer.adobe.com/document-services/docs/assets/5b15559b96303194340b99820d3a70fa/PDF_ISO_32000-2.pdf", name: "PDF Specification", type: "Specification" }, 
	{ url: "https://www.mathworks.com/help/pdf_doc/matlab/matfile_format.pdf", name: "MAT-File Format Specification", type: "Specification" },
	{ url: "http://l.web.umkc.edu/lizhu/teaching/2016sp.video-communication/ref/mp4.pdf", name: "MP4 Specification", type: "Specification" },
	{ url: "https://www.stroustrup.com/macis09.pdf", name: "Internal Program Representation for C++", type: "Paper", github: "https://github.com/GabrielDosReis/ipr" },
	{ url: "https://heap.ovh/files/mPCIe-electromechanical.pdf", name: "mPCIe Electromechanical Specification", type: "Specification" },
	{ url: "https://www.usb.org/sites/default/files/USB%20Type-C%20Spec%20R2.0%20-%20August%202019.pdf", name: "USB Type-C Cable and Connector Specification", type: "Specification" },
	{ url: "https://arxiv.org/pdf/1507.08439", name: "LightFM paper", type: "Paper" },
	{ url: "https://arxiv.org/pdf/1706.03762", name: "Attention Is All You Need", type: "Paper" },
	{ url: "https://www.ti.com/lit/ds/symlink/lm386.pdf", name: "LM386", type: "Datasheet" },
	{ url: "https://www.ti.com/lit/ds/symlink/lm741.pdf", name: "LM741", type: "Datasheet" },
	{ url: "https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf", name: "P2N2222A", type: "Datasheet" },
	{ url: "https://www.onsemi.com/download/data-sheet/pdf/2n3903-d.pdf", name: "2N3903, 2N3904", type: "Datasheet" },
	{ url: "https://www.polyu.edu.hk/cfso/docdrive/Operation_mode_and_opening_hours_of_campus_catering_outlets.pdf", name: "PolyU canteens", type: "Timetable" },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/WEK-leaflet-Digital-202506_175099b64I96.pdf", name: "High Speed Rail Leaflet", type: "Map" },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/DIH_17459803p3n8.pdf", name: "Diamond Hill Leaflet", type: "Map" },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/Digital_Station_information_leaflet_WTS_Mar_2024_171108O95980.pdf", name: "Wong Tai Sin Leaflet", type: "Map" },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/HUH_Digital_Leaflet_032025_174n29584r99.pdf", name: "Hung Hom Leaflet", type: "Map" },
	{ url: "https://ngspice.sourceforge.io/docs/ngspice-manual.pdf", name: "Ngspice Manual", type: "Manual" }
], ({ type }) =>
  type
);


function OnlineDocViewer() {
	const [ url, setURL ] = React.useState(``);
	
	const [ expanded, setExpanded ] = React.useState(``);
	
  	const handleChange = (event) => {
		setURL(event.target.value);
	};
	
    return (
		<React.Fragment>
			<h5><a href="https://github.com/dirkarnez/airport/blob/main/OnlineDocViewer.js" target="_blank">Online Doc Viewer</a></h5>
			<input type="text" value={url} onChange={handleChange} style={{width: "100%"}} name="pdf"/>
			<br/>
			<a href={url} className="btn btn-primary" target="_blank">Open directly</a>
			<br/>
			<div>
				{
					Object.keys(typedPDFs)
					.map((type) => {
						const pdfList = typedPDFs[type];
						return (
							<details key={type} open={type == expanded}>
								<summary onClick={(e) => {e.preventDefault(); setExpanded(type == expanded ? "" : type);}}>{type}</summary>
								{
									pdfList.map(pdf => (
										<button type="button" className="btn btn-primary" onClick={() => setURL(pdf.url)}>{pdf.name}</button>
									))
								}
							</details>
						);
					})
				}
			</div>
			<br/>
			{ 
				!!url && 
				<iframe src={`https://docs.google.com/gview?embedded=true&url=${url}`} style={{width: "100%", height: "1000px"}} frameborder="0"></iframe> 
			}
		</React.Fragment>
    )
}

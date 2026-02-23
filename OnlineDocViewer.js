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

const DocTypes = {
	Paper: 'Paper',
	KiCad: 'KiCad',
	Calendar: 'Calendar',
	Specification: 'Specification',
	Datasheet: 'Datasheet',
	Timetable: 'Timetable',
	Map: 'Map',
	Manual: 'Manual',
	Schematics: 'Schematics'
};
/* 
	{ url: "", name: "", type: `${DocTypes.}` },
*/

// https://www.connectedpapers.com/
const typedPDFs = Object.groupBy([ 
	{ url: "https://ww1.microchip.com/downloads/en/DeviceDoc/doc7799.pdf", name: "atemga16u2", type: `${DocTypes.Datasheet}` },
	{ url: "https://arxiv.org/pdf/2208.07339", name: "LLM.int8(): 8-bit Matrix Multiplication for Transformers at Scale", type: `${DocTypes.Paper}` },
	{ url: "https://arxiv.org/pdf/2506.04544", name: "hdl2v: A Code Translation Dataset for Enhanced LLM Verilog Generation", type: `${DocTypes.Paper}` },
	{ url: "https://is.hkjc.com/ocb/ocbbizhour_ch.pdf", name: "場外投注處服務時間", type: `${DocTypes.Timetable}` },
	{ url: "https://arxiv.org/pdf/2304.10592", name: "MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models", homepage: "https://minigpt-4.github.io", type: `${DocTypes.Paper}` },
	{ url: "https://aclanthology.org/2024.emnlp-main.681.pdf", name: "Where Am I From? Identifying Origin of LLM-generated Content", type: `${DocTypes.Paper}` },
	{ url: "https://datasheets.raspberrypi.com/pcie/pcie-connector-standard.pdf", name: "Raspberry Pi Connector for PCIe", type: `${DocTypes.Specification}` },
	{ url: "https://datasheets.raspberrypi.com/m2-hat-plus/raspberry-pi-m2-hat-plus-schematics.pdf", name: "Raspberry Pi M.2 M-Key HAT+", type: `${DocTypes.Schematics}` },
	{ url: "https://arxiv.org/pdf/1709.01782", name: "Automatic Document Image Binarization using Bayesian Optimization", type: `${DocTypes.Paper}` },
	{ url: "https://docs.kicad.org/9.0/en/introduction/introduction.pdf", name: "Introduction", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/getting_started_in_kicad/getting_started_in_kicad.pdf", name: "Getting Started in KiCad", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/kicad/kicad.pdf", name: "KiCad", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/eeschema/eeschema.pdf", name: "Schematic Editor", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/pcbnew/pcbnew.pdf", name: "PCB Editor", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/gerbview/gerbview.pdf", name: "Gerber Viewer", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/pl_editor/pl_editor.pdf", name: "Drawing Sheet Editor", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/pcb_calculator/pcb_calculator.pdf", name: "Calculator Tools", type: `${DocTypes.KiCad}` },
	{ url: "https://docs.kicad.org/9.0/en/cli/cli.pdf", name: "KiCad Command-Line Interface", type: `${DocTypes.KiCad}` },
	{ url: "https://arxiv.org/pdf/2307.09288", name: "Llama 2: Open Foundation and Fine-Tuned Chat Models", type: `${DocTypes.Paper}` },
	{ url: "https://www.polyu.edu.hk/ar/docdrive/polyu-students/AC.pdf", name: "Academic Calendar", type: `${DocTypes.Calendar}` },
	{ url: "https://developer.adobe.com/document-services/docs/assets/5b15559b96303194340b99820d3a70fa/PDF_ISO_32000-2.pdf", name: "PDF Specification", type: `${DocTypes.Specification}` }, 
	{ url: "https://www.mathworks.com/help/pdf_doc/matlab/matfile_format.pdf", name: "MAT-File Format Specification", type: `${DocTypes.Specification}` },
	{ url: "http://l.web.umkc.edu/lizhu/teaching/2016sp.video-communication/ref/mp4.pdf", name: "MP4 Specification", type: `${DocTypes.Specification}` },
	{ url: "https://www.stroustrup.com/macis09.pdf", name: "Internal Program Representation for C++", type: `${DocTypes.Paper}`, github: "https://github.com/GabrielDosReis/ipr" },
	{ url: "https://heap.ovh/files/mPCIe-electromechanical.pdf", name: "mPCIe Electromechanical Specification", type: `${DocTypes.Specification}` },
	{ url: "https://www.usb.org/sites/default/files/USB%20Type-C%20Spec%20R2.0%20-%20August%202019.pdf", name: "USB Type-C Cable and Connector Specification", type: `${DocTypes.Specification}` },
	{ url: "https://arxiv.org/pdf/1507.08439", name: "LightFM paper", type: `${DocTypes.Paper}` },
	{ url: "https://arxiv.org/pdf/2305.07759", name: "TinyStories: How Small Can Language Models Be and Still Speak Coherent English?", type: `${DocTypes.Paper}` },
	{ url: "https://arxiv.org/pdf/1706.03762", name: "Attention Is All You Need", type: `${DocTypes.Paper}` },
	{ url: "https://www.ti.com/lit/ds/symlink/lm386.pdf", name: "LM386", type: `${DocTypes.Datasheet}` },
	{ url: "https://www.ti.com/lit/ds/symlink/lm741.pdf", name: "LM741", type: `${DocTypes.Datasheet}` },
	{ url: "https://www.onsemi.com/pdf/datasheet/p2n2222a-d.pdf", name: "P2N2222A", type: `${DocTypes.Datasheet}` },
	{ url: "https://www.onsemi.com/download/data-sheet/pdf/2n3903-d.pdf", name: "2N3903, 2N3904", type: `${DocTypes.Datasheet}` },
	{ url: "https://www.polyu.edu.hk/cfso/docdrive/Operation_mode_and_opening_hours_of_campus_catering_outlets.pdf", name: "PolyU canteens", type: `${DocTypes.Timetable}` },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/WEK-leaflet-Digital-202506_175099b64I96.pdf", name: "High Speed Rail Leaflet", type: `${DocTypes.Map}` },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/DIH_17459803p3n8.pdf", name: "Diamond Hill Leaflet", type: `${DocTypes.Map}` },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/Digital_Station_information_leaflet_WTS_Mar_2024_171108O95980.pdf", name: "Wong Tai Sin Leaflet", type: `${DocTypes.Map}` },
	{ url: "https://www.mtr.com.hk/digitalleaflet/data/upload/en/article/pdf/HUH_Digital_Leaflet_032025_174n29584r99.pdf", name: "Hung Hom Leaflet", type: `${DocTypes.Map}` },
	{ url: "https://ngspice.sourceforge.io/docs/ngspice-manual.pdf", name: "Ngspice Manual", type: `${DocTypes.Manual}` }
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

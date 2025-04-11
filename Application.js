/* 
"module.exports" / "export default" is not needed.
browser version of babel do all the work for us.
*/
function Application({entryPoints}) {
      
      const [currentApp, setCurrentApp] = React.useState("");
      
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
                  <h3>Common</h3>
                  <a href="https://www.goethe.de/prj/dfd/en/index.cfm">Learn German</a><br/>
                  <a href="https://outlook.office365.com/owa/calendar/IEMakerLabSelfserviceBooking3DPrinterSmall@polyuit.onmicrosoft.com/bookings/">3D printing</a><br/>  
                  <a href="https://webcammictest.com/">Webcam test - Check camera online</a><br />
                  <a href="https://mic-test.com/">Mic Test | Mic Test</a><br />                    
                  <a href="https://booking3.lib.polyu.edu.hk/login">iBooking</a><br />
                  <a href="https://ftp.ee.polyu.edu.hk/Student/Login">EEE Student Intranet</a><br />
                  <a href="https://appserver.eie.polyu.edu.hk/student-intranet/">EIE Student Intranet</a><br />
                  <a href="https://www.polyu.edu.hk/campus-map/">Hong Kong Polytechnic University Campus Map</a><br />
                  <a href="https://ilearningx.huawei.com/portal/micro/course-v1:HuaweiX+EBG2020NCHW1100015+microcourse/about?blockID=85fed4a9ea3344f99f1e5e7d3fabca83">Huawei ICT Competition 2021-2022—Cloud Track (19081126d, 35234772)</a><br />
                  <a href="https://vdesk.polyu.edu.hk/RDWeb/Pages/en-US/login.aspx">vdesk</a><br />
                  <a href="https://puuds.polyu.edu.hk/uds/page/services">uds</a><br />
                  <a href="https://www.polyu.edu.hk/its/orientation/NewStudent/vscc.php">vscc</a><br />
                  <a href="https://ptps-fo.polyu.edu.hk/ptpsauth">Part-time Payment System</a><br />
                  <a href="https://pvrp-sao.polyu.edu.hk/student/login">Job Seeker Login | PolyU VRP</a><br />
                  <a href="https://www.polyu.edu.hk/cfso/docdrive/_sso/services/both/lostandfound.html">Lost property</a><br />
                  <a href="https://www.aha-music.com/identify-songs-music-recognition-online">Identify Songs Online - Music Recognition Online</a><br />
                  <a href="https://www.hangseng.com/zh-hk/security">eBanking</a><br />
                  <hr/>
                  <div>
                        <a href="https://www.bmf.edu.hk/">佛教茂峰法師紀念中學</a><br />
                        <a href="https://maps.app.goo.gl/yPqhY2ZaQwGQfDth9">map</a><br />
                        <a href="https://bit.ly/43k3scg6">materials</a>
                  </div>
            <br/>
                        <div>
                        <a href="http://tkps.edu.hk/">朗屏邨東莞學校 (WIFI: BestTKPS2122*)</a><br />
                        <a href="https://maps.app.goo.gl/tRi9Z7hQY4cxKyq9A">map</a><br />
                        <a href="https://bit.ly/3tx4gkw">materials</a>
                  </div>
            
            </div>
            <div className="col-sm-8">
                  <h3>Courses</h3>
              <a href="https://github.com/dirkarnez/EIE3105">EIE3105 Integrated Project</a><a
                      href="https://learn.polyu.edu.hk/ultra/courses/_93112_1/cl/outline"><img className="bb"
                        src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
             <a href="https://github.com/dirkarnez/EIE3100">EIE3100 Analogue Circuit Fundamentals</a><a
                            href="https://learn.polyu.edu.hk/ultra/courses/_93109_1/cl/outline"><img className="bb"
                              src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <a href="https://github.com/dirkarnez/EIE4433">EIE4433 Honours Project</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_93133_1/cl/outline"><img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a>
              <ul>
                <li><a href="https://www.turnitin.com/login_page.asp">turnitin, school ac and pw, "42470 202122S1 Start"</a>
                </li>
              </ul>
              <a href="https://github.com/dirkarnez/EIE3333">EIE3333 Data And Computer Communications </a><a
                      href="https://learn.polyu.edu.hk/ultra/courses//cl/outline"><img className="bb"
                        src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <a href="https://github.com/dirkarnez/EIE3312">EIE3312 Linear Systems</a><a
                      href="https://learn.polyu.edu.hk/ultra/courses//cl/outline"><img className="bb"
                        src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
            <hr />
             <a href="https://github.com/dirkarnez/AMA2104">AMA2104 Probability and Engineering Statistics</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_96485_1/cl/outline">
                <img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a>
              <ul>
                <li><a href="https://dirkarnez.github.io/math-cheatsheet/">math-cheatsheet</a></li>
                <li><a href="https://github.com/dirkarnez/AMA2104-playground">AMA2104-playground</a></li>
              </ul>
              <a href="https://github.com/dirkarnez/EIE3331">EIE3331 Communication Fundamentals</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_96553_1/cl/outline">
                <img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a>
              <ul>
                <li><a href="https://dirkarnez.github.io/telecommunication-cheatsheet/">telecommunication-cheatsheet</a></li>
              </ul>
             <a href="https://github.com/dirkarnez/EIE4413">EIE4413 Digital Signal Processing</a><a
                href="https://learn.polyu.edu.hk/ultra/courses//cl/outline">
                <img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a>
            <hr />
              <a href="https://github.com/dirkarnez/EIE3100">EIE2102 Basic Electronics</a>
              <a href="https://teams.microsoft.com/_?culture=zh-hk&country=HK&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school/files/General?threadId=19:KGkcYY8WSyx5wI-WwHwIYg6is1-9OvPWshAcIrUDIy01@thread.tacv2&ctx=channel&rootfolder=%252Fsites%252FEIE2102_20212_A%252FShared%2520Documents%252FGeneral%252FRecordings%252FView%2520Only">
                <img className="bb" src="https://statics.teams.cdn.office.net/hashed/favicon/prod/favicon-9e2b8f1.ico"></img></a><br />
              <a href="https://github.com/dirkarnez/EIE3112">EIE3112 Database System</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_96549_1/cl/outline">
                <img
                  className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico">
                </img>
              </a>
              <ul>
                <li><a href="https://github.com/dirkarnez/mariadb-playground">mariadb-playground</a></li>
              </ul>
              <a href="https://github.com/dirkarnez/CLC3241P">CLC3241P Professional Communication in Chinese</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_98891_1/cl/outline">
                <img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <a href="https://github.com/dirkarnez/IC382">IC382 Multidisciplinary Manufacturing Project</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_93077_1/cl/outline">
                <img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a>
              <ul>
                <li><a
                  href="https://connectpolyu-my.sharepoint.com/personal/19080007d_connect_polyu_hk/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F19080007d%5Fconnect%5Fpolyu%5Fhk%2FDocuments%2FIC382%5FA05&ct=1630346214532&or=OWA%2DNT&cid=e6244f05%2Df02b%2D03ab%2De756%2Ddb3912fa8d27&originalPath=aHR0cHM6Ly9jb25uZWN0cG9seXUtbXkuc2hhcmVwb2ludC5jb20vOmY6L2cvcGVyc29uYWwvMTkwODAwMDdkX2Nvbm5lY3RfcG9seXVfaGsvRW1hQndoWWgyanRFZ25sd0NyRmYtbFVCTml4TGNFcHR4S2tQTDdkTTlEMTVaQT9ydGltZT1KWDZyamQ5cjJVZw">SharePoint</a>
                </li>
              </ul>
              <a href="https://github.com/dirkarnez/TM1114">IC2114_TM1114 Engineering Drawing for EIE</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_98099_1/cl/outline"><img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <a href="https://github.com/dirkarnez/TM1115">IC2114_TM1115 Introduction of Embedded System</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_98109_1/cl/outline"><img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <hr />
              <a href="https://github.com/dirkarnez/AF3625">AF3625 Engineering Economics</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_94224_1/cl/outline"><img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <ul>
                <li><a href="https://dirkarnez.github.io/economics-cheatsheet/">dirkarnez.github.io/economics-cheatsheet</a>
                </li>
              </ul>
              <a href="https://github.com/dirkarnez/ENG3004">ENG3004 Society and the Engineer</a><a
                href="https://learn.polyu.edu.hk/ultra/courses/_93687_1/cl/outline"><img className="bb"
                  src="https://learn-ap-southeast-1-prod-fleet02-xythos.content.blackboardcdn.com/favicon.ico"></img></a><br />
              <ul>
                <li><a href="https://drive.google.com/drive/folders/1St1UaDbiRAP_-NZcxLb6rp6Wuaxfxwhq">Folder - Google Drive</a></li>
              </ul>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col">
              <div className="zxing-header">
                <h1><img alt="" id="icon" src="https://zxing.org/w/zxing-icon.png"></img>ZXing Decoder Online</h1>
              </div>
              <form className="form-inline" encType="multipart/form-data" method="post" action="https://zxing.org/w/decode">
                <div className="form-group">
                  <input className="form-control" id="f" name="f" type="file" capture="user"/>
                </div>
                <input type="submit" className="btn btn-primary" />
              </form>

            </div>
          </div>
          <br />

          <div className="row">
            <div className="col" id="whatsapp">
              <img src="https://static.xx.fbcdn.net/rsrc.php/yz/r/lOol7j-zq4u.svg"></img>&nbsp;&nbsp;Chat on WhatsApp
              <br />
              <br />
              <form
                onSubmit={() => {
                  window.open(`https://api.whatsapp.com/send?phone=852${document.getElementById('tel-input').value}`, '_blank');
                  return false;
                }}
                action="" method="post">
                <div className="form-group">
                  <input className="form-control" id="tel-input" type="text" />
                </div>
                <input className="btn btn-primary" id="whatsapp-button" type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <a href="https://dirkarnez.github.io/cpk-automated/">cpk-automated</a><br />
              <a href="https://dirkarnez.github.io/music-notation-cheatsheet/">Music Notation Cheatsheet</a><br />
              <a href="https://dirkarnez.github.io/responsive-viewport">Responsive Viewport</a><br />
              <a href="https://dirkarnez.github.io/filetype-detecter">filetype-detecter</a><br />
              <a href="https://dirkarnez.github.io/webcam-playground">webcam-playground</a><br />
              <a href="https://dirkarnez.github.io/git-script-generator">git-script-generator</a><br />
              <a href="https://dirkarnez.github.io/gl-matrix-playground">gl-matrix-playground</a><br />
              <a href="https://dirkarnez.github.io/json-repl">json-repl</a><br />
              <a href="https://dirkarnez.github.io/githubjs-wrapper">githubjs-wrapper</a><br />
              <a href="https://dirkarnez.github.io/github-forms">github-forms</a><br />
              <a href="https://dirkarnez.github.io/spotify-playlist-exporter">spotify-playlist-exporter</a><br />
              <a href="https://dirkarnez.github.io/primrose-playground">primrose-playground</a><br />
              <a href="https://dirkarnez.github.io/web-compiler">Web Compiler</a>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <label htmlFor="github-auth">GitHub Auth:</label>
              <input type="text" id="github-auth" defaultValue={Cookies.get(window.key) || ""}
                onChange={() => {
                  Cookies.set(window.key, event.target.value);
                }} />
            </div>
          </div>
          <br />
             {entryPoints.map(entryPoint => (
              <div>
                        <input type="radio" 
                              id={entryPoint}
                              name="private_app"
                              value={entryPoint}
                              onChange={e => { setCurrentApp(event.target.value) }}
                              checked={currentApp === entryPoint}/>
                        <label for={entryPoint} style={{paddingLeft: "10px"}}>{entryPoint}</label>
                </div>
              ))}
            <br />
            {entryPoints.map(entryPoint => {
                  const App = window[entryPoint];
                  return App && currentApp === entryPoint && <div style={{maxHeight: "500px", overflowY: "auto" }}><App /></div>
            })}
          <br />
          <br />
          <div className="row">
            <iframe
              src="https://calendar.google.com/calendar/embed?height=1000&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FShanghai&showNav=0&showTitle=0&showCalendars=1&showPrint=0&showDate=1&mode=WEEK&src=c21hbGxkaXJrYWxleEBnbWFpbC5jb20&src=ZW4uaG9uZ19rb25nI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA&color=%237986CB"
              style={{ borderWidth: 0 }} frameBorder={0} scrolling={"no"}></iframe>
          </div>
        </div>
      )
    }

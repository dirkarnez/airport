    window.decrypted = CryptoJS.AES.decrypt("U2FsdGVkX19GXXB439Li0ik+eJvU6pP3vUJ9cQXOfAm7GTAl8SiujlHUIPwFwyFOKaRept6Ekze2o7BCTgzVUA==", (Cookies.get(window.key) || "")).toString(CryptoJS.enc.Utf8);
    window.myOctokit = new octokitCore.Octokit({ auth: window.decrypted });

function Authenticator() {
  return (
    <React.Fragment>
      <h5>
        <a href="https://github.com/dirkarnez/airport/blob/main/Netvigator.js" target="_blank">Netvigator</a>
      </h5>
      <span>68-110012-0861-59 (Bill type 62)</span>
      <br/>
      <img src={dataURI} alt="" style={{ width: "100%" }}/>
    </React.Fragment>
  )
}

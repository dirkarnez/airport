function Authenticator() {
    // React.useEffect(() => {
    //     return () => {
    //     // Optional cleanup function goes here
    //     };
    // }, []);
    
    return (
        <React.Fragment>
            <h5>
                <a href="https://github.com/dirkarnez/airport/blob/main/Authenticator.js" target="_blank">Authenticator</a>
            </h5>
            <a href="https://github.com/dirkarnez/my-authenticator" target="_blank">dirkarnez/my-authenticator</a>
            <span>{CryptoJS.AES.decrypt("U2FsdGVkX19awg7dFkjJiwsC+VCVSe+yeG/MVphxqeCm5MLAwPqmPO1cszORCOK8", (Cookies.get(window.key) || "")).toString(CryptoJS.enc.Utf8) }</span>
            <br/>
        </React.Fragment>
    )
}

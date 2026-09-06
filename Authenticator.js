function Authenticator() {
    // React.useEffect(() => {
    //     return () => {
    //     // Optional cleanup function goes here
    //     };
    // }, []);
    
    return (
        <React.Fragment>
            <h5>
                <a href="https://github.com/dirkarnez/airport/blob/main/Netvigator.js" target="_blank">Authenticator</a>
            </h5>
            <span>{CryptoJS.AES.decrypt("2FsdGVkX1+aMbg2yzwr7e7ykGFZ/u/X0ScfZHgadisCCeKOolPj6ZeQvplzAbIN", (Cookies.get(window.key) || "")).toString(CryptoJS.enc.Utf8) }</span>
            <br/>
        </React.Fragment>
    )
}

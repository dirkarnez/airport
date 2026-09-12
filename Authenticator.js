function Countdown() {
  const [ seconds, setSeconds ] = React.useState(30);

  React.useEffect(() => {
    // 1. Start the interval
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds <= 1) {
          clearInterval(timerId); // Stop timer at 0
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // 2. Return the cleanup function to clear interval on unmount
    return () => clearInterval(timerId);
  }, []); // Empty array ensures this runs only once on mount

  return <div>Time remaining: {seconds}s</div>;
}

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
            <br/>
            <span>{CryptoJS.AES.decrypt("U2FsdGVkX19awg7dFkjJiwsC+VCVSe+yeG/MVphxqeCm5MLAwPqmPO1cszORCOK8", (Cookies.get(window.key) || "")).toString(CryptoJS.enc.Utf8) }</span>
            <br/>
            <Countdown/>
        </React.Fragment>
    )
}


// 1. Decode Base32 string to Uint8Array (required for Web Crypto API)
function base32ToBytes(base32) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
    let bits = '';
    let bytes = [];
    
    const cleanBase32 = base32.replace(/=+$/, '').replace(/\s/g, '').toUpperCase();
    for (let i = 0; i < cleanBase32.length; i++) {
        const val = alphabet.indexOf(cleanBase32.charAt(i));
        if (val === -1) throw new Error('Invalid Base32 character');
        bits += val.toString(2).padStart(5, '0');
    }
    
    for (let i = 0; i + 8 <= bits.length; i += 8) {
        bytes.push(parseInt(bits.substring(i, i + 8), 2));
    }
    return new Uint8Array(bytes);
}

// 2. Core TOTP Generation Logic using Browser Web Crypto API
async function generateTOTP(secretBase32) {
    try {
        const keyBytes = base32ToBytes(secretBase32);
        
        // Calculate the current 30-second time step
        const epoch = Math.floor(Date.now() / 1000);
        const timeStep = Math.floor(epoch / 30);
        
        // Put time step into an 8-byte ArrayBuffer
        const buffer = new ArrayBuffer(8);
        const view = new DataView(buffer);
        view.setUint32(4, timeStep, false); // Write to the lower 4 bytes (Big Endian)

        // Import the raw secret key into Web Crypto
        const cryptoKey = await window.crypto.subtle.importKey(
            "raw", 
            keyBytes, 
            { name: "HMAC", hash: { name: "SHA-1" } }, 
            false, 
            ["sign"]
        );

        // Sign the time step with HMAC-SHA1
        const hmacResult = await window.crypto.subtle.sign("HMAC", cryptoKey, buffer);
        const hmacBytes = new Uint8Array(hmacResult);

        // Dynamic Truncation
        const offset = hmacBytes[hmacBytes.length - 1] & 0xf;
        const code = (
            ((hmacBytes[offset] & 0x7f) << 24) |
            ((hmacBytes[offset + 1] & 0xff) << 16) |
            ((hmacBytes[offset + 2] & 0xff) << 8) |
            (hmacBytes[offset + 3] & 0xff)
        ) % 1000000;

        return code.toString().padStart(6, '0');
    } catch (e) {
        return "ERROR";
    }
}

function Countdown({secret}) {
  const [ secondsLeft, setSecondsLeft ] = React.useState(30);
  const [ code, setCode ] = React.useState("");
  
  React.useEffect(() => {
    let timerId = NaN;
    
    const pollData = async () => {
      try {
        const code = await generateTOTP(secret);
        setCode(code);
        
        const secondsLeft = 30 - (Math.floor(Date.now() / 1000) % 30);
        setSecondsLeft(secondsLeft);
        // document.getElementById('progressBar').style.width = (secondsLeft / 30 * 100) + '%';\
      } catch (error) {
        console.error("抓取失敗", error);
      } finally {
        // 🔥 重點：等上面的非同步全部做完了，才設定下一次的倒數！
        timerId = setTimeout(pollData, 1000);
      }
    }; 
    
    // 第一次立即執行
    pollData();

    // 離開網頁（元件卸載）時，務必清除計時器，避免記憶體流失
    return () => clearTimeout(timerId);
  }, []); // Empty array ensures this runs only once on mount

  return <div><p>Time remaining: {secondsLeft}s</p><p>{code}</p></div>;
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
            <Countdown secret={CryptoJS.AES.decrypt("U2FsdGVkX19awg7dFkjJiwsC+VCVSe+yeG/MVphxqeCm5MLAwPqmPO1cszORCOK8", (Cookies.get(window.key) || "")).toString(CryptoJS.enc.Utf8) }/>
        </React.Fragment>
    )
}


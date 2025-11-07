/*
https://jimmywarting.github.io/StreamSaver.js/examples/plain-text.html
/*saveAs(new Blob([buffer], {type: "example/binary"}), "data.dat");*/
*/
function DummyFileGenerator() {
  return (
    <code>dd if=/dev/urandom of=my-1gb-file bs=1M count=1000</code>
  );
}

/*
var
      buffer = new ArrayBuffer(8) // allocates 8 bytes
    , data = new DataView(buffer)
;
// You can write uint8/16/32s and float32/64s to dataviews
data.setUint8 (0, 0x01);
data.setUint16(1, 0x2345);
data.setUint32(3, 0x6789ABCD);
data.setUint8 (7, 0xEF);
 
saveAs(new Blob([buffer], {type: "example/binary"}), "data.dat");
*/

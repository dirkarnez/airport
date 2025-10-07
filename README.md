[airport](https://dirkarnez.github.io/airport/)
===============================================
### TODOs
- [x] https://github.com/dirkarnez/minimal-react-development
- [x] Solution for workaround (`setTimeout`) for hidden async babel transformation
  - [babel/packages/babel-standalone at main · babel/babel](https://github.com/babel/babel/tree/main/packages/babel-standalone)
  - [babel.js（二）：babel-standalone.js加载分析 - 简书](https://www.jianshu.com/p/72e7f2475576)
  - Seems working
    - [javascript - How to use babel directly from a script tag without installing babel itself - Stack Overflow](https://stackoverflow.com/questions/37228247/how-to-use-babel-directly-from-a-script-tag-without-installing-babel-itself)
      - ```js
        var input = 'const getMessage = () => "Hello World";';
        var output = Babel.transform(input, {
          presets: ['es2015', 'react']
        }).code;
        console.log(output);
        ```
- [ ] Web audio API - auto-gain
  - ```js
    <audio id="audioElement" src="path/to/audiofile.wav"></audio>
    
    <script>
      // Create an AudioContext instance
      const audioContext = new AudioContext();
    
      // Get the <audio> element
      const audioElement = document.getElementById('audioElement');
    
      // Wait for the audio to be loaded and ready to play
      audioElement.addEventListener('canplaythrough', () => {
        // Create a MediaElementAudioSourceNode from the <audio> element
        const sourceNode = audioContext.createMediaElementSource(audioElement);
    
        // Connect the source node to an analyzer node
        const analyzerNode = audioContext.createAnalyser();
        sourceNode.connect(analyzerNode);
        analyzerNode.connect(audioContext.destination);
    
        // Analyze the audio data in real-time
        const bufferLength = analyzerNode.frequencyBinCount;
        const dataArray = new Float32Array(bufferLength);
    
        function analyzeAudio() {
          analyzerNode.getFloatTimeDomainData(dataArray);
    
          // Find the peak level in the data array
          let peakLevel = 0;
          for (let i = 0; i < bufferLength; i++) {
            const absValue = Math.abs(dataArray[i]);
            if (absValue > peakLevel) {
              peakLevel = absValue;
            }
          }
    
          // Calculate the headroom
          const maxLevel = 1.0; // Maximum level before distortion
          const headroom = maxLevel - peakLevel;
    
          // Output the headroom value
          console.log('Headroom:', headroom);
    
          // Schedule the next analysis
          requestAnimationFrame(analyzeAudio);
        }
    
        // Start the analysis
        analyzeAudio();
      });
    
      // Load and play the audio
      audioElement.load();
      audioElement.play();
    </script>
    ```
    ```js
    // Create an AudioContext instance
    const audioContext = new AudioContext();
    
    // Load the audio file
    const audioFile = 'path/to/audiofile.wav';
    
    fetch(audioFile)
      .then(response => response.arrayBuffer())
      .then(buffer => audioContext.decodeAudioData(buffer))
      .then(audioBuffer => {
        // Get the audio buffer's channel data
        const channelData = audioBuffer.getChannelData(0); // Assuming mono audio
    
        // Find the peak level in the channel data
        let peakLevel = 0;
        for (let i = 0; i < channelData.length; i++) {
          const absValue = Math.abs(channelData[i]);
          if (absValue > peakLevel) {
            peakLevel = absValue;
          }
        }
    
        // Calculate the headroom
        const maxLevel = 1.0; // Maximum level before distortion
        const headroom = maxLevel - peakLevel;
    
        // Output the headroom value
        console.log('Headroom:', headroom);
      })
      .catch(error => {
        console.error('Error loading audio file:', error);
      });
    ```
- [ ] Web audio API - Monkey's audio codec
- [ ] 'https://developer.mozilla.org/en-US/docs/Web/API/Location/hash' to jump to apps


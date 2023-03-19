[airport](https://dirkarnez.github.io/airport/)
===============================================
### TODOs
- [ ] https://github.com/dirkarnez/minimal-react-development
- [ ] Solution for workaround (`setTimeout`) for hidden async babel transformation
  - [babel/packages/babel-standalone at main · babel/babel](https://github.com/babel/babel/tree/main/packages/babel-standalone)
  - [babel.js（二）：babel-standalone.js加载分析 - 简书](https://www.jianshu.com/p/72e7f2475576)
  - Seems working
    - [javascript - How to use babel directly from a script tag without installing babel itself - Stack Overflow](https://stackoverflow.com/questions/37228247/how-to-use-babel-directly-from-a-script-tag-without-installing-babel-itself)
      - ```js
        var input = 'const getMessage = () => "Hello World";';
        var output = Babel.transform(input, {
          presets: ['es2015']
        }).code;
        console.log(output);
        ```

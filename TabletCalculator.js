(() => {
    // calculate the minimum tablets needed to split so that all tablets are used
    // 3/4 tablet here
    let tab = 0;
    for (let i = 1; (Number.isInteger((tab = (3/4) * i))) != true; i++);
    console.log(tab)
})()

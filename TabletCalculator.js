(() => {
    // calculate the minimum tablets needed to split so that all tablets are used
    // 3/4 tablet here
    let tab = NaN;
    let i = NaN;
    for (i = 1; (Number.isInteger((tab = (3/4) * i))) != true; i++);
    console.log(`${tab} for ${i} day(s)`)
})();

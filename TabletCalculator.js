(() => {
    // calculate the minimum tablets needed to split so that all tablets are used
    // 3/4 tablet here
    function getGCD(a, b) {
        return b === 0 ? Math.abs(a) : getGCD(b, a % b);
    }
    
    function getSimplifiedDenominator(percentage) {
        const numerator = percentage;
        const denominator = 100;
        
        // Find the GCD of your percentage and 100
        const gcd = getGCD(numerator, denominator);
        
        // Divide 100 by the GCD to get the lowest denominator
        return denominator / gcd;
    }
    
    console.log(`${(3/4) * getSimplifiedDenominator((3/4) * 100)} for ${getSimplifiedDenominator((3/4) * 100)} day(s)`)
})();

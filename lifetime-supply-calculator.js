

const calculateSupply = function (age, amountperday) {
    const maxAge = 80;
    const needed = amountperday * 365 * (maxAge - age)
    let consumed = 'You will need ' + needed + ' to last you until the ripe of age of ' + age;
    console.log (consumed)
    };
    
    calculateSupply ('20', '5');
const tellFortune = function (numberofchildren, parentsname, location, jobtitle) {
    let future = 'You will be a ' + jobtitle + ' in ' + location + ' and married to ' + parentsname + ' with ' + numberofchildren + ' kids ';
    console.log(future);
}

tellFortune ('3', 'Dolly', 'France', 'Trainer');
tellFortune ('6', 'Polly', 'Spain', 'Plumber');
tellFortune ('2', 'Jane', 'England', 'Carpenter');
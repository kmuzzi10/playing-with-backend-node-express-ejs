# random-movie-names

## Generate one or more TMDB movie names

`random-movie-names` generates random movie names for use as sample text.

Cryptographic-quality randomness is NOT the goal, as speed matters for generating sample text and security does not. `Math.random()` is used.

Installation:

    npm install random-movie-names

Examples:

    const randomMovieNames = require('random-movie-names');

    console.log(randomMovieNames());
    SandCastle

    console.log(randomMovieNames(5));
    [TheBelkoExperiment', 'TheCircle', 'Containment', 'SisterActBackintheHabit', 'PatientZero']

    console.log(randomMovieNames({ min: 5, max: 10 }));
    ['Selena', 'ActionJackson', 'DragonBallZTheTreeofMight', 'TaleofTales', 'MatthiasMaxime', 'RustCreek']

    console.log(randomMovieNames({ exactly: 2 }));
    ['MeninBlack', 'RestStop']

    console.log(randomMovieNames({ exactly: 5, join: ' ' }));
    'Cyborg Wer Dreamcatcher ThoseWhoWishMeDead HowtoBeReallyBad'
    
    console.log(randomMovieNames({ exactly: 5, join: '' }));
    'NorbitClassofATaleofTwoSistersLovingVincentTheRunningMan'

    console.log(randomMovieNames({exactly: 5, maxLength: 4}));
    ['Away', 'Kids', 'Cujo', 'Hush', 'M']

    console.log(randomMovieNames({exactly:5, wordsPerString:2}));
    ['RoadTripBeerPong', 'SwimmingPool', 'InfidelityinSuburbia', 'TheLightBetweenOceans', 'VampyrosLesbos']


    console.log(randomMovieNames({exactly:5, wordsPerString:2, separator:'-'}));
    ['Mirage', 'Taken', 'Footloose', 'Newsies', 'TheBlairWitchProject']

    console.log(randomMovieNames({exactly:5, wordsPerString:2, formatter: (word)=> word.toUpperCase()}));
    ['BACHELORPARTY', 'NISEKOIFALSELOVE', 'ARENA', 'MALEFICENT', 'INCEPTIONTHECOBOLJOB']

    console.log(randomMovieNames({exactly:5, wordsPerString:2, formatter: (word, index)=> {
        return index === 0 ? word.slice(0,1).toUpperCase().concat(word.slice(1)) : word;
    }}));
    ['TrollHunter', 'TheHatefulEight', 'TheGreatWhiteHype', 'TheCandyWitch', 'TheLoveBug']

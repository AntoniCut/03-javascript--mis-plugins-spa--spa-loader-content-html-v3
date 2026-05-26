// @ts-nocheck
"use strict";
/*
    *  -----------------------------------------------------------------------------  *
    *  -----  /07-enums.js  --  /src/scripts/js/02-tipos-de-datos/07-enums.js  -----  *
    *  -----------------------------------------------------------------------------  *
*/

(function () {
    console.log('\n');
    console.warn('-----  07-enums.ts  -----');
    console.log('\n');
    //  -----  Enums  -----
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    console.log('\n', { AudioLevel: AudioLevel });
    var currentAudioMin = AudioLevel.min;
    console.log('\n', { currentAudioMin: currentAudioMin });
    var currentAudioMedium = AudioLevel.medium;
    console.log('\n', { currentAudioMedium: currentAudioMedium });
    var currentAudioMax = AudioLevel.max;
    console.log('\n', { currentAudioMax: currentAudioMax });
})();
//# sourceMappingURL=07-enums.js.map
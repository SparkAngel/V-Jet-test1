'use strict'

function mostUsedLetters(sourceString) {

    const filteredStr = sourceString.toLowerCase().replace(/[^a-z0-9а-яё]/g, ''); 

    const charsCount = {}; 
    let qq = [];
    for (const chr of filteredStr) {
      charsCount[chr] = (charsCount[chr] || 0) + 1; 
    };  

    const result = Object.keys(charsCount)
    .map(chr => ({ letter: chr, count: charsCount[chr] }))
    .sort((a, b) => b.count > a.count); 

    return result[0];

  }


console.log(mostUsedLetters("sdfsdfsdgggrtgeredddddd"));

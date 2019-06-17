class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
    // let alphaNumeric = string.match(/\w-'/g)
  }

  static titleize(string) {
    let words = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
      let sentences = string.split(" ")
      let results = []
      for (let i = 0; i<sentences.length; i++) {
        if ( i == 0 ) {
        results.push(this.capitalize(sentences[i]))
      } else if ( words.includes(sentences[i])) {
          results.push(sentences[i])
      } else {
        results.push(this.capitalize(sentences[i]))
      }
      // capitalized = capitalized.join(". ")
      // console.log(capitalized)
  }
  return results.join( " " );
}
}

// let arrayOfSentence = sentence.split(' ')
//     for ( let x = 0; x < arrayOfSentence.length; x++ ) {
//         if ( x == 0 ) {
//           result.push(this.capitalize(arrayOfSentence[x]) )
//         } else {
//           if (keepSmall.includes(arrayOfSentence[x]) ) {
//             result.push( arrayOfSentence[x] )
//           } else {
//             result.push(this.capitalize(arrayOfSentence[x]) )
//           }

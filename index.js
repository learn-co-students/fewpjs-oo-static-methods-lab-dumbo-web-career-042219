class Formatter {
  //add static methods here
  static capitalize(string) {

    return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static sanitize(string) {
      return string.replace(/[^A-Za-z0-9 '-]/g, '')

    }


  static titleize(sentence) {
    let keepSmall = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arrayOfSentence = sentence.split(' ')
      for ( let x = 0; x < arrayOfSentence.length; x++ ) {
          if ( x == 0 ) {
            result.push(this.capitalize(arrayOfSentence[x]) )
          } else {
            if (keepSmall.includes(arrayOfSentence[x]) ) {
              result.push( arrayOfSentence[x] )
            } else {
              result.push(this.capitalize(arrayOfSentence[x]) )
            }
          }
      }
      return result.join( " " );
  }
}

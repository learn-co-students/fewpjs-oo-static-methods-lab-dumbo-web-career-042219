class Formatter {
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    this._lower = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let springCleanedString = this.sanitize(string)
    let springCleanedWords = springCleanedString.split(" ")
    let springTitleizedWords = springCleanedWords.map(word => {
      return !this._lower.includes(word) || springCleanedWords.indexOf(word) === 0? this.capitalize(word):word
    })
    return springTitleizedWords.join(" ")
  }
}
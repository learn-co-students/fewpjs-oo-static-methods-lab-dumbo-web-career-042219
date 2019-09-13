class Formatter {
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'from', 'at', 'by']
    let new_str = [];

    string = string.split(" ");
    new_str.push(this.capitalize(string.splice(0, 1)[0]));

    string.forEach(word => {
      if (exceptions.includes(word)) {
        new_str.push(word);
      } else {
        new_str.push(this.capitalize(word))
      }
    });

    return new_str.join(" ");
  }
}
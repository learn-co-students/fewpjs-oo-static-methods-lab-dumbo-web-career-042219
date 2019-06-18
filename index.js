class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- '-]+/g, '');
  }

  static titleize(string) {
    const words = string.split(' ');
    const title_words = words.map(word => {
      if (['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    });

    return this.capitalize(title_words.join(' '));
  }
}
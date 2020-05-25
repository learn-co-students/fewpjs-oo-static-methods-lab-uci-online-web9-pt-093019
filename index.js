class Formatter {
  //add static methods here

  static capitalize(string) {
    return string[0].toUpperCase() + string.substr(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }

  static titleize(string) {
    const WORDS = ['the', 'a', 'an', 'but', 'of','and', 'for', 'at', 'by', 'from']
    const strArry = string.split(' ')
    const returnArry = []
    
    returnArry.push(Formatter.capitalize(strArry[0]))

    for (let i = 1; i<strArry.length; i++) {
      if (WORDS.indexOf(strArry[i]) === -1) {
        returnArry.push(Formatter.capitalize(strArry[i]))
      }
      else {
        returnArry.push(strArry[i])
      }
       
    }
    return returnArry.join(' ')
  }
}
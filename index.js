class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9'-\s]/gi,"") // g modifier finds all matches rather than stopping at first 
    // i modifier makes the search case insensitive 
  }

  static titleize(string) {
    const array = string.split(" ")
    let firstWord = true // first word is always capitalized 
    

    const newArray = array.map(function(word) {
      let capitalize = false 

      if (firstWord === true) {
        capitalize = true; 
      } else {
        switch (word) {
          case "the":
            capitalize = false;
          break;
          case "a":
            capitalize = false;
          break;
          case "an":
            capitalize = false;  
          break;
          case "but":
            capitalize = false; 
          break;
          case "of":
            capitalize = false; 
          break;
          case "and":
            capitalize = false; 
          break;
          case "for":
            capitalize = false; 
          break;
          case "at":
            capitalize = false; 
          break;
          case "by":
            capitalize = false; 
          break;
          case "from":
            capitalize = false; 
          break;
          default: 
            capitalize = true;             
        }          
      }
      firstWord = false // after first pass firstWord is false 
      if (capitalize === true) {
        return word[0].toUpperCase() + word.slice(1)
      } else {
        return word 
      }
    })
    return newArray.join(" ")
  }
}


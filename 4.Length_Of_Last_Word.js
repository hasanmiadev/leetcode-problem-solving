const lengthOfLastWord = (s) => {
   let trims = s.trim()
    let arr = trims.split(" ")
    let lastWord = arr[arr.length - 1];
    return lastWord.length
}

console.log(lengthOfLastWord("HELLO   HASAN WORLD"));
  
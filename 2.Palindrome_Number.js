const isPalindrome = (x) => {
    const result = String(x).split('').reverse().join('')
    if (Number(result) === x) {
        return true
    }else{
        return false
    }
}
console.log(isPalindrome(142));
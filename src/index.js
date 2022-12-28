module.exports = function reverse (n) {
    n = n.toString();
    let arr = [...n];
    return parseInt(arr.reverse().join(''));
}

const isPrime = (number) => {
    if (number === 1) return false;
    for (let i = 2; i <= number/2; i++) {
        if (number % i === 0) return false
    }
    return true
}

module.exports = {
    isPrime
}
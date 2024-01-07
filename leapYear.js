function leapYear(year) {
    if ((year % 100 === 0 && year % 400 !== 0) || (year % 4 !== 0)) {
        return false
    } else if ((year % 4 === 0) || ( year % 400 === 0)){
        return true
    }   
}

module.exports = leapYear;
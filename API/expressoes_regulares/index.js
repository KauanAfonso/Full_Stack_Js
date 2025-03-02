function phoneNumber(phoneNumberSring){
    const fixedString = phoneNumberSring.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new phoneNumber('+55 (22) 9 9876-2514'))
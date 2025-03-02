function phoneNumber(phoneNumberSring){
    const fixedString = phoneNumberSring.replace(/[\sa-zA-Z]/g, "")
    this.contryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
}

console.log(new phoneNumber('+55 (22) 9 9876-2514'))
//O async retorna uma promessa automaticamente
async function asyncSum(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        return Promise.reject("Arguments must be of type number")
    }
    return a + b
}


// async function execute() {
//     asyncSum(50,30).then(result => console.log(result))
// }

//await são só permitidas em func async
//para reijeitar utilize try-catch
async function execute() {
    try{
    const result = await asyncSum(50,30) //ele esperada pela soução de uma promise, semelhante ao then
    console.log(result)
    }catch(err){
        console.log(err)
    }

}

execute()
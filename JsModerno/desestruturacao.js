const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
  }
  
const name = person.name

const { job, parents } = person //destruturando o arry

console.log(name, job, parents)

//desetruturando para um array:

//se atentar com a ordem
const [father , mae] = parents 

console.log(father , mae)

function createUser({name , job, parents}){
  const id = Math.floor(Math.random() * 9999 )
  return {
    id,
    name, 
    job,
    parents
  }
} 

const luke = createUser(person)
console.log(luke)
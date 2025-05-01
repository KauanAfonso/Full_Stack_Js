
//Literal tipos , são tipos que aceitam somente os valores que foram definidos para ele
let literal: "Helow world";
let pi: 3.14;

//union types
let option: "Yes" | "No"
option = "Yes" //aceita somente os valores definidos para ele


//criando o nosos proprio tipo

type Planet = {"mercurio", "venus", "terra", "marte", "jupiter", "saturno", "urano", "netuno"}
let planet:Planet
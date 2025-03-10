/*

- Um caractere @
- Texto antes do @ com pelo menos 2 caracteres, números ou _ (underscore).
- Texto após o @ com pelo menos 2 caracteres
- Um . seguido de mais texto com pelo menos 2 caracteres após o texto após o @
- Estrutura de um email válido: **xx@xx.xx**

*/

const verificar_email = (email)=>{
    const emailfixado = email.replace(/\s/g, '');
    const email_arroba = emailfixado.match(/[/@]/)
    console.log(email_arroba)
    return emailfixado
}

const verificador_senha = (senha) =>{
    return senha
}

console.log(verificar_email('kauana afonso da silva'))
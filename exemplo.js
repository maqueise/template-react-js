/* Desestruturação */ 

let pessoa = {
    nome:"Caio Maqueise",
    idade:37
}

let {nome:primeiroNome ,idade } = pessoa
console.log(primeiroNome)

function getProduto(){
    let produto ={
        descricao:"XBOX",
        preco:4586
    }
    return produto
}

let {descricao,preco} = getProduto()
console.log(descricao,preco)

let numeros = [1,2,3,4,5]

function useState(){
    let state = 0
    function setState(){
       return "oi"
    }
    return [state,setState]
}

let [valor,funcao] = useState()

console.log(valor,funcao())

/* Notação Tradicional
let nome = pessoa.nome
let idade = pessoa.idade
*/

/* funções Puras */
let isLogado = false
let resultado = 2

function dobrar(valor){
        return valor*2
   
}
resultado = dobrar(2,isLogado)
console.log(resultado);



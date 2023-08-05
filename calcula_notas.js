const nomeNota = [
   {nome : 'Ader Henrique', nota: 5.9 },
   {nome : 'Ana Luisa', nota: 9 },
   {nome : 'Ana Claudia', nota: 6 },
   {nome : 'Ana Julia', nota: 9 } 
]
const alunosAprovados = nomeNota.filter(aprovado => {
   if ( aprovado.nota >= 6 ){
      return {
         name : aprovado.nome
      }
   }
})

console.log(alunosAprovados)
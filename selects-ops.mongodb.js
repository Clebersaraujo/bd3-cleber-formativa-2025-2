/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DO BANCO DE DADOS: */
const database = "BD3-AULA";

/* CRIAÇÃO DA CONSTANTE QUE REPESENTA O NOME DA COLEÇÃO DE ARQUIVOS: */
const collection = "LIVRARIA";

/* DEFINE O BANCO DE DADOS QUE SERÁ UTILIZADO, CASO NÃO EXISTA SERÁ CRIADO */
use(database);

/* SELECIONA OS DOCUMENTOS COM O USO DOS OPERADORES MAIOR $gt */
// db['LIVRARIA'].find({
//     valor:{$gt:110}
// })
// /* SELECIONA OS DOCUMENTOS COM O USO DOS OPERADORES MAIOR $gt */
// db['LIVRARIA'].find({
//     valor:{$gt:110}
// })
// /* SELECIONA OS DOCUMENTOS COM O USO DOS OPERADORES MENOR $lt */
// db['LIVRARIA'].find({
//     valor:{$lt:110}
// })
// /* SELECIONA OS DOCUMENTOS COM O USO DOS OPERADORES MAIOR $gt */
// db['LIVRARIA'].find({
//     valor:{$gte:50, $lte:150}
// }).sort({valor:-1})

// /* Operador Logico $and */
// db['LIVRARIA']
// .find({$and:[
//     {categoria:{$eq:'Fantasia Heroica'}},
//     {valor:{$lte:100}}
// ]
// })
// /* Operador Logico OR */
// db['LIVRARIA']
// .find({$and:[
//     {categoria:{$or:'Fantasia Heroica'}},
//     {valor:{$lte:100}}
// ]
// })

db["LIVRARIA"]
  .find(
    {
      autor: { $in: ["J.R.R Tolkien", "Isaac Asimov"] },
    },
    { id: 0, codigo: 0, descricao: 0 }
  )
  .sort({ valor: 1 });

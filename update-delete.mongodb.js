// Criação da constante que representa o nome do banco de dados
const database = "BD3-AULA";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "LIVRARIA";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

// Atualização de um arquivo
db["LIVRARIA"].update(
    {codigo: "1"},
    {$set: {titulo: "Alteração do titulo"}}
);

// Remoção de um arquivo
db["LIVRARIA"].deleteOne({codigo: "1"});
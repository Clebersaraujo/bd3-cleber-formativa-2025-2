// Criação da constante que representa o nome do banco de dados
const database = "BD3-AULA";

// Criação da constante que representa o nome da coleção de arquivos
const collection = "LIVRARIA";

// Defina o banco de dados que será utilizado, caso não exista, será criado
use(database);

// Seleciona os dados de todos os arquivos sem critério:
db['LIVRARIA'].find();

// Seleciona arquivos com dados de acordo com a categoria definida
// db['LIVRARIA'].find({"categoria":"Fantasia Heroica"});

// Seleciona arquivos com dados de acordo com a categoria definida e ocultando certos campos
// db['LIVRARIA'].find({"categoria":"Fantasia Heroica"},{"_id":0, "codigo":0, "descricao":0});

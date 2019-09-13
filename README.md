# API CRUD - estudo

MongoDB atraves do docker

` npm install robo3T` 
pra ver os schemas do banco

``npm install mongoose``

## ORM  
encapsula a logica  das opeações do banco de dados atraves do codigo, Ao inves de usar queries usamos codigo javascript pra fazer inserts, deletes, creates etc...

## CONEXAO COM BANCO DE DADOS

> LINK: (mongodb://localhost:27017/nodeapi)
mongodb:// => Por padrão, protocolo 
localhost: => local, mas se tiver usuario e senha coloca-se no lugar de localhost separados por :
27017/ => Numero da porta que está utilizando (nesse caso, a mesma porta que o docker funciona)
nodeapi => FNome do schema

## Model:
  Tabela do banco de dados, ou uma estrutura de dados que vamos gravar no DB

No arquivo products.js, define-se o schema
Schema: Quais sao os campos que o produto pode ter e que tipos de valores eles vao salvar

## Mongoose-paginate:
Auxilio do mongoose para fazer a paginação de uma maneira mais simples.


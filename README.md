# links-tech-react

Links Tech é uma pagina que permite salvar seus links favoritos, com o titulo
Nesta pagina foi utilizado deploy do frontend no vercel, foi utilizado o banco de dados Mongo DB Atlas e efetuado o deploy do backend no Heroku.

## Deploy Frontend

https://links-tech-react.vercel.app/

## Deploy Backend

https://api-links-tech.herokuapp.com

## Swagger

https://api-links-tech.herokuapp.com/doc

## Repositorio Frontend

https://github.com/vanderleimiguel/links-tech-react

## Start projeto

npm run dev

# Código

Ao abrir a pagina irá carregar todos seus artigos ja salvos, na parte superior direita existe um botão para adicionar um artigo e clicando no card do artigo irá abrir um modal com mais opções descritas abaixo:

Novo Artigo: Clique no botão Adicionar no canto superior direito, irá abrir uma janela para preencher os campos campos título e url, e clique no botão verde "ADICIONAR"

Editar Artigo: Clique no artigo que deseja editar, irá abrir uma nova janela, clique no botão editar artigo, edite o campo que deseja e clique no botão azul "EDITAR ARTIGO"

Deletar Artigo: Clique no artigo que deseja deletar, irá abrir uma nova janela, clique no botão vermelho "DELETAR ARTIGO"

Visitar Artigo: Clique no artigo que deseja visitar, irá abrir uma nova janela, clique no botão cinza "VISITAR ARTIGO"

# Desenvolvimento

Foi criado a pagina com React, estilizando com CSS e  consumindo uma API propria.

## Dependencias

    "bootstrap": "^5.2.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.5.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-modal": "^3.15.1",

## Instalações

    npm init -y
    npm create vite@latest
    npm install
    npm run dev
    npm i react-modal
    npm i react-icons
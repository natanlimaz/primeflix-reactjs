# PrimeFlix

## Descrição do Projeto

PrimeFlix é um aplicativo web desenvolvido em React que utiliza a API do The Movie DB para fornecer informações sobre os filmes que estão nos cinemas. Com ele, os usuários podem visualizar os detalhes de cada filme, salvar filmes em uma lista de favoritos e acessar facilmente essa lista.

O projeto utiliza as seguintes tecnologias:

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Axios: Cliente HTTP baseado em Promises para realizar requisições à API do The Movie DB.
- React Router DOM: Biblioteca para roteamento de URLs em aplicativos React.
- React Toastify: Biblioteca para exibição de notificações estilo toast.

## Funcionalidades

1. **Visualização de Filmes nos Cinemas**: O aplicativo exibe uma lista de filmes que estão atualmente em cartaz nos cinemas, obtidos através da API do The Movie DB.

2. **Detalhes do Filme**: Os usuários podem clicar em um filme na página inicial para visualizar mais informações sobre ele, como sinopse, elenco, classificação, etc.

3. **Lista de Favoritos**: É possível salvar filmes em uma lista de favoritos. Um toast é exibido na tela através do React Toastify para confirmar que o filme foi salvo com sucesso.

4. **Visualização da Lista de Favoritos**: Os usuários podem acessar a lista de filmes favoritos clicando no botão "Meus Filmes" no cabeçalho. Eles podem visualizar os filmes salvos e remover filmes da lista.

5. **Exclusão de Filme da Lista**: Dentro da lista de favoritos, os usuários podem remover um filme da lista. Um toast é exibido para confirmar a remoção com sucesso.

6. **Visualização de Detalhes dos Filmes Favoritos**: Os usuários podem clicar em um filme na lista de favoritos para visualizar mais detalhes sobre ele.

## Instalação e Uso

Para executar o projeto localmente, siga estas etapas:

1. Clone este repositório:
`git clone https://github.com/seu-usuario/prime-flix.git`

2. Entre na pasta do projeto:
`cd primeflix-reactjs`

3. Instale as dependências:
`npm install`

4. Inicie o servidor de desenvolvimento:
`npm start`


O aplicativo estará disponível em `http://localhost:3000`.

## Autor

Este projeto foi desenvolvido por [Natan Lima](https://github.com/natanlimaz).

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um PR ou uma issue para sugerir melhorias ou reportar bugs.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

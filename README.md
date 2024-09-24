# Receitas da Sonia

Um site interativo para amantes da culinária, onde os usuários podem explorar, salvar e compartilhar suas receitas favoritas. O projeto busca oferecer uma interface simples e intuitiva, permitindo que as receitas sejam facilmente encontradas por categorias, além de permitir o login e registro de usuários.

<!-- ## Interface

<div align="center">
  <img src="img/logo.png" alt="Imagem do Projeto" width="100">
</div> -->

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Autor](#autor)

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/js.png" alt="Logo Linguagem" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/react.png" alt="Logo Linguagem" width="100"/>
  </div>
</div>

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

## Descrição

O projeto **Receitas da Sonia** é um site de receitas onde os usuários podem navegar por diversas categorias de pratos, como Café da Manhã, Almoço, Jantar, e Sobremesas. O site permitirá que os usuários marquem receitas como favoritas, façam login e compartilhem suas próprias receitas.

O design foi pensado para ser simples, responsivo e focado na experiência do usuário, permitindo que qualquer pessoa possa encontrar a receita que precisa de forma rápida.

## Funcionalidades

- Exploração de receitas por categorias.
- Filtros de busca por nome de receita e ingredientes.
- Favoritar receitas para fácil acesso posterior.
- Login e registro de usuários.
- Compartilhamento de receitas com a comunidade.

# Sobre o React Receitas

O projeto "React Receitas" é uma aplicação web desenvolvida com React, que permite aos usuários visualizar e explorar receitas culinárias. Desde o momento em que o usuário acessa a aplicação, ele é direcionado para a página inicial (Home), onde pode visualizar as receitas mais populares, navegar por categorias, e acessar páginas específicas de cada receita.

### Fluxo Geral:

1. **Página Home:** Quando o usuário acessa a aplicação, ele é redirecionado para a página Home. Aqui, ele encontra uma lista de receitas destacadas e links para diferentes categorias.
2. **Navegação:** A navegação é feita através do componente `Header`, que inclui links para as páginas de categorias, receitas e sobre. O menu de navegação é dinâmico, se adaptando conforme o dispositivo.
3. **Visualização de Receitas:** Ao clicar em uma receita na Home ou em uma categoria, o usuário é levado à página da receita específica, onde pode ver detalhes como ingredientes e modo de preparo.
4. **Página de Erro:** Caso o usuário tente acessar uma rota que não existe, ele será redirecionado para uma página 404 personalizada.

## Específico

### 1. Arquitetura do Projeto

A estrutura do projeto segue o padrão de Componentes e Páginas, facilitando a manutenção e escalabilidade.

## Principais componentes e páginas:

- **Header**: Barra de navegação do site.
- **Footer**: Rodapé com links de navegação.
- **Home**: Página principal com receitas em destaque e barra de pesquisa.
- **Categorias**: Página com filtros de receitas por categorias.
- **Login e Cadastro**: Sistema de autenticação de usuários.
- **Favoritos**: Página personalizada com as receitas favoritas dos usuários.

## Como Usar

1. Clone este repositório: `git clone https://github.com/seuusuario/react_receitas.git`
2. Instale as dependências: `npm install`
3. Inicie o projeto: `npm start`
4. Acesse o site em `http://localhost:3000`

## Estrutura do projeto

```
node_modules/
public/
src/
  assets/
    logo.png
    recipes/
      recipe-1.jpeg
      recipe-2.jpeg
      recipe-3.jpeg
      recipe-4.jpeg
  Components/
    Footer/
      footer.js
      footer.module.css
    Header/
      header.js
      header.module.css
  Page/
    Home/
      home.js
      home.module.css
    Receitas/
      receitas.js
      receitas.module.css
  App.js
  index.js
  index.css
.gitignore
package-lock.json
package.json
README.md
```

## Autor

Desenvolvido por Diego Franco

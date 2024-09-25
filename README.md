# Receitas da Sonia

Um site interativo para amantes da culinária, onde os usuários podem explorar suas receitas favoritas. 

O projeto busca oferecer uma interface simples e intuitiva, permitindo que as receitas sejam facilmente encontradas por categorias.

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
    <img src="public/js.png" alt="Logo Linguagem" width="150"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="public/react.png" alt="Logo Linguagem" width="150"/>
  </div>
</div>

## Status

![Em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge)

<!-- ![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge) -->

## Funcionalidades

- Exploração de receitas por categorias.
- Filtros de busca por nome de receita e ingredientes.

# Sobre o React Receitas

O projeto "React Receitas" é uma aplicação web desenvolvida com React, que permite aos usuários visualizar e explorar receitas culinárias. 

Desde o momento em que o usuário acessa a aplicação, ele é direcionado para a página inicial (Home), onde pode visualizar as receitas mais populares, navegar por categorias, e acessar páginas específicas de cada receita.

### Fluxo Geral:

1. **Página Home:** Quando o usuário acessa a aplicação, ele é redirecionado para a página Home. Aqui, ele encontra uma lista de receitas destacadas e links para diferentes categorias.
2. **Navegação:** A navegação é feita através do componente `Header`, que inclui links para as páginas de categorias, receitas e sobre. O menu de navegação é dinâmico, se adaptando conforme o dispositivo.
3. **Visualização de Receitas:** Ao clicar em uma receita na Home ou em uma categoria, o usuário é levado à página da receita específica, onde pode ver detalhes como ingredientes e modo de preparo.
4. **Página de Erro:** Caso o usuário tente acessar uma rota que não existe, ele será redirecionado para uma página 404 personalizada.

## Específico

### 1. Arquitetura do Projeto

A estrutura do projeto segue o padrão de Componentes e Páginas, facilitando a manutenção e escalabilidade.

### 2. Fluxo Detalhado e Responsabilidades dos Arquivos

#### `index.js`

- **Responsabilidade:** Ponto de entrada da aplicação React. Ele é responsável por renderizar o componente raiz `RoutesConfig`, que gerencia todas as rotas da aplicação.
- **Interação:** O `index.js` é responsável por encapsular a aplicação dentro de `React.StrictMode` e utilizar o React Router para definir a navegação entre páginas.

#### `routes.js`

- **Responsabilidade:** Configura as rotas da aplicação. Este arquivo define quais componentes devem ser carregados em cada rota.
- **Interação:** O `routes.js` interage diretamente com todos os componentes de página (`Home`, `Receitas`, `Receita`, `Sobre`, `Error`) e é responsável por renderizar o `Header` e `Footer` em todas as páginas.

#### `header.js` e `footer.js`

- **Responsabilidade:** `header.js` é responsável por renderizar o cabeçalho e a navegação principal, enquanto `footer.js` renderiza o rodapé da aplicação.
- **Interação:** Ambos os componentes são importados e utilizados em `routes.js`, garantindo que o cabeçalho e o rodapé estejam presentes em todas as páginas.

#### `home.js` (Página Inicial)

- **Responsabilidade:** Renderiza a página Home, que é a primeira página que o usuário vê ao acessar a aplicação. Exibe um banner e uma lista de receitas populares.
  
- **Interação:** Interage com o arquivo JSON para carregar as receitas mais populares e renderizar os links para as páginas de receitas específicas.

#### `receitas.js` (Página de Listagem de Receitas)

- **Responsabilidade:** Renderiza uma lista completa de receitas, permitindo que o usuário explore todas as receitas disponíveis na aplicação.
  
- **Interação:** Carrega os dados do JSON e mapeia as receitas para exibi-las como cards clicáveis. Cada card redireciona o usuário para a página da receita específica.

#### `receita.js` (Página de Receita Individual)

- **Responsabilidade:** Exibe os detalhes de uma receita selecionada, como ingredientes, modo de preparo, e outras informações relevantes.
- **Interação:** Recebe o ID da receita via parâmetro na URL, busca a receita correspondente no JSON, e renderiza as informações detalhadas.

#### `sobre.js` (Página Sobre)

- **Responsabilidade:** Exibe informações sobre o site e seu propósito.
- **Interação:** Está ligada diretamente ao link "Sobre" na navegação principal e é renderizada quando o usuário clica nesse link.

#### `error.js` (Página 404)

- **Responsabilidade:** Exibe uma mensagem de erro e um link de retorno à Home quando o usuário acessa uma rota inexistente.
- **Interação:** É carregada automaticamente pelo React Router quando uma rota não é encontrada.

## 3. Integração com JSON

- **JSON de Receitas:** Um arquivo JSON é utilizado para armazenar todas as receitas disponíveis na aplicação. Esse JSON é importado nos componentes de página (`Home`, `Receitas`, `Receita`) e usado para renderizar dinamicamente as informações de cada receita.
- **Integração na Página Home:** A Home carrega as receitas mais populares diretamente do JSON e exibe seus cards.
- **Integração na Página Receitas:** Carrega todas as receitas do JSON e exibe em uma lista, permitindo navegação para páginas de receita específica.
- **Integração na Página Receita:** Usa o ID da receita para buscar os detalhes específicos da receita no JSON e exibe essas informações para o usuário.

### 4. Estilos e CSS Modules

- **CSS Modules:** Utilizados para garantir que os estilos sejam escopados apenas ao componente em que são aplicados, evitando conflitos de CSS. Cada componente tem seu próprio arquivo `.module.css`.
- **Estilização Global:** Configurações globais de estilo, como cores e fontes, são definidas em `index.css` usando variáveis CSS. Essas variáveis são reutilizadas em todos os componentes para manter a consistência visual.

### 5. Gerenciamento de Estado e Hooks

- **useState:** Usado para gerenciar o estado local de componentes, como o menu de navegação (toggle do menu hamburguer).
- **useEffect (opcional):** Poderia ser utilizado se houvesse necessidade de carregar dados ou executar efeitos colaterais em componentes.

### 6. Navegação e React Router

- **React Router:** Usado para gerenciar a navegação entre as páginas. Cada página (Home, Receitas, Receita, Sobre, Error) é configurada como uma rota em `routes.js`.
- **Link:** O componente `Link` do React Router é utilizado para criar links de navegação entre as páginas sem recarregar a página inteira.

### 7. Deploy e Configuração Final

- **Build de Produção:** O projeto é compilado para produção utilizando `npm run build`, que gera uma versão otimizada e pronta para deploy.
- **Hospedagem:** O projeto pode ser hospedado em serviços como Vercel, Netlify ou GitHub Pages. A configuração do deploy depende do serviço escolhido e é feita após a geração do build de produção.

## Principais componentes e páginas:

- **Header**: Barra de navegação do site.
- **Footer**: Rodapé com links de navegação.
- **Home**: Página principal com receitas em destaque e barra de pesquisa.
- **Categorias**: Página com filtros de receitas por categorias.
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

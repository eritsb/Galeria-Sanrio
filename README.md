# 🌸 Galeria Sanrio 🌸

<div align="center">

<img src="https://i.pinimg.com/originals/b1/ad/ba/b1adba819abf70d9ea98d4e65ea9f2a5.gif" width="100px" style="margin-right: 10px;">
<img src="https://i.pinimg.com/originals/46/bb/34/46bb3456e64b65379c5e9ac80bb204cc.gif" width="100px" style="margin-right: 10px;">
<img src="https://i.pinimg.com/originals/72/d9/bc/72d9bcc1e70741cd734e267fb96d3d19.gif" width="100px">

</div>

## Sobre o projeto

[![Visual Studio Code](https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=visualstudiocode&logoColor=white)](#) 	[![CSS](https://img.shields.io/badge/CSS-639?logo=css&logoColor=fff)](#) [![HTML](https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white)](#) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000)](#) 	[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)

O **Galeria Sanrio** é um projeto web desenvolvido para uma atividade acadêmica com o objetivo de aplicar conceitos de **HTML, CSS e JavaScript** na criação de uma página web responsiva e interativa.

A aplicação apresenta uma galeria de imagens de três personagens da Sanrio:

* My Melody
* Pompompurin
* Cinnamoroll

O projeto foi desenvolvido pensando em diferentes tamanhos de tela, permitindo que a interface seja utilizada tanto em computadores quanto em dispositivos móveis.

---

##  Objetivos

O projeto tem como principais objetivos:

* Desenvolver uma página utilizando HTML5;
* Aplicar estilização utilizando CSS3;
* Implementar funcionalidades utilizando JavaScript;
* Criar uma interface responsiva;
* Organizar o código em arquivos separados;
* Desenvolver elementos de interação para o usuário.

---

##  Tecnologias utilizadas

### HTML5

Responsável pela estrutura da aplicação.

O HTML é utilizado para criar:

* Cabeçalho;
* Título e descrição;
* Botões de filtro;
* Seções das galerias;
* Imagens;
* Modal para visualização das imagens;
* Rodapé.

### CSS3

Responsável pela aparência e responsividade da aplicação.

Entre os recursos utilizados estão:

* CSS Grid;
* Flexbox;
* Media Queries;
* Gradientes;
* Bordas arredondadas;
* Sombras;
* Transições;
* Layout responsivo.

### JavaScript

Responsável pelas funcionalidades interativas da aplicação.

O JavaScript é utilizado para:

* Filtrar os personagens;
* Abrir as imagens em um modal;
* Trocar a imagem exibida;
* Navegar entre as imagens;
* Atualizar o contador de imagens;
* Fechar o modal;
* Permitir navegação pelo teclado.

---

##  Estrutura do projeto

```text
projeto-sannrio/
│
├── index.html
├── style.css
└── script.js
```

### `index.html`

Arquivo responsável pela estrutura principal da página.

Ele contém o cabeçalho, os botões de filtro, as galerias de personagens, as imagens, o modal e o rodapé.

### `style.css`

Arquivo responsável pela estilização da página.

Também contém as regras de responsividade através de `@media`, fazendo com que a quantidade de imagens por linha seja adaptada de acordo com o tamanho da tela.

### `script.js`

Arquivo responsável pela interação da página.

Nele estão implementadas as funções de filtro, abertura do modal, navegação entre imagens e controle dos eventos do teclado.

---

#  Funcionamento da aplicação

## 1. Página inicial

Ao acessar o `index.html`, o usuário encontra o título **Galeria Sanrio**, uma breve descrição e os botões de filtragem.

A página inicialmente apresenta os três personagens.

---

## 2. Filtro de personagens

Na parte superior da galeria existem quatro opções:

```text
Todos
My Melody
Pompompurin
Cinnamoroll
```

Ao clicar em um dos filtros, o JavaScript verifica o personagem selecionado e altera a visibilidade das galerias.

O filtro **Todos** exibe todos os personagens.

---

## 3. Visualização das imagens

Ao clicar em qualquer imagem, ela é aberta em um **modal**, ocupando uma área maior da tela.

O modal apresenta:

* Imagem ampliada;
* Botão para voltar;
* Botão para avançar;
* Contador de imagens;
* Botão para fechar.

---

## 4. Navegação entre imagens

O usuário pode navegar pelas imagens utilizando os botões laterais:

```text
← Imagem anterior
Imagem atual
Imagem próxima →
```

Também é possível utilizar o teclado:

```text
←  Imagem anterior
→  Próxima imagem
Esc  Fechar
```

---

#  Responsividade

A aplicação foi desenvolvida para se adaptar a diferentes tamanhos de tela.

Em telas maiores, as imagens são organizadas em três colunas:

```text
[ imagem ] [ imagem ] [ imagem ]
[ imagem ] [ imagem ] [ imagem ]
```

Em telas menores, a quantidade de colunas é reduzida.

### Tablet / telas médias

```text
[ imagem ] [ imagem ]
[ imagem ] [ imagem ]
```

### Celular

```text
[ imagem ]
[ imagem ]
[ imagem ]
```

Essa adaptação é realizada através de **Media Queries** no arquivo `style.css`.

---

# Como executar

## Opção 1 — Abrindo diretamente no navegador

1. Baixe ou clone o repositório;
2. Abra a pasta do projeto;
3. Localize o arquivo `index.html`;
4. Clique duas vezes no arquivo;
5. O projeto será aberto no navegador.

## Opção 2 — Utilizando o VS Code

1. Abra o projeto no Visual Studio Code;
2. Abra o arquivo `index.html`;
3. Instale a extensão **Live Server**, caso ainda não tenha;
4. Clique com o botão direito no `index.html`;
5. Selecione **Open with Live Server**.

---

# Organização do código

O projeto foi dividido em três arquivos principais para facilitar a organização e manutenção:

```text
HTML → Estrutura
CSS  → Estilo e responsividade
JS   → Interatividade
```

Essa separação permite modificar a estrutura, aparência ou funcionalidades da aplicação sem concentrar todo o código em um único arquivo.

---

# Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

* Estrutura semântica HTML5;
* Classes e atributos `data-*`;
* Seleção de elementos com JavaScript;
* Manipulação de classes CSS;
* Eventos de clique;
* Eventos de teclado;
* CSS Grid;
* Flexbox;
* Media Queries;
* Design responsivo;
* Modal interativo;
* Manipulação do DOM.

---

#  Finalidade acadêmica

Este projeto foi desenvolvido para demonstrar a utilização conjunta de **HTML, CSS e JavaScript** na criação de uma aplicação web.

A solução busca atender aos requisitos de organização do código, responsividade, funcionamento da aplicação e implementação de interações utilizando JavaScript.

---

## Autoria

Ericha Tainá da Silva Barbosa. 185-ADS Noite

Projeto desenvolvido individualmente para fins acadêmicos.

**Tecnologias:** HTML5 • CSS3 • JavaScript

---
title: "CommWeb"
author: "Mack pro"
---

**Índice**

- [1. Introdução](#1-introdução)
- [2. Escopo do projeto](#2-escopo-do-projeto)
- [3. Requisitos do projeto](#3-requisitos-do-projeto)
- [4. Instalação local](#4-instalação-local)
- [5. Guia do usuário](#5-guia-do-usuário)
- [6. Integrantes do grupo](#6-integrantes-do-grupo)

## 1. Introdução

Esse projeto está sendo elaborado para a disciplina _Prática Profissional em Análise e Desenvolvimento de Sistemas_, consiste no desenvolvimento de todo o processo de implantação de uma aplicação para comunidade web (na internet) onde seus membros poderão compartilhar as suas impressões sobre os browser games (jogos on-line) que já jogaram, identificando os que gostaram e os que não gostaram.

O **CommWeb** deverá ser uma comunidade web onde seus membros poderão compartilhar as suas impressões sobre os browser gamers que já jogaram, identificando o que gostaram e o que não gostaram. 

Com estas informações, o **CommWeb** poderá dar para cada membro recomendações de browser games que ele ainda não conhece e que provavelmente irá gostar.


## 2. Escopo do projeto

O escopo desse projeto é um sistema web que permite o usuário conhecer, cadastrar e avaliar jogos de navegadores. O projeto deverá seguir os seguinte story points definidos pelo professor da matéria: 

1. O administrador do **CommWeb** será responsável por cadastrar os _browser games_ que serão avaliados pelos membros.

2. Os browser games serão organizados nas seguintes categorias iniciais: _Strategy_, _Shooter_, _Puzzle_, _Arcade_, _Role Playing Game (RPG)_, _Sports_, _Action_, _Adventure_. No entanto, o administrador poderá editar esta lista, criando novas categorias ou alterando os nomes das categorias já cadastradas.

3. Ao cadastrar um _browser game_, o administrador deverá fornecer as seguintes informações: nome, categoria (conforme as opções do item anterior), URL de acesso ao jogo, URL do vídeo de demonstração (se houver), descrição em 255 caracteres e imagem ilustrativa.

4. Qualquer pessoa poderá se cadastrar como membro do **CommWeb** mediante o fornecimento das seguintes informações: nome completo, username que deseja utilizar, senha para acessar o sistema, data de nascimento, estado e país. Cada membro poderá atualizar posteriormente os dados fornecidos no cadastro.

5. O membro terá as seguintes opções para buscar pelos _browser games_ cadastrados: (a) busca pelo nome ou por parte do nome, (b) busca pela categoria (ao selecionar uma das categorias cadastradas, é apresentada uma lista dos browser games desta categoria em ordem alfabética).

6. Após navegar até um determinado _browser game_, o membro poderá avaliá-lo definindo quantas estrelas (de 1 a 5) dará para o jogo e escrevendo um texto de até 255 caracteres. Caso o membro já tenha avaliado o _browser game_ anteriormente, ele visualizará as informações da avaliação que havia feito e terá a opção de alterá-las (afinal, pode ser que tenha mudado a sua opinião sobre o jogo).

7. Após navegar até um determinado _browser game_, o membro poderá também visualizar uma lista com todas as avaliações que já foram feitas para o jogo selecionado pelos outros membros do **CommWeb**.

8. Se o membro achar que a avaliação feita pelo outro membro foi útil, será possível marcar a opção "Esta avaliação foi útil para mim".

9. O membro poderá solicitar uma lista das avaliações mais úteis do **CommWeb**, ordenadas e mostrando primeiro as que receberam mais marcações na opção "Esta avaliação foi útil para mim".

10. Ao escolher visualizar as recomendações que o **CommWeb** tem a oferecer, o membro visualizará uma lista com os browser games que ele ainda não avaliou e provavelmente irá gostar. Para dar recomendações de acordo com o "gosto" do membro, o **CommWeb** deverá utilizar um algoritmo escolhido pela equipe. O algoritmo escolhido deverá ser explicado em detalhes na documentação do projeto.

11. O administrador poderá obter os seguintes relatórios de um determinado período (ou seja, definindo as datas inicial e final) de operação do **CommWeb**:
     - 5 jogos que receberam maior número de avaliações;<br>
     - 5 membros que realizaram o maior número de avaliações;<br>
     - 5 jogos que têm a maior nota média de avaliação (neste caso, só devem ser levados em conta os jogos que já receberam pelo menos 4 avaliações no
período);<br>
     - 3 categorias que receberam maior número de avaliações.
     
## 3. Requisitos do projeto

a) O **CommWeb** deverá ser colocado em operação como uma aplicação web.<br>
b) Os dados do **CommWeb** deverão ser persistidos em uma base de dados (relacional ou NoSQL).<br>

## 4. Instalação local

Para rodar esse projeto localmente, clone ou faça download desse repositório [aqui](https://github.com/guilchaves/comm-web-front.git).

No diretório do projeto, instale as dependências com o comando:

### `npm install`

Rode localmente em sua máquina, utilizando o comando:

### `npm start`

O projeto será inicializado em [http://localhost:3000](http://localhost:3000).

_NOTA: Para que o aplicativo tenha acesso ao banco de dados localmente, é necessária a instalação do backend desse projeto. O mesmo pode ser encontrado nesse [link](https://github.com/guilchaves/mack-pro-comm-web)._

## 5. Guia do usuário

Funcionalidades: O aplicativo permite ao usuário administrador gerenciar os jogos cadastrados em seu banco de dados. O usuário pode **adicionar um novo jogo**, **editar jogos existentes**, **deletar jogos existentes**, **buscar jogos na lista**. 


### Seção Admin

Rota para seção Admin: `http://localhost:3000/admin`

**Adicionando um novo jogo:** 

- O usuário deve clicar no botão **Adicionar jogo** para ser direcionado à tela de cadastro de jogo.
- O usuário deve preencher os campos *Nome do jogo* para o nome do jogo, *Descrição* para a descrição do jogo, *Url da imagem* para a url onde está hospedada uma imagem do jogo, *Url do jogo* para a url de acesso ao jogo, *Categoria* para selecionar a categoria do jogo.
- O usuário deve clicar no botão **Salvar** ao fim do formulário para salvar o jogo na Base de Dados e ser redirecionado à tela de Lista de Jogos.

**Editando um jogo existente:**

- O usuário deve clicar no botão **editar** do jogo à ser editado e será direcionado à tela de edição de jogo.
- O usuário deve alterar os campos desejados para atualizar as informações neles contidas.
- O usuário deve clicar no botão **salvar alterações** para salvar as alterações na Base de Dados e ser redirecionado à tela de Lista de Jogos.
- O usuário deve cliar no botão **Atualizar Lista** para ver a lista atualizada com os novos valores.

**Deletando um jogo existente:**

- O usuário deve clicar no botão **deletar** do jogo à ser deletado. A lista atualizará automaticamente.

**Buscando um jogo da lista:**

- O usuário deve digitar na barra de busca algum atributo referente ao jogo desejado (nome, descrição, url da imagem, url do jogo ou categoria). A lista atualizará automaticamente renderizando os resultados encontrados.

**Acessando a seção de categorias:**

- O usuário deve clicar no link de **categorias** presente na barra de navegação da página. Ele será redirecionado à Lista de Categorias.

**Adicionando uma nova categoria:**

- O usuário deve clicar no botão **Adicionar categoria** para ser direcionado à tela de cadastro de categoria.
- O usuário deve preencher o campo *Nome da Categoria* para o nome da categoria.
- O usuário deve clicar no botão **Salvar** ao fim do fomrulário para salvar a categoria na Base de Dados e ser redirecionado à tela de Lista de Categorias.

**Editando uma categoria existente:**

- O usuário deve clicar no botão **editar** da categoria à ser editado e será direcionado à tela de edição de categoria.
- O usuário deve alterar o campo *Nome da Categoria* com as novas informações a serem salvas.
- O usuário deve clicar no botão **salvar alterações** para salvar as alterações na Base de Dados e ser redirecionado à tela de Lista de Categorias.
- Caso a lista não esteja atualizada, o usuário deve clicar no botão *Atualizar Lista* para recarregar a Lista de Categorias.

**Deletando uma categoria existente:**

- O usuário deve clicar no botão **deletar** da categoria à ser deletada. A lista atualizará automaticamente.

### Seção Usuário

Rota para seção Usuário: `http://localhost:3000/`

**Tornando-se membro:**

- O usuário deve clicar no botão *Login* presente na barra de navegação da página. Ele será redirecionado para página de Autenticação.
- O usuário deve se cadastrar usando e-mail e senha ou seus dados gmail (caso possua), logo, ele será redirecionado para Tela de Bem-vindo, onde deverá clicar no botão *Ir ao CommWeb App!*.
- O usuário será direcionado para a tela de Finalização de Cadastro.
- O usuário deverá preencher todos os campos da página (nome de usuário, nome completo, data de nascimento, estado, país) e clicar em "Salvar" para ter seu cadastro salvo na Base de Dados. Ele será redirecionado para tela Home da aplicação.

**Logando no sistema:**
- O usuário deve clicar no botão *Login* presente na barra de navegação da página. Ele será redirecionado para página de Autenticação.
- O usuário deve preencher os campos com seus dados cadastrados, ele será redirecionado para Tela de Bem-vindo, onde deverá clicar no botão *Ir ao Commweb App!*.
- O usuário será redirecionado para a tela Home da aplicação.

**Acessando informações de um jogo:**

- Na tela Home da aplicação, o usuário tem acesso à lista de jogos cadastrados na Base de Dados do Sistema.
- O usuário (cadastrado ou não) deve clicar no botão *Acessar jogo* para ter acesso às informações do jogo. Ele será direcionado na tela de Detalhes do Jogo.
- A tela Detalhes do Jogo contem uma lista de comentários sobre o jogo feita por outros usuários _(à implementar)_.

**Adicionando uma avaliação com comentário:**

_CONDIÇÃO DE ACESSO A FUNCIONALIDADE: O usuário deve ser um membro cadastrado e deve estar logado no sistema._

- O usuário cadastrado e logado no sistema, ao entrar na tela de Detalhes do Jogo, poderá adicionar sua nota e comentário nos campos *Deixe sua nota!* e *Deixe seu comentário* ao fim da página.
- O usuário clicar no botão *Avaliar!* para salvar sua nota e comentário na Base de Dados do sistema _(à implementar)_.
- O usuário terá acesso as avaliações com comentários no componente de Comentários ao lado direito da tela de Detalhes do Jogo _(à implementar)_.

**Receber recomendação:**

- O usuário cadastrado e logado no sistema, poderá ver a lista de cinco jogos recomendados no componente à direita na tela Home da aplicação.

**Buscar jogo:**

- _à ser implementado_

## 6. Integrantes do grupo

Alexandre Ricci Preuss - 19508387 <br>
Guilherme G Chaves - 20014481<br>
Leonidas L N Oliveira - 20009240<br>
William Vilas Boas Gomes - 20004346<br>
Willian Leite Barcelos - 1950926-1<br>

# Pokedex Angular

## Descrição

O projeto `pokedex-angular` é uma aplicação Pokedex criada utilizando Angular 11. A aplicação permite que os usuários pesquisem e visualizem informações sobre diferentes espécies de Pokémon.

## Funcionalidades

- Pesquisa de Pokémon por nome.
- Visualização de detalhes de cada Pokémon, incluindo imagem, tipo e estatísticas.
- Navegação entre diferentes páginas de Pokémon.

## Tecnologias Utilizadas

- Angular 11
- TypeScript
- RxJS
- SCSS

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
pokedex-angular/
├── e2e/                      # Testes end-to-end
├── src/                      # Código fonte da aplicação
│   ├── app/                  # Componentes e módulos principais
│   │   ├── pages/            # Páginas da aplicação
│   │   ├── service/          # Serviços da aplicação
│   │   ├── shared/           # Componentes e módulos compartilhados
│   ├── assets/               # Recursos estáticos (imagens, ícones, etc.)
│   ├── config-scss/          # Arquivos de configuração SCSS
│   ├── environments/         # Configurações de ambiente
│   ├── index.html            # Arquivo HTML principal
│   ├── main.ts               # Arquivo principal do Angular
│   ├── polyfills.ts          # Polyfills para compatibilidade com navegadores
│   ├── styles.scss           # Arquivo de estilos global
│   ├── test.ts               # Configuração de testes
├── angular.json              # Configurações do Angular CLI
├── package.json              # Dependências e scripts do projeto
├── tsconfig.json             # Configurações do TypeScript
└── README.md                 # Documentação do projeto
```

## Pré-requisitos

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/danilosantos-git/pokedex-angular.git
   cd pokedex-angular
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute:

```bash
ng serve
```

Abra o navegador e acesse `http://localhost:4200/`.

## Scripts Disponíveis

- `ng`: Comando do Angular CLI para executar várias tarefas.
- `start`: Inicia a aplicação em modo de desenvolvimento.
- `build`: Compila a aplicação para produção.
- `test`: Executa os testes unitários com Jasmine.
- `lint`: Executa o linter do TypeScript.
- `e2e`: Executa os testes end-to-end com Protractor.

## Estrutura de Diretórios

### `src/app`

Contém os componentes e módulos principais da aplicação.

- `pages`: Contém as diferentes páginas da aplicação.
- `service`: Contém os serviços da aplicação.
- `shared`: Contém componentes e módulos compartilhados.

### `src/assets`

Contém os recursos estáticos da aplicação, como imagens e ícones.

### `src/config-scss`

Contém os arquivos de configuração SCSS para estilização da aplicação.

### `src/environments`

Contém os arquivos de configuração de ambiente.

## Testes

### Testes Unitários

Para executar os testes unitários, utilize:

```bash
ng test
```

### Testes End-to-End

Para executar os testes end-to-end, utilize:

```bash
ng e2e
```

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir issues e pull requests. Toda contribuição é bem-vinda!

## Autor

Este projeto foi iniciado por Danilo Santos.

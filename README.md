# BStackDemo - Automação com Cypress

## 📋 Objetivo

Este projeto demonstra como automatizar testes de uma aplicação web utilizando **Cypress** e **JavaScript**. O foco é criar testes para funcionalidades críticas como autenticação e gerenciamento de carrinho de compras.

## 🏗️ Estrutura do Projeto

```
cypress/
├── e2e/                          # Testes end-to-end
│   ├── login.cy.js               # Testes de autenticação
│   └── carrinho.cy.js            # Testes de carrinho de compras
├── fixtures/                     # Dados mockados para testes
│   └── example.json              # Exemplo de fixture
└── support/                      # Configuração e comandos globais
    ├── commands.js               # Comandos customizados
    └── e2e.js                    # Carregamento de suporte
├── cypress.config.js             # Configuração do Cypress
└── package.json                  # Dependências do projeto
```

## 🚀 Como Começar

### Pré-requisitos
- Node.js instalado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/neilannyamorim/bstackdemo.git
cd bstackdemo
```

2. Instale as dependências:
```bash
npm install
```

### Executar os Testes

```bash
npx cypress open
```

Isso abrirá o Cypress Test Runner onde você pode visualizar e executar os testes interativamente.

## 🧪 Testes Implementados

### 1. **Login** ([cypress/e2e/login.cy.js](cypress/e2e/login.cy.js))

Testa a funcionalidade de autenticação com credenciais válidas:

- **Objetivo**: Validar que um usuário consegue fazer login com dados válidos
- **Usuário**: `demouser`
- **Senha**: `testingisfun99`
- **Validação**: Verifica se o botão "Logout" fica visível após o login bem-sucedido

### 2. **Carrinho** ([cypress/e2e/carrinho.cy.js](cypress/e2e/carrinho.cy.js))

Testa a funcionalidade de adicionar produtos ao carrinho:

- **Objetivo**: Validar que produtos podem ser adicionados ao carrinho
- **Produtos testados**: iPhone 12 e Galaxy S20
- **Funcionalidades**: 
  - Adiciona múltiplos produtos
  - Incrementa a quantidade usando o botão (+)
  - Valida mensagem de sucesso "Added to card"

```

## ⚙️ Configuração

A configuração do projeto está em [cypress.config.js](cypress.config.js):

- **Base URL**: `https://bstackdemo.com/`
- **Tipo do Projeto**: commonjs
- **Versão Cypress**: ^15.9.0

## 📦 Dependências

As dependências estão listadas em [package.json](package.json):

- **cypress**: ^15.9.0 (Framework de automação)

## 📚 Referências

- [Documentação oficial do Cypress](https://docs.cypress.io)
- [BStackDemo - Aplicação de Teste](https://bstackdemo.com/)

---

**Autor**: Neilanny Amorim  
**Repositório**: [github.com/neilannyamorim/bstackdemo](https://github.com/neilannyamorim/bstackdemo)


# 🛍️ Saucedemo E2E Test Automation

[![Playwright](https://img.shields.io/badge/Playwright-2E3440?style=for-the-badge&logo=playwright&logoColor=#2EAD33)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)

## 📋 Sobre o Projeto

Este é um projeto de automação de testes end-to-end (E2E) para o site [SauceDemo](https://www.saucedemo.com/), desenvolvido como parte de um teste técnico. A automação foi implementada utilizando Playwright, uma ferramenta moderna de automação de testes que oferece suporte a múltiplos navegadores.

## ✨ Funcionalidades

- Autenticação de usuário
- Navegação entre produtos
- Adição de itens ao carrinho
- Finalização de compra
- Validação de fluxos de compra
- Geração de relatórios de teste

## 🚀 Tecnologias Utilizadas

- **Playwright** - Framework de automação de testes
- **TypeScript** - Adiciona tipagem estática ao JavaScript
- **Faker.js** - Geração de dados de teste realísticos
- **Dotenv** - Gerenciamento de variáveis de ambiente
- **Yarn** - Gerenciador de pacotes

## 📦 Pré-requisitos

- Node.js (versão 16 ou superior)
- Yarn (recomendado) ou npm
- Navegadores: Chromium, Firefox e/ou WebKit

## 🛠️ Instalação

1. Clone o repositório:
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   cd Saucedemo
   ```

2. Instale as dependências:
   ```bash
   yarn install
   # ou
   npm install
   ```

3. Configure as variáveis de ambiente (se necessário):
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```
   USERNAME=standard_user
   PASSWORD=secret_sauce
   ```

## 🧪 Executando os Testes

Para executar todos os testes em modo headless:
```bash
yarn test
# ou
npm test
```

Para executar em modo headed (com navegador visível):
```bash
yarn test:headed
```

Para executar testes específicos:
```bash
npx playwright test tests/e2e/nome_do_arquivo.spec.ts
```

## 📊 Relatórios

Após a execução dos testes, você pode visualizar os relatórios gerados em:
- Relatório HTML: `playwright-report/index.html`
- Screenshots: `test-results/`
- Vídeos: `test-results/`

## 🏗️ Estrutura do Projeto

```
Saucedemo/
├── .github/           # Configurações do GitHub
├── tests/
│   ├── e2e/           # Testes end-to-end
│   ├── pages/         # Page Objects
│   └── support/       # Utilitários e configurações
├── .env               # Variáveis de ambiente
├── package.json       # Dependências e scripts
└── playwright.config.js # Configuração do Playwright
```

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✉️ Contato

Seu Nome - [@seu_usuario](https://github.com/seu_usuario) - seu.email@exemplo.com

[⬆ Voltar ao topo](#-saucedemo-e2e-test-automation)

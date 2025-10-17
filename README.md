# 🛍️ POC- Saucedemo E2E Test Automation

[![Playwright](https://img.shields.io/badge/Playwright-2E3440?style=for-the-badge&logo=playwright&logoColor=#2EAD33)](https://playwright.dev/)
[![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
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
- **Javascript** - Linguagem Desenvolvida
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
npx playwright test --headed
```


Para executar testes específicos:
```bash
npx playwright test tests/e2e/nome_do_arquivo.spec.ts
```

## 🔄 Pipeline CI/CD

✅ Integração com **GitHub Actions**  
✅ Execução automática a cada push e pull 

## 📊 Relatórios e Evidências

Após a execução dos testes, você pode visualizar os relatórios gerados em:
- Relatório HTML: `playwright-report/index.html`
- Screenshots: `test-results/`
- Vídeos: `test-results/`
- Tesults: `https://www.tesults.com/results/rsp/view/results/run/258b8563-c54e-40f2-83df-b700e7ba6188-1760647159587-1760650012558`
- Evidências -`/evidencias` Com videos e Screenshots
  
🔗 Acesse o Tesults
https://www.tesults.com/results/rsp/view/results/run/258b8563-c54e-40f2-83df-b700e7ba6188-1760647159587-1760650012558


## 🏗️ Estrutura do Projeto

```
Saucedemo/
├── .github/                  # Configurações do GitHub, workflows de CI
├── tests/
│   ├── e2e/                  # Testes end-to-end
│   ├── pages/                # Page Objects
│   └── support/              # Utilitários e configurações
├── evidencias/                 # Pasta de evidências (vídeos, screenshots etc.)
│   └── videos/
├── .env                      # Variáveis de ambiente
├── package.json              # Dependências e scripts
├── playwright.config.js      # Configuração do Playwright
└── test-results/              # Resultados de execuções (screenshots, vídeos etc.)

```


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✉️ Contato

Seu Nome - [@seu_usuario](https://github.com/ltsantiago) - Seu emai: ltsantiago88@gmail.com

[⬆ Voltar ao topo](#-saucedemo-e2e-test-automation)

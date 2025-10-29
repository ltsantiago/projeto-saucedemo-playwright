# 🛍️ POC- Saucedemo E2E Test Automation

<img width="1536" height="1000" alt="Image" src="https://github.com/user-attachments/assets/e67711c4-d81a-4cc3-9fb9-26ca83e8b62c" />

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

## 📊 Roadmap de Automação

<img width="1300" height="500" alt="Image" src="https://github.com/user-attachments/assets/476d1bac-0e07-454b-ad27-b4de491b22b6" />

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

Para executar todos os testes em modo de interface do usuário (UI):
```bash
npx playwright test --ui
```

Para executar testes específicos:
```bash
npx playwright test tests/e2e/nome_do_arquivo.spec.ts
```

Para executar com Arquivo start.sh

```bash

Vc vai na pasta em que vc baixou esse meu projeto. E roda:

1- chmod +x start.sh - Linux 

2- Se tiver Windows e tiver o Git Bash instalado só rodar:

./start.sh

```

## 🔄 Pipeline CI/CD

✅ Integração com **GitHub Actions**  
✅ Execução automática a cada push e pull 

✅ Integração com Pipeline CI/CD **GitHub Actions**

<img width="1500" height="400" alt="Image" src="https://github.com/user-attachments/assets/10204738-e0c3-4495-8651-13fc698753ed" />

## 📊 Relatórios e Evidências

Após a execução dos testes, você pode visualizar os relatórios gerados em:
- Relatório HTML: `playwright-report/index.html`
- Screenshots: `test-results/`
- Vídeos: `test-results/`
- Evidências -`/evidencias` com videos e screenshots
- Integração com Tesults - `https://www.tesults.com/results/rsp/view/results/target/258b8563-c54e-40f2-83df-b700e7ba6188-1760647159587`(Precisar realizar login ou criar uma conta)
  
🔗 Modo de interface do usuário (UI)

https://github.com/user-attachments/assets/216d30a4-b41d-4672-8b7c-f82b1eaa4c90

🔗 Integração com Tesults

<img width="1300" height="400" alt="Image" src="https://github.com/user-attachments/assets/0f1a8780-2d44-4e42-94b6-ab3a02ee0c38" />


## 🏗️ Estrutura do Projeto

```
Saucedemo/
├── .github/                  # Configurações do GitHub, workflows de CI
├── tests/
│   ├── e2e/                  # Testes end-to-end
│   ├── pages/                # Page Objects
│   └── support/              # Utilitários e configurações
├── evidencias/                 # Pasta de evidências (vídeos, screenshots etc.)
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

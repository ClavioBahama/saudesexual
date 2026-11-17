# Saúde Sexual

Projeto web de educação em saúde sexual (Lovable/React).

**Stack:** React · Vite · TypeScript · Tailwind CSS · Lovable

**Documentação:**
- [Issue de organização](https://github.com/ClavioBahama/saudesexual/issues/1) — revisão e sugestões
- Projeto no Lovable: https://lovable.dev/projects/f3fa1496-abf7-422f-a8f5-758eb5fd68de

---

## 0. Pré-requisitos

Node.js 18+ e npm.
Opcional: Bun (há `bun.lockb`/`bun.lock` no repositório).

## 1. Instalação e Execução

```powershell
npm install   # instalar dependências
npm run dev   # servidor de desenvolvimento (Vite)
npm run build   # build de produção
npm run preview   # pré-visualizar o build
npm run lint   # verificar lint
```

## 2. Estrutura do Projeto

```text
saudesexual/
├── src/              # páginas e componentes
├── public/           # assets
├── index.html
├── vite.config.ts
└── README.md
```

## 3. Funcionalidades

- Landing/curso sobre performance masculina (título: "Transforme Sua Performance Masculina").
- Interface React com Tailwind CSS.
- Projeto editável pelo Lovable.

## 4. Arquivos e pontos de entrada

- `src/` — componentes e páginas.
- `index.html` — HTML base do Vite.

## 5. Segurança

Variáveis com prefixo `VITE_` são expostas no navegador — nunca coloque segredos nelas.
Verifique os arquivos `.env` antes de publicar.

## 6. Problemas Comuns

Porta 5173 ocupada: encerre o processo ou altere a porta no `vite.config`.
Falha ao instalar: apague `node_modules` e o lockfile e rode `npm install` novamente.

## 7. Observações (organização)

> Revisão realizada em 17/11/2026 durante a padronização dos repositórios, inspirada no README do FreelaMZ.
- README é o template padrão do Lovable.
- Sugestão: substituir o README pelo conteúdo real do projeto (público-alvo, funcionalidades, deploy).

## 8. Licença

Projeto pessoal/acadêmico. Verifique a licença de templates ou bibliotecas de terceiros antes de uso comercial.

---

## Anexo: README original

> Conteúdo original preservado. As seções acima foram adicionadas na revisão de organização.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/f3fa1496-abf7-422f-a8f5-758eb5fd68de

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/f3fa1496-abf7-422f-a8f5-758eb5fd68de) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/f3fa1496-abf7-422f-a8f5-758eb5fd68de) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)


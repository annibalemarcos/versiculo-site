# Guia 1 — compilar no PC e enviar somente o site pronto

## Pré-requisitos

- Instale o Node.js 22 LTS.
- Extraia esta pasta em um local simples, como `C:\\Projetos\\larzus-apps`.

## Compilar

Abra o PowerShell dentro da pasta do projeto e rode:

```powershell
corepack enable
pnpm install
pnpm build
```

O site pronto será criado na pasta `out`. Para testar antes de enviar:

```powershell
npx serve out
```

Abra o endereço exibido no terminal. Para encerrar, pressione `Ctrl+C`.

## Enviar apenas os arquivos prontos

Copie **o conteúdo de `out`**, não a pasta `out` inteira, para a raiz do repositório que hospedará o site. Se for usar um domínio próprio, inclua um arquivo `CNAME` contendo somente:

```text
larzusapps.com
```

No GitHub, vá a **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch que contém os arquivos e a pasta `/(root)`.

> Se o site estiver em `usuario.github.io/nome-do-repositorio`, compile com `$env:NEXT_PUBLIC_BASE_PATH="/nome-do-repositorio"; pnpm build`. Para domínio próprio ou repositório `usuario.github.io`, use o comando normal.

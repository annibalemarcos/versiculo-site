# Guia 2 — GitHub Pages com publicação automática

Este projeto já inclui o fluxo `.github/workflows/deploy-pages.yml`. Cada envio para a branch `main` compila e publica o site.

## Primeira publicação

No PowerShell, dentro da pasta:

```powershell
git init
git add .
git commit -m "Site institucional Larzus Apps"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Troque `SEU-USUARIO` e `SEU-REPOSITORIO` pelos valores reais.

Depois, no repositório:

1. Abra **Settings → Pages**.
2. Em **Build and deployment → Source**, selecione **GitHub Actions**.
3. Abra a aba **Actions** e acompanhe “Publicar no GitHub Pages”.
4. Quando concluir, o endereço aparecerá no resumo da execução.

O fluxo detecta automaticamente se o site ficará na raiz (`usuario.github.io`) ou em uma subpasta (`usuario.github.io/repositorio`).

## Atualizações futuras

```powershell
git add .
git commit -m "Atualiza o site"
git push
```

## Domínio larzusapps.com

Em **Settings → Pages → Custom domain**, informe `larzusapps.com`. Ajuste o DNS conforme as instruções mostradas pelo próprio GitHub e marque **Enforce HTTPS** depois que o certificado estiver disponível.

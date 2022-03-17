Cria app no heroku
```bash
`heroku create <nome-do-deploy>`
````

Visualiza remotes do git

```bash
git remote -v
```
Visualiza ambiente do app

> heroku 20 = ubuntu 20.04

```bash
heroku stack
```

Coloca pra rodar em um container
```bash
heroku stack:set container
```

Realiza o deploy no heroku
```bash
git add .
git commit -m 'Deploy pro heroku'
git push heroku master
```

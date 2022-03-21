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
heroku stack -a nome-da-sua-aplicação # Caso tenha mais de 1 aplicativo
```

Coloca pra rodar em um container
```bash
heroku stack:set container
heroku stack:set container -a nome-da-sua-aplicação # Caso tenha mais de 1 aplicativo
```

Realiza o deploy no heroku
```bash
git add .
git commit -m 'Deploy pro heroku'
git push heroku master

git push heroku sua-branch:master #Caso vá commitar de uma branch diferente da master
```

## XL Converter Documentation

The knowledge base for [XL Converter](https://github.com/JacobDev1/xl-converter) - a powerful image converter I wrote.

Hosted [here](https://xl-converter-docs.codepoems.eu).

![](./screenshots/desktop.webp)

Please, [donate](https://codepoems.eu/donate) to keep the project alive.

## Running

Install [nvm](https://github.com/nvm-sh/nvm)

Use latest NodeJS LTS

```bash
nvm install --lts
```

```bash
npm i
make run
```

## Generating Search Index

The search index should be re-generated before deployment.

First, run the project

```bash
npm i
make run
```

Open another terminal

```bash
sudo apt install python3 python3-pip python3-venv firefox
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Finally, generate the search index.

```bash
make index
```

## Deploying

```
make build
```

### Apache

Create a file named `.htaccess` with the following inside.

```
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

Then put it next to `index.html`.
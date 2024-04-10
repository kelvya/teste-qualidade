# Como montei o projeto de estudos:

- Criei o arquivo ```package.json``` usando o parâmetro ```-y```, (aceitando todas as configurações padrão sem a necessidade de fornecer entrada interativa), com o comando:
    - ```npm init -y```
- Instalei como dependência do projeto (apenas durante o desenvolvimento) o eslint, com o comando:
    - ```npm install --save-dev eslint```
- Iniciei o eslint com o comando:
    - ```npx eslint --init```
    - Selecionando as opções: 
        - ```To check syntax, find problems, and enforce code style```
        - ```JavaScript modules (import/export)```
        -  ```None of these```
        -  ```No```
        -  ```Node```
        -  ```Use a popular style guide```
        -  ```Airbnb: https://github.com/airbnb/javascript```
        -  ```JSON```
        -  ```Yes```
        -  ```npm```
- Fiz um teste com um arquivo simples index.js e rodei o comando "npx eslint .\index.js" para o eslint me mostrar os erros.
- Instalei o Jest usando o comando ```npm install --save-dev jest```
    - No Package.json alterei o script padrão de teste ```"echo \"Error: no test specified\" && exit 1"``` para ```"jest"``` para chamar o jest ao rodar o comando ```npm run test``` no terminal.
- Adicionei a opção ```"type": "module"``` também abaixo das dependências que estão no package.json para poder utilizar os módulos do ES6.
- instalei o jsdoc como dependência do projeto (apenas durante o desenvolvimento) usando o comando:
    - ```npm install jsdoc --save-dev```
    - Acrescentei um script para gerar a documentação no projeto: no package.json adicionei uma vírgula e abaixo do script de test adicionei a opção: ```"doc":  "jsdoc -r src -d docs"``` (jsdoc vai chamar o jsdoc, -r vai fazer de forma recursiva, src é a pasta onde vai buscar os arquivos, -d é o parâmetro para especificar que a documentação será salva em um diretório específico, docs foi o nome do diretório especificado").
    - ao rodar o comando ```npm run doc``` no terminal, o diretório docs é criado automaticamente e as documentações são inseridas nesse diretório. Mas pra dar certo tive que criar a pasta src e criar um arquivo js dentro dessa pasta, no caso criei o arquivo chamado "matematica.js" com os comentários no arquivo.
- Instalei o reporter do Qase para Jest com o comando:
    - ```npm install jest-qase-reporter --save-dev```
- Instalei o pacote dotenv para carregar as variáveis de ambiente do arquivo .env com o comando:
    - ```npm install dotenv```
- Criei o arquivo .env na raiz do projeto e adicionei as variáveis de ambiente, também foi criado o arquivo de configurações do jest chamado jest.config.js na raiz do projeto para carregar as variáveis de ambiente do arquivo .env.
- No portifólio do github foi necessário criar a secret QASE_API_TOKEN para que o reporter do Qase funcione corretamente.
- Foi criado o arquivo qase-workflow.js na raiz do projeto para fazer a integração do Jest com o Qase.

## Comandos úteis:

- ```"npm run doc"``` Para gerar a documentação do projeto.
- ```"npm run test"``` Para rodar os testes do projeto (ao rodar o comando o reporter do Qase é chamado e os resultados dos testes são enviados para o Qase.
- ```"npm run test -- --coverage"``` Para rodar os testes do projeto e mostrar o relatório com a cobertura dos testes.
- ```"npm run test -- --watchAll"``` Para rodar os testes do projeto em modo watch, ou seja, ele fica observando as alterações nos arquivos e roda os testes automaticamente.
    
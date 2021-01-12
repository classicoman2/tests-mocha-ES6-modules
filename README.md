# Tests Unitaris a Front Web

Tests unitaris amb Mocha.js.

L'entorn de desenvolupament en aquest cas és una aplicació web. 

Per poder executar els nostres tests, convé canviar l'extensió dels mòduls a `.mjs` i afegir el descriptor de primer nivell `"type": "module"` al package.json més proper.

## Webgrafia

- [Unit Testing in JavaScript with Mocha, Tania Rascia, 03-27-2018](https://www.taniarascia.com/unit-testing-in-javascript)
- [Mocha Docs](https://mochajs.org/)

- https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
- https://stackoverflow.com/questions/45854169/how-can-i-use-an-es6-import-in-node-js

## Tests  amb Mocha

Instal·la `Mocha` com a dependència de desenvolupament,

```
npm install --save-dev mocha
```

Crea un directori anomenat `test` en el directori principal i introdueix a dins els fitxers amb els seus test.

En el fitxer `package.json`, afegeix:

```
"scripts": {
  "test": "mocha test"
}
```
> En cas de no tenir fitxer `package.json`, crea'l amb `npm init`.

Per executar els test, 

```
npm test
```

## Funcions a testar

A diferència de les proves amb node, en aquest cas podem exportar les variables i funcions del mòdul en format ES6, o sigui, escrivint `export` davant la declaració de la variable o de la funció corresponent. 
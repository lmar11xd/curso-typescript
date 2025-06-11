https://www.youtube.com/watch?v=sBgcHD1JsL4

# Instalar Typescript
`npm i -g typescript`

Verificar si lo tenemos instalado: `tsc --version`

# Comando para Compilar
`tsc main.ts`  
Observar Cambios: `tsc main.ts -w`

# Inicializar un Proyecto
`tsc --init`, una vez creado el archivo de configuraciones tsconfig.json ya no es necesario indicar el archivo para iniciar el proyecto: `tsc -w`

# Configurar Proyecto
Abrir el archivo tsconfig.json -> "compilerOptions"
```
"rootDir": "./src"
"outDir": "./public"
```
Esto hará que nuestro proyecto inicie con el archivo .ts en ./src y se compile en ./public  

Luego para que solo se compile lo que tenemos en src
```
"compilerOptions": ...,
"include": ["src"]
```

# Modulos
Para trabajar con modulos en TypeScript
Abrir el archivo tsconfig.json
```
"module": "esnext" Utilizamos la ultima version disponible
```
Luego modificar public/index.html: reemplazar
`<script defer src="./main.js"></script>`
por
`<script type="module" src="./main.js"></script>`

# Webpack
Para empaquetar todos los ficheros generados en uno solo

```
npm init
npm i webpack webpack-cli ts-loader typescript -D
```
Agregar fichero webpack.config.js, luego quitar los .js en los imports

```
npm i webpack-dev-server -D
```

Modificar package.json -> "scripts"
```
"serve": "webpack-dev-server",
"build": "webpack"
```

# Test
Instalar las siguientes dependencias:
```
npm i jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest -D
```
Modificar package.json
```
"scripts": {
  ...,
  "test": "jest"
},
"jest": {
  "transform": {
    "^.+\\.[t|j]sx?$": "babel-jest"
  }
}
```

Agregar archivo babel.config.js
```
module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    "@babel/preset-typescript",
  ],
};
```

# Resumen
````
npm install -g typescript

tsc --init

tsconfig.json:
  "module": "ESNext",
  "rootDir": "./src",
  "outDir": "./public",
  "include": ["src"]

npm init
npm i webpack webpack-cli ts-loader typescript webpack-dev-server -D
webpack.config.js
package.json

npm i jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript @types/jest -D
babel.config.js
package.json
```
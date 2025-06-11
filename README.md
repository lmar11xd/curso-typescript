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
"module": "esnext" // Utilizamos la ultima version disponible
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
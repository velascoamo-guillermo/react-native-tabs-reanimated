# Instrucciones para Publicar en NPM

## Pre-requisitos

1. Tener una cuenta en [NPM](https://www.npmjs.com/)
2. Estar logueado en NPM desde la terminal: `npm login`
3. Verificar que estés logueado: `npm whoami`

## Pasos para Publicar

### 1. Verificar que todo esté correcto

```bash
# Ejecutar el build
npm run build

# Verificar que se generó la carpeta lib con todos los archivos
ls -la lib/

# Hacer un dry-run para verificar
npm publish --dry-run
```

### 2. Publicar la versión

```bash
# Publicar por primera vez
npm publish

# O si ya existe, actualizar la versión primero
npm version patch  # para 1.0.1
npm version minor  # para 1.1.0
npm version major  # para 2.0.0
npm publish
```

### 3. Verificar la publicación

- Ve a https://www.npmjs.com/package/react-native-tabs-reanimated
- Verifica que todos los archivos estén presentes
- Prueba la instalación en un proyecto nuevo

## Comandos útiles

### Para actualizar información del paquete

```bash
# Arreglar warnings del package.json
npm pkg fix

# Actualizar solo la descripción o keywords sin publicar
npm pkg set description="Nueva descripción"
npm pkg set keywords='["react-native","tabs","animation"]'
```

### Para gestionar versiones

```bash
# Ver la versión actual
npm version

# Crear un tag de git automáticamente al versionar
npm version patch --git-tag-version

# Ver todas las versiones publicadas
npm view react-native-tabs-reanimated versions --json
```

## Estructura final del paquete

```
react-native-tabs-reanimated/
├── lib/                    # Archivos compilados (se publican)
│   ├── components/
│   ├── interfaces/
│   └── index.js/d.ts
├── package.json           # Configuración del paquete
├── README.md             # Documentación
└── .npmignore           # Archivos a excluir de NPM
```

## Notas importantes

- El campo `"private": false` debe estar en package.json (o eliminar la línea `"private": true`)
- Los archivos de `src/` no se publican, solo `lib/`
- El script `prepublishOnly` ejecuta el build automáticamente antes de publicar
- Las peer dependencies deben instalarse por separado por los usuarios

## Actualización de la librería

Para actualizaciones futuras:

1. Hacer cambios en `src/`
2. Actualizar versión: `npm version patch/minor/major`
3. Ejecutar: `npm publish`
4. El build se ejecuta automáticamente gracias al script `prepublishOnly`

¡Tu librería está lista para ser usada por la comunidad de React Native! 🚀

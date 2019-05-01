# react-practice

## Initial Commands

```
git init
yarn init -y
tsc --init
eslint --init
```

## Install Libraries

```
# express
yarn add express
yarn add -D @types/express

# react
yarn add react react-dom 
yarn add -D @types/react @types/react-dom

# eslint / prettier
yarn add -D eslint
yarn add -D eslint-plugin-react
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier

# webpack
yarn add -D webpack webpack-cli webpack-dev-middleware webpack-hot-middleware html-webpack-plugin @types/webpack @types/webpack-dev-middleware @types/webpack-env @types/webpack-hot-middleware @types/html-webpack-plugin

# typescript
yarn add -D typescript ts-node @types/node
yarn add -D ts-loader source-map-loader

# testing
# TODO: jest
yarn add -D mocha @types/mocha power-assert espower-typescript ts-node-test-register

# precommit hook
yarn add -D husky lint-staged

# hot reload
yarn add -D nodemon
```

# Development Commands

## Run Server

### local

http://localhost:3000

```
# use webpack-hot-middleware
yarn start

# use noodemon
yarn dev
```

### docker-compose

http://localhost:3001

```
# use docker-compose
docker-compose up
```

# License
MIT
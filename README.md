# Frontend Vue Starter Kit
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Запуск проекта в режиме development

### Перед стартом сервера:
Именно `ci` - это не опечатка. <br>
Пакеты будут браться из `package-lock.json`

```bash
npm ci
```

- #### Создать файл `.env.development.local`.
- #### В файле указать строки:
```
VITE_API_URL=/api
VITE_DOMAIN_LOCAL=<Имя локального домена>
```

- #### Запустить сервер:

```bash
npm run dev
```
- Выбрать адрес в терминале `Network`.

## Сборка проекта в режиме production

- #### Создать файл `.env.production.local`.
- #### В файле указать строки:
```
VITE_API_URL=/api
VITE_DOMAIN_LOCAL=/
VITE_IS_ANALYTIC_COUNTER_ENABLED=true
```

## Просмотр проектной документации (frontend)
```
npm run docs:dev
```

## Генерация коммита с помощью конструктора коммитов
Для использования конструктора необходимо установить утилиту [commitizen](https://github.com/commitizen/cz-cli) **глобально**:
```
npm i -g commitizen 
```
Активируем хуки:
```
npx husky install
```
```
git config core.hooksPath // возвращает .husky 
```
Далее, перед push изменений вместо команды `git commit -m 'some message'` запускаем в консоли конструктор:
```
npx cz
```
См. также: [Соглашение о коммитах](https://www.conventionalcommits.org/ru/v1.0.0/)

## Полезные ссылки

### FSD Architecture

- [Архитектура FSD Frontend](https://feature-sliced.design/ru/docs/get-started/overview)

### Vite

- [Документация Vite](https://vitejs.dev/)

### Vue

- [Документация Vue](https://vuejs.org/)

### Vue Router

- [Документация Vue Router](https://router.vuejs.org/)

### Pinia

- [Документация Pinia](https://vuejs.org/guide/scaling-up/state-management.html#pinia)

### TypeScript

- [Документация TypeScript](https://www.typescriptlang.org/)

- [Vue 3 + TypeScript](https://vuejs.org/guide/typescript/overview.html#using-vue-with-typescript)

### ESlint

- [Документация ESlint](https://eslint.org/docs/latest/)

### ElementPlus

- [Документация ElementPlus](https://element-plus.org/en-US/)

### Библиотека компонентов Prizm (Figma)

- [Библиотека компонентов Prizm](https://www.figma.com/file/ooK8cH394yHfqX3f2M5l3l/%F0%9F%92%8E-%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%BE%D0%B2?node-id=3840%3A171991&mode=dev)
- [PrizmVue](https://www.figma.com/file/AIsYvRkPTWg6shNDYCwwa6/Prizm-Vue.js?type=whiteboard&node-id=0-1&t=iK4aO42K2AA5c1gy-0)

### Prettier

- [Документация Prettier](https://prettier.io/docs/en/editors.html)

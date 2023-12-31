# My Shop API

## Prerequisites

- Docker and Docker Compose

## Installation

1) First, go into "*docker*" folder and run "*docker-compose up -d --build*" to install the environment
2) Now all your 4 containers should be running (it can take up to 1 minute before container are loaded: if you have the symfony default page on http://localhost/ that mean everything has been loaded correctly and you can pursue). Now you can go inside PHP container and follow the next steps.
3) Inside your PHP container, run "*bin/console doctrine:database:create*" (you should see a success message)
4) Then run "*bin/console doctrine:migrations:migrate*" to update your database
5) To use auth system you also run this "*bin/console lexik:jwt:generate-keypair*"
6) Last thing to do is to run "*bin/console app:add-user*" and follow the process to have your first user on the project.

## Manage Server

Here is the two commands to start and stop your docker environment:

- *docker-compose up -d* -> run docker containers
- *docker-compose down* -> stop docker containers

# MyShop Project

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Load table admin

```sh
delete  "['hydra:member']" in "Admin.vue" and put it back without reloading the page (line 16)
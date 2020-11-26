# pg

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pg.svg)](https://npmjs.org/package/pg)
[![Downloads/week](https://img.shields.io/npm/dw/pg.svg)](https://npmjs.org/package/pg)
[![License](https://img.shields.io/npm/l/pg.svg)](https://github.com/FellRamos/pg/blob/master/package.json)

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g pg
$ pg COMMAND
running command...
$ pg (-v|--version|version)
pg/1.0.0 win32-x64 node-v12.7.0
$ pg --help [COMMAND]
USAGE
  $ pg COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`pg create [FILE]`](#pg-create-file)
- [`pg goodbye`](#pg-goodbye)
- [`pg hello [FILE]`](#pg-hello-file)
- [`pg help [COMMAND]`](#pg-help-command)

## `pg create [FILE]`

```
USAGE
  $ pg create [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/create.ts](https://github.com/FellRamos/pg/blob/v1.0.0/src/commands/create.ts)_

## `pg goodbye`

```
USAGE
  $ pg goodbye
```

_See code: [src/commands/goodbye.ts](https://github.com/FellRamos/pg/blob/v1.0.0/src/commands/goodbye.ts)_

## `pg hello [FILE]`

```
USAGE
  $ pg hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pg hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/FellRamos/pg/blob/v1.0.0/src/commands/hello.ts)_

## `pg help [COMMAND]`

```
USAGE
  $ pg help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_

<!-- commandsstop -->

# Notas minhas:

> Tenho de por o array com as contas num ficheiro separado, para ver como funciona o override da conta quando faco create
> e a conta ja existe. Eu estou a alterar o objeto, mas tenho de confirmar gravando num ficheiro externo (num json para ser
> importado va)

## O que funciona ate agora:

- pg create Facebook
- pg show Facebook
  - pg show Facebook password
  - pg show Facebook password -y
- pg copy Facebook

## proximos passos

- [ ] Tratar do update - podera ser ate utilizada no create (em caso de override)
- [ ] Criar um delete
- [ ] Criar um create alias, update aliases, list aliases, etc.
- [ ] Criar um list accounts!
- [ ] depois ver DBs e assim:
  - Uma ideia discutida: Criar ficheiro localmente, e sempre que houvesse algo novo (create, update, delete), no final fazer
    prompt para fazer sync (aqui seria com uma db online)
  - Opcao tambem para nao fazer sync, mas criar um comando para isso: pg sync

## Mais tarde

- [ ] Criar uma conta na amazon para receber ficheiros de varios users? encryptados mas com username no inicio?
  - tipo John-aks9d71nnd189nas982nd29aj0, Sarah-19d1023h8d192ud912dh9128dh12
- [ ] Criar talvez um processo de login?

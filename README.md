# @idio/koa-session-test

[![npm version](https://badge.fury.io/js/@idio/koa-session-test.svg)](https://npmjs.org/package/@idio/koa-session-test)

`@idio/koa-session-test` is The Test For Koa-Session MaxAge.

```sh
yarn add @idio/koa-session-test
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`koaSessionTest(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@idio/koa-session-test.Config`](#type-_@idio/koa-session-testconfig)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import koaSessionTest from '@idio/koa-session-test'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `koaSessionTest(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@idio/koa-session-testconfig">`_@idio/koa-session-test.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import koaSessionTest from '@idio/koa-session-test'

(async () => {
  const res = await koaSessionTest({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>
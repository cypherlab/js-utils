# `@cypherlab/js-utils`


🔧 JS utilities

<a href="https://www.npmjs.com/package/@cypherlab/js-utils">
  <img alt="npm" src="https://img.shields.io/npm/v/@cypherlab/js-utils">
</a>

## Install
```
npm i @cypherlab/js-utils --save
```


## Usage

### asArray

```js
import { asArray } from '@cypherlab/js-utils'

asArray("foo , bar, foo") // ["foo", "bar"]
asArray("foo / bar", { delim: "/" }) // ["foo", "bar"]
```

Options:

 - delim // default ","
 - uniq // default true

## Test

Include a `.env` file at the root of the package folder containing :
```
APIKEY=YourGoogleMapKey
```

run test at the root of the lerna repo with
```
npm run test
```


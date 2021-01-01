## VSwitch

A `<VSwitch>` component for Vue.js 3.

## Installation

```sh
yarn install @lmiller1990/v-switch

npm install @lmiller1990/v-switch
```

## Usage

`<VSwitch>` is modeled after the `switch` statement we all know and love.

```vue
<template>
  <v-switch :case="size">
    <template #big>
      Big
    </template>

    <template #small>
      Small
    </template>

    <template #default>
      Default
    </template>
  </v-switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VSwitch from '@lmiller1990/v-switch'

export default defineComponent({
  components: {
    VSwitch
  },
  setup() {
    return {
      size: ref('big')
    }
  }
})
</script>
```

It also works with dynamic slots:

```vue
<template>
  <v-switch :case="number">
    <template 
      v-for="num in numbers"
      v-slot:[num]
    >
      Number: {{ num }}
    </template>

    <template #default>
      Default
    </template>
  </v-switch>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import VSwitch from '@lmiller1990/v-switch'

export default defineComponent({
  components: {
    VSwitch
  },

  setup() {
    const number = ref(1)
    const numbers = [1,2,3,4,5]

    return {
      number,
      numbers
    }
  }
})
</script>
```

If you are using the browser build, or you like to register components globally, that works fine, too:

```js
// with a bundler
import { createApp } from 'vue'
const app = createApp(/* ... */)
app.component('v-switch', VSwitch)

// or using the global build
// assumes Vue is available globally - VSwitch is available globally via `VSwitch`
const app = Vue.createApp(/* ... */)
app.component('v-switch', VSwitch)
```

## Builds

There are three builds available.

- `dist/v-switch.cjs,js`: for SSR in node.js (using `require`)
- `dist/v-switch.esm-bundler.js`: for bundlers like Webpack and Rollup
  - also works as an ES module in the browser using `<script type="module">
- `dist/v-switch.browser.js`: global build (iife)

Type definitions are also included.

Generally your build tool will be able to figure out which bundle to use, but you can be explicit if you need to.

## License

MIT

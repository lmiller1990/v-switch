const { createSSRApp } = require('vue')
const { renderToString } = require('@vue/server-renderer')
const VSwitch = require('../dist/v-switch.cjs')

const app = createSSRApp({
  components: { VSwitch },
  data: () => ({ case: 'big' }),
  template: `
    <h1>VSwitch SSR Demo</h1>
    <v-switch :case="case">
      <template #big>
        Big
      </template>
      <template #default>
        Default
      </template>
    </v-switch>
  `
})

;(async () => {
  const html = await renderToString(app)
  console.log(html)
})()
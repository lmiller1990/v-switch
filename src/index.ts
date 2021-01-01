import { defineComponent, h } from 'vue'
import VS from '../dist/v-switch'


export const VSwitch = defineComponent({
  name: 'v-switch',
  setup(props, { slots }) {
    console.log(props)
    console.log(slots)
    return () => h('div', 'ok')
  }
})
import { defineComponent, h, computed } from 'vue'

export const VSwitch = defineComponent({
  props: {
    case: {
      type: [String, Number]
    }
  },
  // () => h(...)
  setup(props, { slots } ) {
    return () => computed(() => {
      if (props.case && slots[props.case]) {
        return h(slots[props.case])
      }

      if (slots.default) {
        return h(slots.default)
      }

      return h('div')
    }).value
  }
})
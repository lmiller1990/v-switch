import { computed, defineComponent, Directive, DirectiveBinding, h, isVNode, VNode, VNodeArrayChildren, VNodeNormalizedChildren, VNodeChild, Fragment } from 'vue'

export const VSwitch = defineComponent({
  name: 'v-switch',
  props: {
    case: {
      type: [String, Number]
    }
  },
  setup(props, { slots }) {
    return () => computed(() => {
      if (props.case && slots[props.case]) {
        return h(() => slots[props.case]())
      }

      if (props.case && slots.default) {
        return h(() => slots.default())
      }
      return []
    }).value
  }
})
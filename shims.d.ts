// workaround for Volar to infer the ref type in <template>
// https://github.com/johnsoncodehk/volar/issues/404
declare module '@vue/runtime-dom' {
  export * from '@vue/runtime-dom/dist/runtime-dom'
  export { defineComponent, PropType } from '@vue/composition-api'
}

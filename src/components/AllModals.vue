<template lang='pug'>
  .allModals
    template(v-for='field in schema')
      component(
        :is='field.fieldType'
      )
      //- template(v-if="getModal.indexOf(field.fieldType) !== -1")
        .modal-backdrop.fade.show
</template>

<script>
import ModalReserveEmail from './ModalReserveEmail'
import ModalReserve from './ModalReserve'

export default {
  name: 'AllModals',
  components: {
    ModalReserveEmail,
    ModalReserve
  },
  data () {
    return {
      schema: [
        { fieldType: 'ModalReserveEmail' },
        { fieldType: 'ModalReserve' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>

</style>

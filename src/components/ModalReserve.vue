<template lang='pug'>
  #ModalReserve.modal.fade(data-show='true' tabindex='-1', role='dialog', aria-labelledby='ModalReserve', aria-hidden='true')
    .modal-dialog.modal-dialog-centered(role='document')
      .modal-content
        .modal-body.text-center
          h5.modal-title Thank you for reserve!
          p With you have a nice trip.
          a(data-dismiss='modal') Close
</template>

<script>
export default {
  name: 'ModalReserve',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
#ModalReserve
  .modal-dialog
    max-width: 650px !important
    .modal-body
      box-sizing: border-box
      margin: 85px 56px
      .modal-title
        font-size: 40px
        font-weight: normal
        color: $coffee
        margin-bottom: 46px
      p
        font-size: 16px
        font-weight: lighter
        color: $grey
        margin-bottom: 46px
      .form-group
        margin-bottom: 40px
        input
          color: $darkGrey
          &::placeholder
            color: $grey
      a
        font-size: 18px
        font-weight: lighter
        color: $coffee
        text-decoration: underline
        cursor: pointer
</style>

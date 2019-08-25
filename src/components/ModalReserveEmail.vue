<template lang='pug'>
  #ModalReserveEmail.modal.fade.show
    .modal-dialog.modal-dialog-centered(role='document')
      .modal-content
        .modal-body.text-center
          h5.modal-title Thank you for reserve!
          p You can leave your E-mail address so that we’ll send the information of this reservation. With you have a nice trip.
          .form-group.form-row
            .col-9
              input.form-control(type='email', placeholder='Email Address')
            .col-3
              button.btn.btn-primary.send Send
          a(data-dismiss='modal') Not now, Thanks.
</template>

<script>
export default {
  name: 'ModalReserveEmail',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
#ModalReserveEmail
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

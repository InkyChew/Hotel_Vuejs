<template lang='pug'>
  .form-group.form-row
    .col
      datepicker(
        bootstrap-styling=true
        v-model='checkIn'
        placeholder='Check in date'
        :disabled-dates='getDisableDate'
        :format='DateFormat'
        :highlighted='highlighted'
        @input='onInputCheckIn'
      )
      //- calendar-button-icon='far fa-calendar-alt'
          clear-button-icon=':class="fa fa-times"'
    .col-1.text-center.my-auto
      label.my-0 —
    .col
      datepicker(
        bootstrap-styling=true
        includeDisabled=true
        v-model='checkOut'
        placeholder='Check out date'
        :disabled-dates='getDisableDate'
        :format='DateFormat'
        @input='onInputCheckOut'
      )
      //- input.form-control.cursor(type='text', placeholder='Check out date')
      //- i.far.fa-calendar-alt.cursor
</template>

<script>
import datepicker from 'vuejs-datepicker'

export default {
  name: 'InputDate',
  components: {
    datepicker
  },
  data () {
    return {
      checkIn: '',
      checkOut: ''
    }
  },
  watch: {
    checkOut: {
      handler (val) {
        if (this.checkOut < this.checkIn) {
          console.log(typeof(this.checkIn))
          alert('check out date can not earlier than check in date!')
        }
      }
    },
    deep: true
  },
  computed: {
    getDisableDate () {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth()
      const date = today.getDate()
      return { to: new Date(year, month, date) }
    },
    highlighted () {
      return { from: this.checkOut }
    }
  },
  methods: {
    DateFormat (date) {
      const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat']
      const month = date.getMonth() + 1
      const D = date.getDate()
      const day = days[date.getDay()]
      return month + '/' + D + ', ' + day
    },
    onInputCheckIn (event) {
      const year = parseInt(event.getFullYear())
      const month = parseInt(event.getMonth() + 1)
      const date = parseInt(event.getDate())
      const day = parseInt(event.getDay())
      const checkIn = [year, month, date, day]
      this.$emit('inputCheckIn', checkIn)
    },
    onInputCheckOut (event) {
      const year = parseInt(event.getFullYear())
      const month = parseInt(event.getMonth() + 1)
      const date = parseInt(event.getDate())
      const day = parseInt(event.getDay())
      const checkOut = [year, month, date, day]
      this.$emit('inputCheckOut', checkOut)
    }
  },
  mounted () {
  }
}
</script>

<style lang='sass'>
.vdp-datepicker
  input
    width: 100%
    height: 48px
    color: $darkGrey
    padding: 6px 12px
  .form-control[readonly]
    background-color: white !important
.vdp-datepicker__calendar
  color: $grey
  header
    .day__month_btn.up
      color: $coffee
      &:hover
        background-color: $bgCoffee
  .cell:not(.blank):not(.disabled):hover
    &.day
      border: none !important
      background-color: $coffee
      color: white
    &.month
      border: none !important
    &.year
      border: none !important
  .cell.day
    &.today
      color: $coffee
      font-weight: bold
    &.selected
      color: white
      background-color: $coffee
</style>

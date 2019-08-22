<template lang='pug'>
  .form-group.form-row
    .col
      datepicker(
        bootstrap-styling=true
        v-model='checkIn'
        placeholder='Check in date'
        :disabled-dates='getDisableDate'
        :format='DateFormat'
      )
      //- calendar-button-icon='far fa-calendar-alt'
          clear-button-icon=':class="fa fa-times"'
    .col-1.text-center.my-auto
      label.my-0 —
    .col
      datepicker(
        bootstrap-styling=true
        v-model='checkOut'
        placeholder='Check out date'
        :disabled-dates='getDisableDate'
        :format='DateFormat'
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
  computed: {
    getDisableDate () {
      const today = new Date()
      const year = today.getFullYear()
      const month = today.getMonth()
      const date = today.getDate()
      return { to: new Date(year, month, date) }
    }
  },
  methods: {
    DateFormat (date) {
      const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thrus', 'Fri', 'Sat']
      const month = date.getMonth()
      const D = date.getDate()
      const day = days[date.getDay()]
      return month + '/' + D + ', ' + day
    }
  },
  mounted () {
    console.log(new Date().getMonth())
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

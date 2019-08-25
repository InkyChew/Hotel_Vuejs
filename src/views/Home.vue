<template lang='pug'>
  div
    .row.mx-0
      Banner
    #About.row.mx-0.about.d-flex.align-items-center
      .col-lg-6.col-md-12
        img(src='@/assets/image/about.jpg' width='100%' height='600px')
      .col-lg-6.col-md-12
        h2 About us
        p
         | A wonderful vacation on dream.
         | The beach with the breeze, enjoying the sunset in summer,
         | and bathing the stars at midnight.
         | What an amazing thing when you wake up in the morning with the view formed the sky,
         | the mountains and the ocean in front of you. You can totally relax yourself with the bright and tidy room,
         | the astonishing scene, and our sweet service. Faraway from the noist city right now.
    #Rooms.row.mx-0.room.d-flex.align-items-center
      .col-lg-3.col-md-12.col-sm-12
        h2 Rooms
        p Nova Sky comprises 67 suites. Each one artfully combines the ultimate in luxury, comfort and sophistication. Every living space, gives a new definition to opulence and splendour, with contemporary finishes and premium facilities.
      .col-lg-9.col-md-12.col-sm-12
        .row
          template(v-for='room in rooms')
            .col-lg-4.col-md-6.col-sm-12.roomNav.px-0.mx-auto
              .card.text-white.h-100
                img.card-img.h-100(:src='room.imageUrl', alt='Card image')
                a.card-img-overlay.d-flex.align-items-center(
                  href='javascript:;'
                  @click='goRoomDetail(room.id)'
                )
                  h5.card-title.mx-auto {{ room.name }}
              //- a(
              //-   href='javascript:;'
              //- )
              //-   .col.roomNav.px-0
              //-     .card.text-white.h-100
              //-       img.card-img.h-100(:src='room.src', alt='Card image')
              //-       .card-img-overlay.d-flex.align-items-center
              //-         h5.card-title.mx-auto {{ room.name }}
    #Contact.row.mx-0.contact
      .col-3
        img(src='@/assets/image/leaf.png')
      .col-9
        h2 Contact us
        form
          .form-group
            input.form-control(type='text', placeholder='Your name')
          .form-group
            input.form-control(type='email', placeholder='Your E-mail address')
          .form-group
            textarea.form-control(rows='4' cols='50' placeholder='Your Message')
          .d-flex.justify-content-end
            button.btn.btn-primary Send
</template>

<script>
import Banner from '@/components/Banner.vue'
import API from '@/httpService/index.js'

export default {
  name: 'Home',
  components: {
    Banner
  },
  data () {
    return {
      rooms: [
        {
          id: '',
          imageUrl: '',
          normalDayPrice: 1380,
          holidayPrice: 1500,
          name: 'Single Room'
        }
      ]
    }
  },
  methods: {
    initData () {
      this.getRooms()
    },
    async getRooms () {
      const { getAllRooms } = API
      try {
        const res = await getAllRooms()
        if (res.data.success) {
          this.rooms = res.data.items
        } else {
          console.log('fail')
        }
      } catch (err) {
        console.log(err)
      } finally {

      }
    },
    goRoomDetail (roomId) {
      console.log(roomId)
      localStorage.setItem('nowRoomId', roomId)
      this.$router.push({ path: 'roomDetail' })
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang='sass'>
h2
  margin-bottom: 37px
  font-size: 28px
  color: $secCoffee
p
  font-size: 14px
  line-height: 28px
  color: $darkGrey
.about
  padding: 70px 120px
.room
  padding: 0px 120px
  background-color: $bgCoffee
  .roomNav
    width: 264px
    height: 264px
    .card
      border: none
    a
      background-color: #86766B
      opacity: 0.3
      color: white
      text-decoration: none
      &:hover
        background-color: #5A4F48
        opacity: 0.3
        img
          transform: scale(1)
.contact
  padding: 50px
  .form-control
    border-color: $bgGrey
  input::placeholder
    color: $grey
  textarea
    width: 100%
    height: 150px
    padding: 12px
    box-sizing: border-box
    border-radius: 4px
    font-size: 16px
    resize: none
    &::placeholder
      color: $grey
</style>

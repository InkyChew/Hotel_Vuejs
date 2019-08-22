<template lang='pug'>
  .container-fulid
    .roomDetail(v-if='room')
      .row
        .col
          .row
            img.show(:src='showImg')
          .row
            template(v-for='url in room.imageUrl')
              a(
                href='javascript:;'
                @mouseover='showImg = url'
              )
                .smallImg
                  img.small(:src='url')
                  .overlay(:class='{ active : url === showImg }')
        .col.my-auto
          h2 {{ room.name }}
          p {{ room.description }}
          hr
          .price.d-flex.flex-column
            label Price(From Mon to Thu)：NT${{ room.normalDayPrice }}
            label Price for weekend(From Fri to Sun)：NT$1,500
          .check.d-flex.flex-column
            label checkIn time：{{ room.checkInAndOut.checkInEarly }}~{{ room.checkInAndOut.checkInLate }}
            label checkOut time：before {{ room.checkInAndOut.checkOut }}
          button.btn.btn-primary.reserve(type='submit') Reserve now
      .row.py-5#DetailReserve
        .col.my-auto
          h3 Detail Information
          .row.main
            .col.d-flex.flex-column
              span
                i.fas.fa-male
                label Person： {{ room.descriptionShort.GuestMin }}~{{ room.descriptionShort.GuestMax }} perso
              span
                i.fas.fa-bed
                label Bed：{{ room.descriptionShort.Bed[0] }} bed
              span
                i.fas.fa-bath
                label Bathroom：{{ room.descriptionShort.PrivateBath }}
              span
                i.fas.fa-home
                label Room size： 18 square meter
          hr
          .row.sub
            //- amenities
            .col-lg-4.col-md-6.col-sm-12.d-flex.flex-column(v-for='(amenity, index) in amenities')
              span(:class='{ active : room.amenities[amenity.id] }')
                i(:class='amenity.i')
                label {{ amenity.name }}
        //-
        .col.reserve-info
          h3 Reserve Information
          form
            h5 Date and Number of people
            InputDate
            h6.text-right 0 night. NT$ 0 dollars.
          form
            h5 Your information
            .form-group.form-row
              .col
                select.form-control
                  option 1 Adult
              .col-1.text-center.my-auto
                label.my-0 &
              .col
                select.form-control
                  option 0 Child
            .form-group.form-row
              .col
                input.form-control(type='text', placeholder='Last Name')
              .col
                input.form-control(type='text', placeholder='First Name')
            .form-group.form-row
              .col
                select.form-control
                  option Taiwan (+886)
              .col
                input.form-control(type='text', placeholder='Phone number')
            .form-group
              input.form-control(type='email', placeholder='Email Address (Optional)')
            button.btn.btn-primary.send(type='submit') Send My Reservation
    .img-container
      .card.text-white
        img.card-img.w-100(src='@/assets/image/f1.jpg')
        .card-img-overlay.d-flex.align-items-center
          h2.mx-auto Faraway from the noisy city right now.
</template>

<script>
import InputDate from '@/components/InputDate'
import API from '@/httpService/index.js'

export default {
  name: 'roomDetail',
  components: {
    InputDate
  },
  data () {
    return {
      room: null,
      showImg: '',
      amenities: [
        {
          id: 'Wi-Fi',
          name: 'Wifi',
          i: 'fas fa-wifi'
        },
        {
          id: 'Breakfast',
          name: 'Breakfast',
          i: 'fas fa-utensils'
        },
        {
          id: 'Mini-Bar',
          name: 'Minibar',
          i: 'fas fa-coffee'
        },
        {
          id: 'Room-Service',
          name: 'RoomService',
          i: 'fas fa-phone-alt'
        },
        {
          id: 'Television',
          name: 'Television',
          i: 'fas fa-cube'
        },
        {
          id: 'Air-Conditioner',
          name: 'Aircondition',
          i: 'fas fa-snowflake'
        },
        {
          id: 'Refrigerator',
          name: 'Refrigerator',
          i: 'fas fa-thermometer-half'
        },
        {
          id: 'Sofa',
          name: 'Sofa',
          i: 'fas fa-couch'
        },
        {
          id: 'Great-View',
          name: 'Great View',
          i: 'fas fa-image'
        },
        {
          id: 'Smoke-Free',
          name: 'No-smoking',
          i: 'fab fa-envira'
        },
        {
          id: 'Child-Friendly',
          name: 'For Kids',
          i: 'fas fa-futbol'
        },
        {
          id: 'Pet-Friendly',
          name: 'For pet',
          i: 'fas fa-heart'
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    initData () {
      this.getRoom()
    },
    async getRoom () {
      const id = localStorage.getItem('nowRoomId')
      const { getRoomDetail } = API
      const res = await getRoomDetail(id)
      try {
        if (res.data.success) {
          this.room = res.data.room[0]
          this.showImg = this.room.imageUrl[0]
        } else {
          console.log('fail')
        }
      } catch (err) {
        console.log(err)
      } finally {

      }
    }
  },
  mounted () {
    this.initData()
  }
}
</script>

<style lang='sass'>
h2
  color: $darkGrey
  font-size: 28px
  margin-bottom: 27px
.roomDetail
  padding: 100px 120px 0px 120px;
  .show
    width: 610px
    height: 590px
  .smallImg
    position: relative
    padding: 20px
    .small
      width: 80px
      height: 80px
    .overlay
      position: absolute
      bottom: 17%
      width: 80px
      height: 0px
      background-color: $coffee
      &.active
        height: 5px
    &:hover
      .overlay
        height: 5px
        transition: .5s ease
  .reserve // btn
    width: 220px
    height: 48px
  p
    color: $grey
    font-size: 14px
  .price
    color: $darkGrey
  .check
    color: $darkGrey
    margin-top: 20px
    margin-bottom: 14px
  h3
    color: $grey
    font-size: 28px
    margin-bottom: 23px
  h5
    color: $grey
    font-size: 14px
    margin-bottom: 20px
  h6
    color: $darkGrey
    font-size: 16px
  input::placeholder
    color: $grey
  .form-group
    margin-bottom: 20px
    .form-control
      color: $darkGrey
      height: 48px
    select.form-control:not([size]):not([multiple])
      height: 48px !important
  .main
    color: $grey
    font-size: 16px
    i
      margin-bottom: 14px
      width: 18px
      height: 16px
    label
      padding-left: 10px
      padding-right: 10px
  .sub
    color: $bgGrey
    font-size: 16px
    .active
      color: $darkGrey
    i
      margin-bottom: 20px
      width: 18px
      height: 16px
    label
      padding-left: 10px
      padding-right: 10px
  .reserve-info
    padding: 55px 60px
    width: 610px
    height: 680px
    background-color: $bgCoffee
    .send
      width: 100%
      height: 48px
.img-container
  overflow: hidden
  .card-img-overlay
    background-color: rgba(255, 255, 255, 0.5)
</style>

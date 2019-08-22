<template lang="pug">
  #app
    .container-fulid
      header
        nav.navbar.navbar-expand-lg
          a.brand(
            href="#Banner"
          )
            i.fas.fa-leaf
            .navbar-brand Nature Space
          button.navbar-light.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbar', aria-controls='navbar', aria-expanded='false', aria-label='Toggle navigation')
            span.navbar-toggler-icon
          #navbar.collapse.navbar-collapse
            .col.right-align
              ul.navbar-nav.mt-2.mt-lg-0
                li.nav-item
                  a.nav-link(href='/#About' :class="{ active : nowId === '#About' }" @click='goLink') About us
                li.nav-item
                  a.nav-link(href='/#Rooms' :class="{ active : nowId === '#Rooms' }" @click='goLink') Rooms
                li.nav-item
                  a.nav-link(href='/#Contact' :class="{ active : nowId === '#Contact' }" @click='goLink') Contact us
      //-
      router-view
      //-
      footer
        .row.d-flex.justify-content-between
          .left.col-9.d-flex.flex-row
            .col.d-flex.align-items-center
              label.mb-0 Follow us on
              i.fab.fa-facebook-square
              i.fab.fa-twitter-square
            .col-8.d-flex.flex-row.align-items-center
              label.mb-0 Servise number
              label.mb-0.tel +886-2-2345-6789
          .right
            .col.d-flex.align-items-center
              label.mb-0 @2019 Nature Space
</template>

<script>
export default {
  name: 'App',
  watch: {
    $route: {
      handler (val) {
        this.nowId = val.hash
      },
      deep: true
    }
  },
  data () {
    return {
      nowId: '#About'
    }
  },
  methods: {
    goLink () {

    }
  },
  mounted () {
    console.log(document.querySelectorAll("a[href^='/#']"));
  }
}
</script>

<style lang="sass">
.navbar
  position: fixed
  z-index: 2
  background-color: white
  width: 100%
  padding: 10px 130px
  border-bottom: 1px solid $bgGrey
  .right-align
    display: flex
    justify-content: flex-end
  .navbar-brand
    margin-left: 16px
    color: $coffee
  i
    color: $coffee
  button
    border-color: $bgGrey
    outline: none
  // .nav-item
  //   padding: 0px 71px
  .nav-link
    color: $text
    &:hover
      color: $coffee
    &.active
      color: $coffee
footer
  background-color: $bgGrey
  padding: 30px 120px
  label
    padding-right: 20px
    color: $grey
    font-size: 14px
  .tel
    font-size: 16px
    color: $darkGrey
  i
    padding-right: 20px
    font-size: 28px
    color: $darkGrey
    &:hover
      color: $grey
</style>

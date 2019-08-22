<template lang='pug'>
  #Banner.mx-auto
    #carouselExampleIndicators.carousel.slide(data-ride='carousel')
      ol.carousel-indicators
        li.active(data-target='#carouselExampleIndicators', data-slide-to='0')
        li(data-target='#carouselExampleIndicators', data-slide-to='1')
        li(data-target='#carouselExampleIndicators', data-slide-to='2')
      .carousel-inner
        .carousel-item.active
          img.d-block.w-100(src='@/assets/image/b3.jpg', alt='First slide' width='1440px' height='500px')
        .carousel-item
          img.d-block.w-100(src='@/assets/image/b3.jpg', alt='Second slide' width='1440px' height='500px')
        .carousel-item
          img.d-block.w-100(src='@/assets/image/b3.jpg', alt='Third slide' width='1440px' height='500px')
      a.carousel-control-prev(href='#carouselExampleIndicators', role='button', data-slide='prev')
        span.carousel-control-prev-icon(aria-hidden='true')
        span.sr-only Previous
      a.carousel-control-next(href='#carouselExampleIndicators', role='button', data-slide='next')
        span.carousel-control-next-icon(aria-hidden='true')
        span.sr-only Next
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Banner',
  data () {
    return {
      bannerSwiper: null,
      image: {
        pic1: {
          name: 'Hotel',
          src: require('@/assets/image/b1.jpg')
        },
        pic2: {
          name: 'Hotel',
          src: require('@/assets/image/b2.jpg')
        },
        pic3: {
          name: 'Hotel',
          src: require('@/assets/image/b3.jpg')
        }
      }
    }
  },
  methods: {
    initSwiper () {
      const config = {
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        slidesPerView: 'auto',
        centeredSlides: true
      }
      this.bannerSwiper = new Swiper('.swiper-container', config)
    }
  }
}
</script>

<style lang='sass'>
#Banner
  width: 100%
  max-width: 1440px
  .carousel-indicators
    bottom: -40px
    z-index: 1
    li
      background-color: $grey
      width: 32px
      height: 8px
      &.active
        background-color: $secCoffee
</style>

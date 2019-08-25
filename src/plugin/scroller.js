import Vue from 'vue'

Vue.prototype.$scroll = function (id) {
  const rootEl = document.querySelector('html')
  const target = document.querySelector(id).scrollHeight
  const step = 15
  let count = rootEl.scrollTop
  const timer = setInterval(() => {
    if (count >= target) {
      clearInterval(timer)
    } else {
      rootEl.scrollTop += step
      count = rootEl.scrollTop
    }
  }, 10)
}

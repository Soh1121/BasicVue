var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    data: {
        video1: false,
        video2: false
    },
    directives: {
        video(el, binding) {
            binding.value ? el.play() : el.pause()
        }
    }
})

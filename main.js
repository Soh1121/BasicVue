var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    filters: {
        round: function(val) {
            return Math.round(val * 100) / 100
        },
        radian: function(val) {
            return val * Math.PI / 180
        }
    }
})

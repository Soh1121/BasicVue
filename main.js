var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
    },
    methods: {
        handleInput: function(event) {
            // 代入前になにか処理を行う
            this.message = event.target.value
        }
    }
})

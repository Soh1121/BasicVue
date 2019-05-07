var app = new Vue({
    el: '#app',
    methods: {
        handler: function(comment) {
            // 代入前になにか処理を行う
            console.log(comment)
        }
    }
})

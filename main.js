var scroll = new SmoothScroll()
var app = new Vue({
    el: '#app',
    directives: {
        focus: {
            // 紐付いている要素がDOMに挿入されるとき
            inserted: function(el) {
                el.focus() // 要素にフォーカスを当てる
            }
        }
    }
})

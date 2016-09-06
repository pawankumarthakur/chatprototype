var vm = new Vue({
    el: "#app-layout",
    data: {
        a: 1
    },
    created: function () {
        // `this` points to the vm instance
        console.log('a is: ' + this.a)
    },
    methods: {
        pageload: function(){
            console.log("Hello World");
        }
    }
});

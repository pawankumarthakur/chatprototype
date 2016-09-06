var vm = new Vue({
    el: "#app-layout",
    data: {
        dummy: ""
    },
    ready: function(){
        console.log("Helllo");
        this.pageload();
    },
    methods: {
        pageload: function(){
            console.log("Hello World");
        }
    }
});

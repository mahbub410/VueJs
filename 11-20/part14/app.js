var app = Vue.createApp({
    data(){
        return{
            show: false,
            skills:[
                {name: "php", expe:4},
                {name: "css", expe:2},
                {name: "java", expe:5},
                {name: "html", expe:1},
                {name: "python", expe:8},
            ]
            }     
    },
    methods: {  
       showHide(){
            this.show = !this.show
       }
    }
})

app.mount("#app");


var app = Vue.createApp({
    data(){
        return{
            show: false,
            review:"",
            skills:[
                {name: "php", expe:4},
                {name: "css", expe:2},
                {name: "java", expe:5},
                {name: "html", expe:1},
                {name: "python", expe:8},
                {name: "node js", expe:7},
                {name: "laravel", expe:9},
            ]
            }     
    },
    computed:{
        totalCount1(){
            console.log('total count1')
            return this.skills.length
       },
       expList(){
        let exl = this.skills.filter((item)=>{
            return item.expe>=7
        });

        return exl;
       }
    },
    methods: {  
        totalCount(){
            console.log('total count')
            return this.skills.length
       },
       delItem(i){
            this.skills.splice(i,1)
       }
    }
})

app.mount("#app");


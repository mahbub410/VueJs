var app = Vue.createApp({
    data(){
        return{
            firstName:"",
            lastName:"",
            fullName:""
            }     
    },
    methods:{
        fullName(){
           return  this.firstName+" "+this.lastName;
        }
    },
    computed:{
        fullName1(){
            return  this.firstName+" "+this.lastName;
         }
    },
    watch:{
       firstName(newValue){
        return this.fullName = newValue+" "+this.lastName
       },
       lastName(newValue){
        return this.fullName=this.firstName+" "+newValue
       }
        
    }
})

app.mount("#app");


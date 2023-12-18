var app = Vue.createApp({
    data(){
        return{
            mobile: "",
            name:{
                firstName:"",
                lastName:""
            }
            
            }     
    },
    watch:{
        mobile(newValue,oldValue){
            if(isNaN(newValue)){
                alert('enter number')
                this.mobile=oldValue
            }else if(newValue.length >11){
                alert('cannot entry more then 11 num')
            }
            
        },
        // "name.firstName":function(newValue,oldValue){
        //     console.log(newValue,oldValue)
        // }
        name:{
            deep:true,
            handler:function(newValue,oldValue){
                console.log(newValue)
            }
        }
        
    }
})

app.mount("#app");


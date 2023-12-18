var app = Vue.createApp({
    data(){
        return{
            skills: ['HTML','CSS','JAVA'],
            skillObj:[
                {name: "mahbub",age:31},
                {name: "zumur",age:30}
                //{name: "ayan",age:5},
                //{name: "afra",age:3}
            ],
            newSkil:'',
            newSkilObj:{name:"",age:4}
        };
    },
    methods: {
        skillAdd(){
            this.skills.push(this.newSkil)
            this.newSkil=''
        },
        delSkill(indx){
            this.skills.splice(indx,1)
        },
        skillAddObj(){
            this.skillObj.push(this.newSkilObj);
            this.newSkilObj={};
        },
        delSkillObj(i){
            this.skillObj.splice(i,1);
        }
       
    }
});

app.mount("#app");


var app = Vue.createApp({
    data(){
        return{
            name: "",
            mobile: "",
            confirmed: false,
            appliedcoupun:null,
            couponCode:"",
            coupons:[
            {
                code:"100TAKAOFF",
                discount:100
            },
            {
                code:"200TAKAOFF",
                discount:200
            }
            ],
            seatStates:{
                sold:{
                    text:"Sold",
                    color:"#ff0000"
                },
                available:{
                    text:"Available",
                    color:"#fff"
                },
                booked:{
                    text:"Booked",
                    color:"gray"
                },
                selected:{
                    text:"Selected",
                    color:"#00ff00"
                }
            },
            seats:[
                {
                    name:"A1",
                    type:"available",
                    price:500
                },
                {
                    name:"A2",
                    type:"available",
                    price:500
                },
                {
                    name:"A3",
                    type:"available",
                    price:500
                },
                {
                    name:"A4",
                    type:"available",
                    price:500
                },
                {
                    name:"B1",
                    type:"available",
                    price:500
                },
                {
                    name:"B2",
                    type:"available",
                    price:500
                },
                {
                    name:"B3",
                    type:"available",
                    price:500
                },
                {
                    name:"B4",
                    type:"available",
                    price:500
                },
                {
                    name:"C1",
                    type:"sold",
                    price:500
                },
                {
                    name:"C2",
                    type:"sold",
                    price:500
                },
                {
                    name:"C3",
                    type:"sold",
                    price:500
                },
                {
                    name:"C4",
                    type:"sold",
                    price:500
                },
                {
                    name:"D1",
                    type:"available",
                    price:500
                },
                {
                    name:"D2",
                    type:"available",
                    price:500
                },
                {
                    name:"D3",
                    type:"available",
                    price:500
                },
                {
                    name:"D4",
                    type:"available",
                    price:500
                },
                {
                    name:"E1",
                    type:"available",
                    price:500
                },
                {
                    name:"E2",
                    type:"available",
                    price:500
                },
                {
                    name:"E3",
                    type:"booked",
                    price:500
                },
                {
                    name:"E4",
                    type:"booked",
                    price:500
                },
                {
                    name:"F1",
                    type:"available",
                    price:500
                },
                {
                    name:"F2",
                    type:"available",
                    price:500
                },
                {
                    name:"F3",
                    type:"available",
                    price:500
                },
                {
                    name:"F4",
                    type:"available",
                    price:500
                }
            ]
            }     
    },
    methods:{
        handleclick(i){
            let clickSeat = this.seats[i]
            if(clickSeat.type==='sold' || clickSeat.type==='booked'){
                alert("You can't select this seat")
                return
            }
            if(this.selectedSeats.length>2){
                alert("You can't select more then 3 seat")
                return
            }
            clickSeat.type = clickSeat.type === 'selected' ? 'available' : 'selected'
            console.log(clickSeat.type);
            
        },
        confirm() {
            if (!this.name || !this.mobile) {
              alert("Please enter name and mobile");
              return;
            }
      
            this.confirmed = true;
          },
          resetData() {
            this.confirmed = false;
            this.name = "";
            this.mobile = "";
            this.appliedCoupon = null;
      
            this.seats.forEach((seat) => {
              if (seat.type === "selected") {
                seat.type = "sold";
              }
            });
          }
    },
    computed:{
       selectedSeats(){
        let sc = this.seats.filter((item)=>item.type==='selected')
        return sc
       },
       totalCost(){
        let tc=0;
        this.selectedSeats.forEach((seat)=>{
            tc+=seat.price;
        })

        if(this.appliedcoupun !== null){
            tc = tc-this.appliedcoupun.discount
        }
        return tc
        }
    },
    
    watch:{
        couponCode(newValue){
            if(newValue.length===10){
                
                let searchCoupons=this.coupons.filter(
                    (item)=>item.code===newValue
                );

                if(searchCoupons.length===1){
                    this.appliedcoupun=searchCoupons[0];
                    this.couponCode=""
                }else{
                    alert("Coupon not valid")
                }
            }
        }
    }
})

app.mount("#app");


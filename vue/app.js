
const app = Vue.createApp({
    data() {
        return {
            title1: "Cookie Clicker",
            cookies: 0,
            clickers: 0,
            clickerPrice: 15,
            grandmas: 0,
            granPrice: 100,
            farms: 0,
            farmPrice: 1500,
            tapMoneyMultiplier:1,
            tapMoneyAdditional:0,
            inflation: 1.15,
            showBox: true
        };
    },
    computed: {
        tapMoney() {
            return (1 + this.tapMoneyAdditional) * this.tapMoneyMultiplier;
        },
        cps() {
            return (
                (this.clickers * this.cliCps * this.cliMultiplier) +
                (this.grandmas * this.granCps * this.granMultiplier) +
                (this.farms * this.farmCps * this.farmMultiplier)
            );
        },
        cliMultiplier(){
            return 1+ Math.floor((this.clickers/10))
        },
        cliCps(){
            return 0.2*this.cliMultiplier
        },
        granMultiplier() {
            return 1 + Math.floor(this.grandmas / 10);  
        },
        granCps() {
            return 1.0 * this.granMultiplier; 
        },
        farmMultiplier() {
            return 1 + Math.floor(this.farms / 10);  
        },
        farmCps() {
            return 15.0 * this.farmMultiplier; 
        }
    },

    methods: {
        toggleShowBox(){
            this.showBox = !this.showBox
        },
        addCookies(amount) {
            this.cookies += amount;
            this.cookies = parseFloat(this.cookies.toFixed(1));
        },
        buyClicker(){
            if(this.cookies>=this.clickerPrice){
                this.cookies -= this.clickerPrice
                this.clickerPrice *= this.inflation
                this.clickers++
            }
        },
        buyGrandma(){
            if(this.cookies>=this.granPrice){
                this.cookies -= this.granPrice
                this.granPrice *= this.inflation
                this.grandmas++
            }
        },
        buyFarm(){
            if(this.cookies>=this.farmPrice){
                this.cookies -= this.farmPrice
                this.farmPrice *= this.inflation
                this.farms++
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.addCookies(this.cps);
        }, 1000);
    }
});

const vm = app.mount('#app'); // Save the Vue instance




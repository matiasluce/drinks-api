const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const app = new Vue({
    el: "#app",
    data:{
        datos: []
    },
    created(){
        this.fetchData(url);
    },
    methods:{
        fetchData(url){
            if(url !== ""){
                fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.datos = data.drinks;
                    console.log(this.datos);
                    
                })
                .catch(err => console.log(err));

            }else{
                console.log("URL inválida");
            }
        }
    }
})
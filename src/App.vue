<template>
    <div id="app">
        <CardsCarousel :data="data"></CardsCarousel>
    </div>
</template>

<script>
import CardsCarousel from './components/CardsCarousel.vue'

export default {
    name: 'app',
    components: {
        CardsCarousel
    },
    data () {
        return {
            data: [
                { 
                    name: 'Ração Royal Canin Feline Health Nutrition Sterilised para Gatos', 
                    price: 0, 
                    url: "/busca?q=Ração+Royal+Canin+Feline+Health+Nutrition+Sterilised+para+Gatos", 
                    img: "https://cdn.dotpet.com.br/imgs/030e4c7baedb581064c7a8d6a0514e57.jpeg" 
                },
                { 
                    name: 'Areia Sanitária Kelco Pipicat Floral', 
                    price: 0, 
                    url: "/busca?q=Areia+Sanitária+Kelco+Pipicat+Floral", 
                    img: "https://cdn.dotpet.com.br/imgs/Pipicat_Floral_4kg_3105881_58fa1a906553f.jpg" 
                },
                { 
                    name: 'Antipulgas e Carrapatos MSD Bravecto para Cães de 4,5 a 10 Kg', 
                    price: 0, 
                    url: "/busca?q=MSD+Bravecto+para+Cães+de+4%2C5+a+10+Kg", 
                    img: "https://cdn.dotpet.com.br/imgs/1a0aa85c5b991703f924710d24244ecb.jpeg"
                },
                { 
                    name: 'Tapete Higiênico Super Secão', 
                    price: 0, 
                    url: "/busca?q=Tapete+Higiênico+Super+Secão", 
                    img: "https://cdn.dotpet.com.br/imgs/super%20secao%207_5971129daa750.jpg"
                },
                { 
                    name: 'Ração Royal Canin Mini Adult para Cães Adultos de Raças Pequenas com 10 Meses ou mais de Idade', 
                    price: 0, 
                    url: "/busca?q=Ração+Royal+Canin+Mini+Adult+para+Cães+Adultos+de+Raças+Pequenas+com+10+Meses+ou+mais+de+Idade", 
                    img: "https://cdn.dotpet.com.br/imgs/3105614_58c6f40d870a0.jpg"
                },
                { 
                    name: 'Ração Premier Pet Formula Cães Filhotes Raças Grandes e Gigantes Frango - 15 Kg', 
                    price: 0, 
                    url: "/busca?q=Ração+Premier+Pet+Formula+Cães+Filhotes+Raças+Grandes+e+Gigantes+Frango", 
                    img: "https://cdn.dotpet.com.br/imgs/9e06d9a1f4d747b798861f965d783564.jpeg"
                },
                { 
                    name: 'Ração Hill´s Science Diet Filhotes Cães de Raças Pequenas & Miniatura', 
                    price: 0, 
                    url: "/busca?q=Ração+Hill´s+Science+Diet+Filhotes+Cães+de+Raças+Pequenas+%26+Miniatura", 
                    img: "https://cdn.dotpet.com.br/imgs/filhote%20raca%20pq%20mi_58c863fe6ee1a.jpg"
                }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>

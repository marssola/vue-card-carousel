<template>
    <div class="card-carousel-wrapper">
        <div class="card-carousel--nav__left" @click="moveCarousel(-1)"></div>
        <div class="card-carousel">
            <div class="card-carousel--overflow-container" ref="card-scroll">
                <div class="card-carousel-cards">
                    <div class="card-carousel--card" v-for="(item, index) in data" v-bind:key="index" ref="card" @click="openUrl(item.url)">
                        <img :src="item.img" :alt="item.name" />
                        <div class="card-carousel--card--footer">
                            <div class="card-label">{{ item.name | title }}</div>
                            <div class="card-from">
                                <div>a partir de</div>
                                <div>{{ item.price | formatPrice }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-carousel--nav__right" @click="moveCarousel(1)"></div>
    </div>
</template>

<script>    
    export default {
        name: 'CardsCarousel',
        props: {
            data: {
                type: Array,
                default: undefined,
            }
        },
        filters: {
            title: function (str) {
                return str.length > 60 ? `${str.slice(0, 60).trim()}...` : str
            },
            formatPrice: function (value) {
                return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format((parseInt(value) / 100).toFixed(2))
            },
        },
        methods: {
            moveCarousel(direction) {
                this.$refs['card-scroll'].scrollLeft += direction * ((this.$refs['card'][0].offsetLeft * 2) + this.$refs['card'][0].offsetWidth)
            },
            openUrl (url) {
                window.location.href = url
            },
        }
    }
</script>

<style scoped>
.card-carousel a {
    text-decoration: none;
    color: #666;
}
.card-carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0 40px;
    color: #666a73;
}

.card-carousel {
    display: flex;
    justify-content: center;
    width: 85%;
}
@media (max-width: 414px) {
    .card-carousel {
        width: 80%;
    }
}
.card-carousel--overflow-container {
    overflow: auto;
}
.card-carousel--overflow-container::-webkit-scrollbar {
    display: none; 
}
.card-carousel--nav__left, .card-carousel--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 8px;
    border-radius: 4px;
    box-sizing: border-box;
    border-top: 4px solid #666;
    border-right: 4px solid #666;
    cursor: pointer;
    transition: transform .15s linear;
}
.card-carousel--nav__left[disabled], .card-carousel--nav__right[disabled] {
    opacity: 0.2;
    border-color: black;
}
.card-carousel--nav__left {
    transform: rotate(-135deg);
}
.card-carousel--nav__left:active {
    transform: rotate(-135deg) scale(0.9);
}
.card-carousel--nav__right {
    transform: rotate(45deg);
}
.card-carousel--nav__right:active {
    transform: rotate(45deg) scale(0.9);
}
.card-carousel-cards {
    display: flex;
    transition: transform 150ms ease-out;
    transform: translatex(0px);
}
.card-carousel-cards .card-carousel--card {
    margin: 0 15px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    cursor: pointer;
    background-color: #fff;
    transition: opacity .15s linear;
}
.card-carousel-cards .card-carousel--card:hover {
    opacity: 0.5;
}
.card-carousel-cards .card-carousel--card:first-child {
    margin-left: 10px;
}
.card-carousel-cards .card-carousel--card:last-child {
    margin-right: 10px;
}
.card-carousel-cards .card-carousel--card img {
    height: 150px;
    user-select: auto;
}
.card-carousel-cards .card-carousel--card--footer {
    width: 150px;
    height: 150px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.card-carousel-cards .card-carousel--card--footer .card-label {
    padding: 5px 0;
    margin: 0;
    color: #666;
    text-align: center;
    font-size: 0.9em;
}
.card-carousel-cards .card-carousel--card--footer .card-from div:nth-of-type(1), .card-carousel-cards .card-carousel--card--footer .card-from div:nth-of-type(2) {
    color: #1d9d92;
    margin: 0;
    padding: 0;
}
.card-carousel-cards .card-carousel--card--footer .card-from div:nth-of-type(2) {
    font-weight: bold;
    font-size: x-large;
}
.card-carousel-cards .card-carousel--card--footer .card-from div:nth-of-type(1) {
    font-size: smaller;
}
</style>

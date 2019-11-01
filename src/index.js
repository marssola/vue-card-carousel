import CardsCarousel from './components/CardsCarousel.vue'

function install(Vue) {
    Vue.component(CardsCarousel.name, CardsCarousel)
}

export default install
export { CardsCarousel }

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(install)
}

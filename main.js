const { createApp, ref } = Vue;

const app = createApp({
    setup() {
        const cart = ref(0)
        const premium = ref(true)
        return {
            cart,
            premium
        }
    }
})

app.component('product-display', productDisplay)

app.mount('#app')
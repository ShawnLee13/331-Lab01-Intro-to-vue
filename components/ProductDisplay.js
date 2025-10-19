const { ref, computed } = Vue;

const productDisplay = {

    props: {
        premium: Boolean
    },
    template: `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="image" :class="{ 'out-of-stock-img': !inStock }">
                </div>
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">Almost out of Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                    <li v-for="detail in details" :key="detail">{{detail}}</li>
                </ul>
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
                    class="color-circle" :style="{backgroundColor: getColorCode(variant.color)}">
                </div>
                <button class="button" :disabled="!inStock" @click="addToCart" :class="{disabledButton: !inStock}">Add To Cart</button>
            </div>
            <review-list v-if="reviews.length" :reviews="reviews"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>
    `,
    setup(props, { emit }) {
        const product = ref('Boots')
        const brand = ref('SE 331')
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
        ])
        const selectedVariant = ref(0)
        
        // 添加评论相关逻辑
        const reviews = ref([])
        function addReview(review) {
            reviews.value.push(review)
        }
        
        // Helper function to convert color names to proper CSS color codes
        function getColorCode(colorName) {
            const colorMap = {
                'green': '#228B22',
                'blue': '#4169E1'
            }
            return colorMap[colorName] || colorName;
        }
        
        function updateVariant(index) {
            selectedVariant.value = index;
        }
        
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })
        
        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })
        
        function addToCart() {
            // Since we're not using events anymore, this will be handled differently
            // We'll just add to cart directly if the product is in stock
            if (inStock.value > 0) {
                // In a real application, we would use a store or other mechanism
                console.log('Product added to cart');
            }
        }
        
        const title = computed(() => {
            return brand.value + ' ' + product.value
        })
        
        const shipping = computed(() => {
            return props.premium ? 'Free' : '$2.99'
        })
        
        return {
            title,
            image,
            inStock,
            details,
            variants,
            addToCart,
            updateVariant,
            getColorCode,
            shipping,
            reviews,
            addReview
        }
    }
};

// Make component available globally
window.productDisplay = productDisplay;
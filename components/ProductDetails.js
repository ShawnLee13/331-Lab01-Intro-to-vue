const { defineComponent } = Vue;

const productDetails = {
    name: 'product-details',
    props: {
        details: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    template: `
        <div class="product-details">
            <h3>Product Details</h3>
            <ul>
                <li v-for="(detail, index) in details" :key="index">{{ detail }}</li>
            </ul>
            <p v-if="details.length === 0">No details available.</p>
        </div>
    `
};

// Make component available globally
window.productDetails = productDetails;
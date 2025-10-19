// ProductReview component for Vue application
const ProductReview = {
    template: `
        <div class="product-review">
            <h3>Reviews</h3>
            <div v-if="reviews.length === 0">No reviews yet. Be the first to review this product!</div>
            <div v-else class="review-list">
                <div v-for="(review, index) in reviews" :key="index" class="review-item">
                    <p class="review-name">{{ review.name }}</p>
                    <p class="review-rating">Rating: {{ '★'.repeat(review.rating) }}</p>
                    <p class="review-comment">{{ review.comment }}</p>
                </div>
            </div>
            
            <div class="review-form">
                <h4>Add a Review</h4>
                <input v-model="name" placeholder="Your name" class="review-input">
                <select v-model="rating" class="review-select">
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <textarea v-model="comment" placeholder="Your review" class="review-textarea"></textarea>
                <button @click="submitReview" class="button">Submit Review</button>
            </div>
        </div>
    `,
    data() {
        return {
            reviews: [],
            name: '',
            rating: 5,
            comment: ''
        }
    },
    methods: {
        submitReview() {
            if (this.name && this.comment) {
                this.reviews.push({
                    name: this.name,
                    rating: parseInt(this.rating),
                    comment: this.comment
                })
                // Reset form
                this.name = ''
                this.comment = ''
                this.rating = 5
            } else {
                alert('Please enter your name and comment')
            }
        }
    }
}

// Make component available globally
window.ProductReview = ProductReview;
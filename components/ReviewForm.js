const reviewForm = {
    template: 
        /*html*/ 
        `<form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>   
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
      
      <label for="recommend">Would you recommend this product?</label>
      <div>
        <input type="radio" id="recommend-yes" value="true" v-model="recommend">
        <label for="recommend-yes">Yes</label>
        <input type="radio" id="recommend-no" value="false" v-model="recommend">
        <label for="recommend-no">No</label>
      </div>

      <input class="button" type="submit" value="Submit">
    </form>`,
    setup(props, { emit }) {
        const { reactive, toRefs } = Vue;
        
        const form = reactive({
            name: '',
            review: '',
            rating: null,
            recommend: null
        })
        
        function onSubmit() {
            if (name.value === '' || review.value === '' || rating.value === null || recommend.value === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            
            const productReview = {
                name: name.value,
                review: review.value,
                rating: rating.value,
                recommend: recommend.value === 'true' ? true : false
            }
            emit('review-submitted', productReview)
            name.value = ''
            review.value = ''
            rating.value = null
            recommend.value = null
        }
        
        return {
            ...toRefs(form),
            onSubmit
        }
    }
}

// 确保在全局可用
window.reviewForm = reviewForm;
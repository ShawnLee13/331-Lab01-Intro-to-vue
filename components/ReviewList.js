const reviewList = {

    template: 
        /*html*/ 
        `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
        <li v-for="(review, index) in reviews" :key="index">
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            <span v-if="review.recommend" style="color: green;">Recommended</span>
            <span v-else style="color: red;">Not Recommended</span>
        </li>
        </ul>
    </div>
        `
    ,props: {
        reviews: {
            type: Array
        }
    },
    setup(props){
        const reviews = props.reviews
        return {
            reviews
        }
    }
}

// 确保在全局可用
window.reviewList = reviewList;
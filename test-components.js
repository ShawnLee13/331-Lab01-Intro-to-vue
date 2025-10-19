// Simple test script to check component registration and props
console.log('Testing Vue components...');

// Check if Vue is loaded
if (typeof Vue !== 'undefined') {
    console.log('✅ Vue.js is loaded successfully');
} else {
    console.log('❌ Vue.js is not loaded');
}

// Check if productDisplay component is registered
if (typeof productDisplay !== 'undefined') {
    console.log('✅ productDisplay component is defined');
    // Check if premium prop is defined
    if (productDisplay.props && productDisplay.props.premium) {
        console.log('✅ premium prop is correctly defined');
    }
} else {
    console.log('❌ productDisplay component is not defined');
}

// Add event listeners to Add to Cart buttons
setTimeout(() => {
    const appElement = document.getElementById('app');
    if (appElement) {
        console.log('✅ App element found');
        
        // Check if multiple product displays are rendered
        const productDisplays = document.querySelectorAll('.product-display');
        console.log(`✅ Found ${productDisplays.length} product display components`);
    }
}, 1000);
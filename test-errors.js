// Simple error logging script to help diagnose issues
console.log('Testing for JavaScript errors...');

// Try to access key components to verify they're loaded
setTimeout(() => {
    try {
        console.log('Vue is defined:', typeof Vue !== 'undefined');
        console.log('productDisplay component is defined:', typeof productDisplay !== 'undefined');
        console.log('ProductReview component is defined:', typeof ProductReview !== 'undefined');
        
        // Try to find app element
        const appElement = document.getElementById('app');
        console.log('App element found:', appElement !== null);
        
        // Check if Vue app has been mounted
        const vueApp = appElement?._vnode?.component?.proxy;
        console.log('Vue app mounted:', vueApp !== undefined);
        if (vueApp) {
            console.log('Cart value:', vueApp.cart);
        }
    } catch (error) {
        console.error('Error during testing:', error);
    }
}, 1000);
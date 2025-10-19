// 全面的应用诊断脚本
console.log('开始诊断应用...');

// 1. 检查Vue是否正确加载
if (typeof Vue !== 'undefined') {
    console.log('✅ Vue.js已成功加载');
    console.log('Vue版本:', Vue.version);
} else {
    console.log('❌ Vue.js未加载');
}

// 2. 检查DOM元素
const appElement = document.getElementById('app');
if (appElement) {
    console.log('✅ 找到了#app元素');
    console.log('app元素内容:', appElement.innerHTML);
} else {
    console.log('❌ 未找到#app元素');
}

// 3. 检查组件是否定义
if (typeof productDisplay !== 'undefined') {
    console.log('✅ productDisplay组件已定义');
    console.log('组件属性:', productDisplay.props);
} else {
    console.log('❌ productDisplay组件未定义');
}

// 4. 检查全局对象
console.log('全局productDisplay:', window.productDisplay);

// 5. 在页面加载后检查Vue应用状态
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        console.log('DOMContentLoaded后检查:');
        console.log('#app元素当前内容:', document.getElementById('app')?.innerHTML);
        
        // 检查是否有Vue应用实例
        const vueApp = document.querySelector('#app[data-v-app]');
        if (vueApp) {
            console.log('✅ Vue应用似乎已挂载');
        } else {
            console.log('❌ Vue应用可能未正确挂载');
        }
    }, 1000);
});

// 6. 提供手动检查功能
window.checkVueApp = function() {
    console.log('手动检查Vue应用:');
    console.log('当前URL:', window.location.href);
    console.log('Vue全局对象:', Vue);
    console.log('productDisplay组件:', productDisplay);
};

console.log('诊断脚本加载完成。可以在控制台执行checkVueApp()进行手动检查。');
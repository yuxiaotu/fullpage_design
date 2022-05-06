/**
 * 构建 DOM 节点
 */
const buildNode = function(children, targetElement, exp) {
  children.forEach(childItem => {
    const el = document.createElement(childItem.type);
    el.id = childItem.id;
    
    // 添加 style 样式
    if (Object.keys(childItem.styleSheet)) {
      for ([key, value] of Object.entries(childItem.styleSheet)) {
        el.style[key] = value;
      }
    }

    if (Object.keys(exp)) {
      for ([key, value] of Object.entries(exp)) {
        el.style[key] = value;
      }
    }

    // 添加 class 
    if (childItem.hasOwnProperty("className") && childItem.className) {
      el.classList.add(...childItem.className);
    }

    // 添加内容
    if (childItem.hasOwnProperty("content")) {
      el.innerHTML = childItem.content;
    };

    if (childItem.children) {
      buildNode(childItem.children, el, {});
    }

    targetElement.appendChild(el);
  });
}
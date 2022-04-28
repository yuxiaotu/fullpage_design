/**
 * 构建内容
 */
const buildNode = function(children, targetElement) {
  const tempElement = document.createElement('div');
  children.forEach(child => {
    const el = document.createElement(child.type);
    // 添加 style 样式
    if (Object.keys(child.styleSheet)) {
      for ([key, value] of Object.entries(child.styleSheet)) {
        el.style[key] = value;
      }
    }

    // 添加 class 
    if (child.className) {
      el.classList.add(...child.className);
    }

    // 添加内容
    el.innerHTML = child.content;
    tempElement.appendChild(el);
  });
  targetElement.appendChild(tempElement);
}
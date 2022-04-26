// 构建预览列表
const contentList = document.querySelector('.content-list')

const templatesCopy = templates;
templatesCopy.forEach(tem => {
  const tempElement = document.createElement('div');
  tem.children.forEach(child => {
    const el = document.createElement(child.type);
    
    if (Object.keys(child.styleSheet)) {
      for ([key, value] of Object.entries(child.styleSheet)) {
        el.style[key] = value;
      }
    }

    el.innerHTML = child.content;
    tempElement.appendChild(el); 
  });
  contentList.appendChild(tempElement);
});
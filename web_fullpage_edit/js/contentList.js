/**
 * 构建预览列表
 */
const contentList = document.querySelector('.content-list')
const templatesCopy = templates;
templatesCopy.forEach(tem => {
  buildNode(tem.children, contentList, tem.templateId);
})
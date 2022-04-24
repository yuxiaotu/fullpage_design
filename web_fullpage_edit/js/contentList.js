const contentList = document.querySelector('.content-list');
for (let i = 0; i < 3; i++) {
  const node = document.createElement('div');
  node.classList.add('list-item');
  contentList.appendChild(node);
} 
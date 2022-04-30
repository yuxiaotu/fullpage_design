// 深拷贝
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function deepCopy(target) {
  if (!isObject()) return target;
  let cloneTarget = Array.isArray(target) ? [] : {};
  Object.keys(target).forEach(key => {
    cloneTarget[key] = deepCope(target[key]);
  });
  return cloneTarget;
}
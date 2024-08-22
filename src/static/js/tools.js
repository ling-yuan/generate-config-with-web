/**
 * 格式化JSON
 * @param str
 * @returns {string}
 * */
function formatJson(str) {
    return JSON.stringify(JSON.parse(str), null, 4);
}

/**
 * 获取元素值
 * @param id
 * @returns {string}
 * */
function getValue(id) {
    return document.getElementById(id).value;
}

/**
 * 设置元素值
 * @param id
 * @param value
 * @returns {string}
 * */
function setValue(id, value) {
    document.getElementById(id).value = value;
}

/**
 * 复制文本到剪贴板
 * @param str
 * @returns {string}
 * */
function copyToClipboard(str) {
    var textarea = document.createElement('textarea');
    textarea.value = str;
    textarea.style.position = 'fixed';
    textarea.style.top = 0;
    textarea.style.left = 0;
    textarea.style.width = '0.01em';
    textarea.style.height = '0.01em';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}
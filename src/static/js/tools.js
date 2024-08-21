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

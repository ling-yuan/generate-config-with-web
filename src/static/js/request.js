const all_keys_str = [
    "request-type",
    "request-url",
    "request-method",
    "request-iteration_times",
    "request-proxy",
    "request-dont_filter"
]

const all_keys_dict = [
    "request-headers",
    "request-query_params",
    "request-json_params",
    "request-form_params"
]

// 监听输入事件，自动格式化json
all_keys_dict.forEach(key => {
    document.getElementById(key).addEventListener("input", function () {
        let value = getValue(key);
        if (value) {
            try {
                JSON.parse(value);
                setValue(key, formatJson(value));
            }
            catch (e) {
            }
        }
    })
})

/**
 * 获取请求参数
 * @return {[boolean, JSON]}
 * */
function getRequestParams() {
    let flag = true;
    let request = {};
    all_keys_str.forEach(key => {
        if (getValue(key)) {
            request[key] = getValue(key);
        }
    })
    all_keys_dict.forEach(key => {
        if (getValue(key)) {
            try {
                request[key] = JSON.parse(getValue(key));
            } catch (e) {
                alert("请检查 " + key + " 的格式是否正确");
                flag = false;
            }
        }
    })
    return [flag, request]
}

/**
 * 设置请求参数
 * @param dict
 * */
function setRequestParams(dict) {


    for (let key in dict) {
        let value = dict[key];
        // 如果为字符串
        if (typeof value === "string") {
            setValue(key, value);
        } else { // 如果为对象
            if (typeof value === "object") {
                setValue(key, JSON.stringify(value, null, 4));
            }
        }
    }
}
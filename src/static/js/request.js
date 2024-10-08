const all_keys_str = [
    "type",
    "url",
    "method",
    "iteration_times",
    "proxy",
    "dont_filter"
]

const all_keys_dict = [
    "headers",
    "query_params",
    "json_params",
    "form_params"
]

// 监听输入事件，自动格式化json
all_keys_dict.forEach(k => {
    let key = "request-" + k;
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
    all_keys_str.forEach(k => {
        let key = "request-" + k;
        if (getValue(key)) {
            request[k] = getValue(key);
        }
    })
    all_keys_dict.forEach(k => {
        let key = "request-" + k;
        if (getValue(key)) {
            try {
                request[k] = JSON.parse(getValue(key));
            } catch (e) {
                alert("请检查 " + key + " 的格式是否正确");
                flag = false;
            }
        }
    })
    return [flag, request]
}

/**
 * 设置默认界面内容
 * */
function setDefaultRequestParams() {
    tmpDict = {
        "request-type": "api",
        "request-url": "",
        "request-method": "GET",
        "request-iteration_times": "1",
        "request-proxy": "",
        "request-dont_filter": "True",
        "request-headers": "",
        "request-query_params": "",
        "request-json_params": "",
        "request-form_params": "",
    }
    for (let key in tmpDict) {
        setValue(key, tmpDict[key]);
    }
}

/**
 * 设置请求参数
 * @param dict
 * */
function setRequestParams(dict) {
    setDefaultRequestParams();
    for (let k in dict) {
        let key = "request-" + k;
        let value = dict[k];
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
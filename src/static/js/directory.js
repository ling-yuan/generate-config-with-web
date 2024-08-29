// 定义的键值对的全局变量
let nowstep = 'directory0';
let datadict = {};

/**
 * 初始化配置
 * @param {string} key 
 */
function initDict(key) {
    datadict[key] = {
        "request": {
            "type": "api",
            "method": "GET",
            "iteration_times": "1",
            "dont_filter": "True"
        },
        "response": {
            "fields": [],
            "save_fields": [],
            "type": "html"
        },
    }
}

/**
 * 设置阶段样式
 * @param {string} id
 */
function setDirectoryStyle(id1, id2) {
    let el1 = document.getElementById(id1);
    let el2 = document.getElementById(id2);
    if (el1) {
        el1.style.border = 'none';
    }
    if (el2) {
        el2.style.border = '1px solid #ccc';
    }
}

/**
 * 切换阶段
 * @param {string} id 
 */
function qiehuan(id) {
    setDirectoryStyle(nowstep, id);
    console.log(id);
    let requestData = getRequestParams();
    let responseData = getResponseParams();
    if (requestData[0] == true) {
        datadict[nowstep] = {
            "request": requestData[1],
            "response": responseData,
        }
        let data = datadict[id];
        setRequestParams(data["request"]);
        setResponseParams(data["response"]);
        nowstep = id;
    }
}

let number = 0;
/**
 * 生成新阶段
 * @param {string} id 
 */
function addList(id) {
    // 生成阶段
    let area = document.getElementById(id);
    let tmpId = randomId('directory-');
    let temp = `<li id="${tmpId}">
                    <span onclick="qiehuan('${tmpId}')" class="directory-list-left">
                        阶段-${++number}
                    </span>
                    <span class="directory-list-right">
                        <img src="./static/pic/directoryadd.png" onclick="addList('${tmpId}')" title="点击添加" />
                        <img src="./static/pic/directoryreduce.png" onclick="deleteDirectoryElement('${tmpId}')" title="点击删除" />
                    </span>
                </li>`;
    area.insertAdjacentHTML('afterend', temp);
    // 初始化阶段
    initDict(tmpId);
}

/**
 * 删除阶段
 * @param {string} id
 * */
function deleteDirectoryElement(id) {
    deleteElement(id);
    delete datadict[id];
}

/**
 * 刷新当前阶段配置
 * @param {string} id
 * */
function refreshNowstepConfig() {
    let requestData = getRequestParams();
    let responseData = getResponseParams();
    if (requestData[0] == true) {
        let tmpConfig = {
            "request": requestData[1],
            "response": responseData,
        }
        datadict[nowstep] = tmpConfig;
    }
}

/**
 * 获取所有阶段配置
 * @param {string} id
 * */
function getAllConfig() {
    refreshNowstepConfig();
    let data = [];
    let area = document.getElementById('directoryList');
    for (let i = 0; i < area.children.length; i++) {
        let id = area.children[i].id;
        data.push(datadict[id]);
    }
    return data;
}

initDict('directory0');
setDirectoryStyle('directory0', 'directory0');
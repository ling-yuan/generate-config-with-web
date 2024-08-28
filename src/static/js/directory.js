// 定义的键值对的全局变量
let nowstep = 'directory0';
let datadict = {};

function initDict(key) {
    datadict[key] = {
        "request": {
            "request-type": "api",
            "request-method": "GET",
            "request-iteration_times": "1",
            "request-dont_filter": "True"
        },
        "response": {},
    }
}
initDict('directory0');
// 定义点击函数
function qiehuan(id) {
    console.log(id);
    let requestData = getRequestParams();  //把需要的数据取出来
    // let responseData = getResponseParams();
    if (requestData[0] == true) {//加response
        datadict[nowstep] = {
            "request": requestData[1],
            "response": {},
        }
        let data = datadict[id];
        setRequestParams(data["request"]);
        // setResponseParams(data["response"]);
        nowstep = id;
    }
}

let number = 0;
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
                        <img src="./static/pic/directoryreduce.png" onclick="deleteElement('${tmpId}')" title="点击删除" />
                    </span>
                </li>`;
    area.insertAdjacentHTML('afterend', temp);
    // 初始化阶段
    initDict(tmpId);
}

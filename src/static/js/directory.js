// 定义的键值对的全局变量
let nowstep = 'directory0';
let datadict = {};
datadict[nowstep] =
{
    "request": {
        "request-type": "api",
        "request-method": "GET",
        "request-iteration_times": "1",
        "request-dont_filter": "True"
    },
    "response": {},
}
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
// // 添加函数
// let tmpdata = 0;
// function addList() {
//     let tmpId=randomId('directory-');
//     let List = document.getElementById("directoryList");

//     let newList = document.createElement("li");
//     newList.setAttribute("id",tmpId);
//     newList.setAttribute("onclick","qiehuan(this.id)");

//     newList.textContent = tmpdata;
//     tmpdata++;
//     List.appendChild(newList);
// }
let number = 0;
function addList(id) {
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
}

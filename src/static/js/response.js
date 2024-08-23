/**
 * 添加解析前处理
 * @param id
 * */
function addInputArea(id) {
    switch (id) {
        case 'before_process-list': {
            let area = document.getElementById(id);
            console.log("add: before_process-list")
            break;
        }
        case 'fields-list': {
            let area = document.getElementById(id);
            console.log("add: fields_list")
            // 随机8位id 0-9 a-z A-Z
            let tmpId = randomId('field-');
            let temp = `<div id="${tmpId}" class="response-field_item">
                            <label class="response-field-label">名称: </label>
                            <input class="input-data response-field-input" id='field_name' />&emsp; 
                            <label class="response-field-label">类型: </label>
                            <input class="input-data response-field-input" id='field_type' />
                            <img class="response-icon-del" src="./static/pic/del.png" onclick="deleteElement('${tmpId}')">
                            <br />
                            <label class="response-field-label">字段值: </label>
                            <input class="input-data response-field-input" id='field_value' />
                        </div>`;
            area.insertAdjacentHTML('beforeend', temp);
            break;
        }
        case 'save_fields-list': {
            let area = document.getElementById(id);
            console.log("add: save_fields-list")
            // 随机8位id 0-9 a-z A-Z
            let tmpId = randomId('save-');
            let temp = `<span id="${tmpId}">
                            <input class="input-data response-save-input" />
                            <img class="response-icon-del" src="./static/pic/del.png" onclick="deleteElement('${tmpId}')">
                        </span>`;
            area.insertAdjacentHTML('beforeend', temp);
            break;
        }
    }
}

/**
 * 删除解析前处理
 * @param id
 * */
function deleteElement(id) {
    document.getElementById(id).remove();
}


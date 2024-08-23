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
            let tmpId = randomId('field-');
            let temp = `<div id="${tmpId}" class="response-field_item">
                            <label class="response-field-label">名称: </label>
                            <input class="input-data response-field-input" id='field_name' /> &emsp;
                            <label class="response-field-label">类型: </label>
                            <input class="input-data response-field-input" id='field_type' /> &emsp;
                            <label class="response-field-label">长度: </label>
                            <select class="input-data response-select" id="field_save_length" aria-label="field_save_length">
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select> &emsp;
                            <img class="response-icon-del" src="./static/pic/del.png" onclick="deleteElement('${tmpId}')">
                            <br />

                            <label class="response-field-label">字段值: </label>
                            <input class="input-data response-field-input" id='field_value' /> &emsp;
                            <label class="response-field-label">默认值: </label>
                            <input class="input-data response-field-input" id='field_default' /> &emsp;
                            <label class="response-field-label">保存方法: </label>
                            <select class="input-data response-select" id="field_save_method" aria-label="field_save_method">
                                <option value="replace">替换原本的同名字段</option>
                                <option value="append">追加到原本的同名字段</option>
                                <option value="add">默认新增字段</option>
                            </select> &emsp;
                            <br />

                            <label class="response-field-label">后处理方法: </label>
                            <img class="response-icon-add" src="./static/pic/add2.png" onclick="addAfterProcessList('after_process-${tmpId}')">
                            <div class="response-process-list" id="after_process-${tmpId}"></div>
                        </div>`;
            area.insertAdjacentHTML('beforeend', temp);
            break;
        }
        case 'save_fields-list': {
            let area = document.getElementById(id);
            console.log("add: save_fields-list")
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
 * 添加解析后处理列表
 * @param id
 */
function addAfterProcessList(id) {
    let area = document.getElementById(id);
    console.log("add: " + id)
    let tmpId = randomId('after_process-');
    let temp = `后处理列表模板`;
    area.insertAdjacentHTML('beforeend', temp);
}

/**
 * 删除解析前处理
 * @param id
 * */
function deleteElement(id) {
    document.getElementById(id).remove();
}


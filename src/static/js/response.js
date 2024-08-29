/**
 * 添加解析前处理
 * @param id
 * @returns {null | string}
 * */
function addInputArea(id) {
    switch (id) {
        case 'before_process-list': {
            let area = document.getElementById(id);
            console.log("add: before_process-list");
            return null;
        }
        case 'fields-list': {
            let area = document.getElementById(id);
            console.log("add: fields_list");
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
                            </select> &nbsp;
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
            return tmpId;
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
            return tmpId;
        }
    }
}

/**
 * 添加解析后处理列表
 * @param id
 * @returns {string}
 */
function addAfterProcessList(id) {
    let area = document.getElementById(id);
    console.log("add: " + id)
    let tmpId = randomId('process_item-');
    let temp = `<div id="${tmpId}">
                    <label class="response-process-label">方法: </label>
                    <select class="input-data response-select" id="after_process_method">
                                <option value="format_value">格式化字符串</option>
                                <option value="str_remove_by_regex">正则表达式移除字符串</option>
                                <option value="str_replace_by_regex">正则表达式替换字符串</option>
                                <option value="str_extract_by_regex">正则表达式提取字符串</option>
                                <option value="html_removetag_by_xpath">xpath移除html标签</option>
                                <option value="html_removestyle_by_xpath">xpath移除html标签的style属性</option>
                                <option value="html_replacetag_by_xpath">xpath替换html标签</option>
                    </select> &emsp;
                    <label class="response-process-label">参数: </label>
                    <input class="input-data response-field-input" id="after_process_params" /> &emsp;
                    <img class="response-icon-del" src="./static/pic/del.png" onclick="deleteElement('${tmpId}')">
                </div>`;
    area.insertAdjacentHTML('beforeend', temp);
    return tmpId;
}

/**
 * 删除解析前处理
 * @param id
 * */
function deleteElement(id) {
    document.getElementById(id).remove();
}

/**
 * 获取所有保存字段的值
 * @returns {[]}
 */
function getSaveFields() {
    let area = document.getElementById('save_fields-list');
    let saveFields = [];
    for (let i = 0; i < area.children.length; i++) {
        let tmpSpan = area.children[i];
        // 获取其中的input
        let tmpInput = tmpSpan.children[0];
        saveFields.push(tmpInput.value);
    }
    return saveFields;
}

/**
 * 获取解析字段的配置
 * @returns {[{}]}
 */
function getResponseFieldsConfig() {
    let area = document.getElementById('fields-list');
    let fields = [];
    for (let i = 0; i < area.children.length; i++) {
        let tmpDiv = area.children[i];
        let tmpDict = {};
        tmpDict['name'] = tmpDiv.children[id = 'field_name'].value;
        tmpDict['type'] = tmpDiv.children[id = 'field_type'].value;
        tmpDict['save_length'] = tmpDiv.children[id = 'field_save_length'].value;
        tmpDict['value'] = tmpDiv.children[id = 'field_value'].value;
        tmpDict['default'] = tmpDiv.children[id = 'field_default'].value;
        tmpDict['save_method'] = tmpDiv.children[id = 'field_save_method'].value;
        let process_list = tmpDiv.children[tmpDiv.children.length - 1];
        let process_fields = [];
        for (let j = 0; j < process_list.children.length; j++) {
            let tmpProcess = process_list.children[j];
            let tmpProcessDict = {};
            tmpProcessDict['name'] = tmpProcess.children[id = 'after_process_method'].value;
            tmpProcessDict['args'] = tmpProcess.children[id = 'after_process_params'].value;
            process_fields.push(tmpProcessDict);
        }
        tmpDict['after_process'] = process_fields;
        fields.push(tmpDict);
    }
    return fields;
}

/**
 * 获取界面响应的配置
 * @returns {{}}
 * */
function getResponseParams() {
    let responseConfig = {};
    responseConfig['type'] = document.getElementById('response-type').value;
    responseConfig['save_fields'] = getSaveFields();
    responseConfig['fields'] = getResponseFieldsConfig();
    return responseConfig;
}

/**
 * 设置默认界面内容
 * */
function setDefaultResponseParams() {
    document.getElementById('response-type').value = "html";
    let area1 = document.getElementById('fields-list');
    area1.innerHTML = "";
    let area2 = document.getElementById('save_fields-list');
    area2.innerHTML = "";
}

/**
 * 设置响应界面的配置
 * @param dict
 * */
function setResponseParams(dict) {
    setDefaultResponseParams();
    if (dict['type']) {
        document.getElementById('response-type').value = dict['type'];
    }
    if (dict['save_fields']) {
        for (let i = 0; i < dict['save_fields'].length; i++) {
            let tmpValue = dict['save_fields'][i];
            let tmpId = addInputArea("save_fields-list");
            document.getElementById(tmpId).children[0].value = tmpValue;
        }
    }
    if (dict['fields']) {
        for (let i = 0; i < dict['fields'].length; i++) {
            let tmpValue = dict['fields'][i];
            let tmpId = addInputArea("fields-list");
            let tmpArea = document.getElementById(tmpId);
            ['type', 'name', 'save_method', 'save_length', 'default', 'value'].forEach(k => {
                tmpArea.children[id = 'field_' + k].value = tmpValue[k];
            })
            if (tmpValue['after_process']) {
                for (let j = 0; j < tmpValue['after_process'].length; j++) {
                    let tmpProcessValue = tmpValue['after_process'][j];
                    let tmpProcessId = addAfterProcessList("after_process-" + tmpId);
                    let tmpProcess = document.getElementById(tmpProcessId);
                    tmpProcess.children[id = 'after_process_method'].value = tmpProcessValue['name'];
                    tmpProcess.children[id = 'after_process_params'].value = tmpProcessValue['args'];
                }
            }
        }
    }
}
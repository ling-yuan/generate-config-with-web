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
                            <label class="response-field-label">字段值: </label>
                            <input class="input-data response-field-input" id='field_value' />
                            <br/>
                            <label class="response-field-label">默认值: </label>
                            <input class="input-data response-field-input" id='field_default' />
                            <label class="response-field-label">前处理方法: </label>
                            <input class="input-data response-field-input" id='field_before_process' />
                            <label class="response-field-label">后处理方法: </label>
                            <td class="response-content">
                            <select class="input-data response-select" id="field_after_process" aria-label="after_process">
                            <option value="str_remove_by_regex">移除字符串</option>
                            <option value="str_replace_by_regex">替换字符串</option>
                            <option value="str_extract_by_regex">提取字符串</option>
                            <option value="html_removetag_by_xpath">通过xpath移除html标签</option>
                            <option value="html_removestyle_by_xpath">通过xpath移除html标签的style属性</option>
                            <option value="html_replacetag_by_xpath"> 通过xpath替换html标签</option>
                            <option value="format_value"> 格式化字符串</option>
                            </select>
                            </td>
                            <br/>
                            <label class="response-field-label">字段长度: </label>
                            <input class="input-data response-field-input" id='field_save_length' />
                            <label class="response-field-label">字段保存方法: </label>
                            <td class="response-content">
                            <select class="input-data response-select" id="field_save_method" aria-label="save_method">
                            <option value="replace">替换原本的同名字段</option>
                            <option value="append">追加到原本的同名字段</option>
                            <option value="add">默认新增字段</option>
                            </select>
                            </td>
                            <img class="response-icon-del" src="./static/pic/del.png" onclick="deleteElement('${tmpId}')">
                            <br />
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


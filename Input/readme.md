### Input 输入框

> 输入框可以简单为“**表单中的输入框**”和“**普通输入框**”

* 对比

|              | Form-Input                                                   | Normal-Input                                                 |
| -----------: | :----------------------------------------------------------- | :----------------------------------------------------------- |
|       初始化 | initialValue                                                 | defautValue                                                  |
|         验证 | validator（自动）                                            | 手动验证                                                     |
| **更新值域** | form.setFieldsValue                                          | 通过state或者props，改变value属性                            |
| **获取值域** | 1. form.getFieldValue(直接获取)<br/>2. form.validateFields(验证获取) | 1. 通过state或者props传递<br/>2. 通过onChange事件的e.target.value |

---
> * 有时候遇到输入框的内容如要通过模态框取值情况

![](https://github.com/sheenden0722/ReactAntdNotes/raw/master/img/inputModalSelect.png)

* 如果在表单中，使用点击右侧的+号图标弹出模态框

![](https://github.com/sheenden0722/ReactAntdNotes/blob/master/img/inputFromModal.png)

```
<Input disabled={true}/>
<Icon
    type='plus-circle-o'
    style={{
        cursor: 'pointer',
        color:'red',
        position:'absolute',
        top: '20%',
        marginLeft: 7
    }}
    onClick={()=>this.showModal('xxxx')}
/>
```

* 如果是普通输入框，使用点击输入框弹出模态框

![](https://github.com/sheenden0722/ReactAntdNotes/blob/master/img/inputOnclickModal.png)

```
<Input 
    style={{width:200}}
    value={this.state.inputValue}
    onClick={() => this.showModal('xxxx')}
>
```

> **原因**<br/>
> 在表单中如果不禁用input,在使用Tab键时，焦点可进入输入框，可编辑<br/>
> 在普通的input中虽然没有禁用，使用Tab键时，因为使用了value属性，所以是不能编辑

### Input 输入框

> 输入框可以简单为**“表单中的输入框”**和**“普通输入框”**

* 对比

|              | Form-Input                                                   | Normal-Input                                                 |
| -----------: | :----------------------------------------------------------- | :----------------------------------------------------------- |
|       初始化 | initialValue                                                 | defautValue                                                  |
|         验证 | validator（自动）                                            | 手动验证                                                     |
| **更新值域** | form.setFieldsValue                                          | 通过state或者props，改变value属性                            |
| **获取值域** | 1. form.getFieldValue(直接获取)<br/>2. form.validateFields(验证获取) | 1. 通过state或者props传递<br/>2. 通过onChange事件的e.target.value |




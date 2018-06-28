### 编辑表单后，点击保存，走完服务后，刷新表单
* 可不需要这个，但是在形如下图的，tab切换，如果在切换时要刷新“基本信息”
* 假如在“基本信息”tab修改文字后，没有点击保存，点击其他tab后，再点击‘基本信息’
* 此时应该是刷新数据，使用服务返回的值，但是表单并没有刷新

>表单的初始化使用的是 initialValue，只在第一次加载组件时赋值，当走完服务，想刷新表单数据时，initialValue不可用

![图片](https://raw.githubusercontent.com/sheenden0722/ReactAntdNotes/master/img/tab_form.jpg)

### 初步方案

>使用 componentWillReceiveProps + setFieldsValue
```
componentWillReceiveProps(nextProps) {
    const form = this.props.form;
    form.setFieldsValue({key1: 'valu1'});
    form.setFieldsValue({key2: 'valu2'});
}
```
>结果点击保存按钮后，页面陷入死循环

### 官方推荐
>使用 mapPropsToFields ，但具体没有使用过
>【初步预计】，如果表单项特别多（20项左右的话），该方法写起来会很让人心烦，应该需要使用 onFieldsChange 

### 个人方案
>将“基本信息”表单封装成一个组件，为其属性添加唯一的key, 每次保存服务成功后，生成一个新的uuid,这样initialValue就可以赋值
```
      <TabPane tab="基本信息" key="t1">
            <BasicInfo
                ref='basicInfo'
                key={this.props.basicInfoUuid}
                basicInfoData={this.props.basicInfoData}
             />
     </TabPane>
```
* props数据都是从model层传来的数据
* model层保存成功后，生成basicInfoUuid

### 网上另外一种方案
*使用componentWillReceiveProps
```
componentWillReceiveProps(nextProps) {
    if (nextProps.xxxx && !this.props.xxxx) {
        this.props.form.setFieldsValue(nextProps.xxxx)
    }
}
```
>当第nextProps有值，而this.prop.xxxx还没有给赋值，说明是第一次改变xxxx属性，所以只会执行一次
>该方案没尝试过，初步预计，如果表单有20项的话，this.props.form.setFieldsValue(nextProps.xxxx)
>需要写20次

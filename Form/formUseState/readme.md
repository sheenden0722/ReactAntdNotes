### 表单中使用state

1. 使用内部state

> 在表单内部使用自己的state，可以动态渲染

---



2. 使用外部state(通过props传入表单)

> 当外部state传入当前表单时，如果state发生了变化，在表单中填入的值将会**清空**还原到原来的值

---



3. 外部引用表单内部的state

* 方案1：使用**“this.refs.xxxxForm.state”**来引用state的值
* 方案2：在外部传入function，在表单里面调用该function，通过传参方式返回表单的state

>  结论：两种方案都不行，两种方案都获取不到表单的state，获取的值都是undefined。


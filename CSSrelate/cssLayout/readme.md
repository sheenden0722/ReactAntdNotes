### CSS布局相关

---

* #### 1、 CSS中让两个div块级元素在同一行

> 方案一 ： 使用 float（不推荐），边距，大小，适配体验都不好

```
<div>
	<div style={{float:'left'}}>
	<div style={{float:'left'}}>
</div
```

---

> 方案二 ： 使用 inline-block，需要对每个div设置 inline-block

```
<div>
	<div style={{display:'inline-block'}}>
	<div style={{display:'inline-block'}}>
</div
```

---

> 方案三 ： 使用 弹性布局 Flex

```
<div style={{display:'flex', flexDirection:'row'}}>
	<div>
	<div>
</div
```

注意，在使用Flex布局时，外层容器可添加如下样式

* **justify-content** （左右对齐）

```
justifyContent:'flex-start'，          //内部div(子容器)，左对齐
justifyContent:'flex-end'，            //内部div(子容器)，右对齐
justifyContent:'center'，              //内部div(子容器)，水平居中对齐
```

* **align-items** （上下对齐）

```
align-items:'flex-start'，             //内部div(子容器)，顶端对齐
align-items:'flex-end'，               //内部div(子容器)，底端对齐
align-items:'flex-start'，             //内部div(子容器)，垂直居中对齐
```


## Hello React TodoList

有两个组件：

- TodoList：最外层组件，由于自身有数据，所有用类组件方式，[具体代码](https://github.com/chenshuhong/ReactFontEndTodo/blob/react_todolist/src/components/TodoList/index.js)

  ```
  export default class extends React.Component{

    constructor(props){
      super(props)
      this.state={
        ...
      }
    }

    //这是一个通用更新state的方法
    //单个数据可以 this.updateValue('value','name')
    //多个数据可以传入数组 this.updateValue(['value1','value2'],['name1','name2'])
    updateValue(value,name){
      let changeState = {}
      console.log(Object.prototype.toString.call(name))
      if (Object.prototype.toString.call(name)==='[object Array]'){
        name.map((name,index)=>{
          changeState[name]=value[index]
        })
      } else {
        changeState[name]=value
      }
      this.setState(changeState)
    }


    render(){
        return (
        ...
        )
    }
  }
  ```

- TodoItem:列表项，记录数据，提供删除和新增按钮，不需要自身数据和维护生命周期，所有用函数式组件实现

  ```
  export default function (props) {
    return (
      <ListItem actions={[<a onClick={props.onDeleteItem}>delete</a>, <a onClick={props.showEditModel}>edit</a>]}>{props.item}</ListItem>
    )
  }
  ```

#### 演示效果：![](https://user-images.githubusercontent.com/11794327/46582081-49ebb000-ca74-11e8-9be6-81ae85fce2db.gif)
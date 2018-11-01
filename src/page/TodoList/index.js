/**
 * @Author: 陈树鸿
 * @Date: 2018--06
 */
import React from 'react'
import { List,Input,Button,Modal } from 'antd';
import TodoItem from 'components/TodoItem'
import {connect} from "react-redux";
import {injectReducer } from 'reducer/index'
import reducer from './reducer'

injectReducer('todolist',reducer)

class TodoList extends React.Component{

  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      data:[],
      modalVisible:false,
      updateValue:'',
      updateIndex:''
    }
  }

  componentDidMount(){

  }

  addTodoItem(){
    let data = [...this.state.data]
    data.push(this.state.inputValue)
    this.myUpdateState([data,''],['data','inputValue'])
  }

  deleteItem(index){
    let data = [...this.state.data]
    data.splice(index,1)
    this.myUpdateState(data,'data')
  }

  showEditModel(index){
    let data = this.state.data
    this.myUpdateState([true,data[index],index],['modalVisible','updateValue','updateIndex'])
  }

  updateInputValue(){
    let data = [...this.state.data]
    data.splice(this.state.updateIndex,1,this.state.updateValue)
    this.myUpdateState([data,false,'',''],['data','modalVisible','updateValue','updateIndex'])
  }

  render(){
    let state = this.state
    let {data} = this.props
    return (
      <div className='mg1'>
        <List bordered dataSource={data} renderItem={(item,index)=>(<TodoItem key={index} item={item} showEditModel={()=>this.showEditModel(index)} onDeleteItem={()=>this.deleteItem(index)}/>)}/>
        <div className='mg1t flex-box'>
          <Input className='flex-grow-1' placeholder={'please input...'} value={state.inputValue} onChange={(e)=>this.myUpdateState(e.target.value,'inputValue')}/>
          <Button disabled={!state.inputValue} type='primary' className='mg1l' onClick={()=>this.addTodoItem()}>添加</Button>
        </div>
        <Modal
          title="update item"
          visible={state.modalVisible}
          onCancel={()=>this.myUpdateState(false,'modalVisible')}
          onOk={()=>this.updateInputValue()}>
          <Input placeholder={'please input...'} value={state.updateValue} onChange={(e)=>this.myUpdateState(e.target.value,'updateValue')}/>
        </Modal>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  ...state.todolist
})

export default connect(mapStateToProps)(TodoList)
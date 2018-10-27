/**
 * @Author: 陈树鸿
 * @Date: 2018--06
 */
import React from 'react'
import { List,Input,Button,Modal } from 'antd';
import TodoItem from '../TodoItem'

export default class extends React.Component{

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

  updateValue(value,name){
    console.log('todo list')
    let changeState = {}
    if (Object.prototype.toString.call(name)==='[object Array]'){
      name.map((name,index)=>{
        changeState[name]=value[index]
      })
    } else {
      changeState[name]=value
    }
    this.setState(changeState)
  }

  addTodoItem(){
    let data = this.state.data
    data.push(this.state.inputValue)
    this.updateValue([data,''],['data','inputValue'])
  }

  deleteItem(index){
    let data = this.state.data
    data.splice(index,1)
    this.updateValue(data,'data')
  }

  showEditModel(index){
    let data = this.state.data
    this.updateValue([true,data[index],index],['modalVisible','updateValue','updateIndex'])
  }

  updateInputValue(){
    let data = this.state.data
    data.splice(this.state.updateIndex,1,this.state.updateValue)
    this.updateValue([false,'',''],['modalVisible','updateValue','updateIndex'])
  }

  render(){
    let state = this.state
    return (
      <div className='mg1'>
        <List bordered dataSource={state.data} renderItem={(item,index)=>(<TodoItem key={index} item={item} showEditModel={()=>this.showEditModel(index)} onDeleteItem={()=>this.deleteItem(index)}/>)}/>
        <div className='mg1t flex-box'>
          <Input className='flex-grow-1' placeholder={'please input...'} value={state.inputValue} onChange={(e)=>this.updateValue(e.target.value,'inputValue')}/>
          <Button disabled={!state.inputValue} type='primary' className='mg1l' onClick={()=>this.addTodoItem()}>添加</Button>
        </div>
        <Modal
          title="update item"
          visible={state.modalVisible}
          onCancel={()=>this.updateValue(false,'modalVisible')}
          onOk={()=>this.updateInputValue()}>
          <Input placeholder={'please input...'} value={state.updateValue} onChange={(e)=>this.updateValue(e.target.value,'updateValue')}/>
        </Modal>
      </div>
    )
  }

}

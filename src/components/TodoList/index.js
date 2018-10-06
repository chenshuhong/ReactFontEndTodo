/**
 * @Author: 陈树鸿
 * @Date: 2018--06
 */
import React from 'react'
import { List,Input,Button } from 'antd';
import TodoItem from '../TodoItem'

export default class extends React.Component{

  constructor(props){
    super(props)
    this.state={
      inputValue:'',
      data:[]
    }
  }

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
    //console.log(changeState)
    this.setState(changeState)
  }

  addTodoItem(){
    let data = this.state.data
    data.push(this.state.inputValue)
    this.updateValue([data,''],['data','inputValue'])
  }

  render(){
    let state = this.state
    return (
      <div className='mg1'>
        <List bordered dataSource={state.data} renderItem={(item,index)=>(<TodoItem key={index} item={item}/>)}/>
        <div className='mg1t flex-box'>
          <Input className='flex-grow-1' placeholder={'请输入'} value={state.inputValue} onChange={(e)=>this.updateValue(e.target.value,'inputValue')}/>
          <Button disabled={!state.inputValue} type='primary' className='mg1l' onClick={()=>this.addTodoItem()}>添加</Button>
        </div>
      </div>
    )
  }

}

/**
 * @Author: 陈树鸿
 * @Date: 2018--14
 */
import React from 'react'
let CryptoJS = require('crypto-js')

export default class extends React.Component {
  constructor(props){
    super(props)
    this.state={
      result:'result'
    }
  }
  componentDidMount(){
    let scanInfo = 'fabf22fe56b237f1ee895250402d5592234f07e0d03cd2c534dcedb8e9023da3bb2847fd2cd62ca650ffac54cf1781535e30bf93832a13037ff08a306e6639e6'
    let iv = CryptoJS.enc.Utf8.parse([ 99, 64, 0, 37, 73, 36, 38, 109 ].join(''))
    let key = CryptoJS.enc.Utf8.parse('U2FsdGVkX1/QkL6Or780QEawX6aarxzs+wL1iJ/EPCPJxiFHUSglH/GGCyImZ3Nk');
    let result = CryptoJS.TripleDES.encrypt(scanInfo,key,{
      iv,
      mode:CryptoJS.mode.CBC,
      padding: 	CryptoJS.pad.Pkcs7
    })
    console.log(result.ciphertext.toString())
    /*this.setState({
      result
    })*/
  }

  render(){
    return (
      <div>{this.state.result}</div>
    )
  }
}
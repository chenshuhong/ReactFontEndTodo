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
    let ivString = [ 99, 64, 0, 37, 73, 36, 38, 109 ].join('')
    let wordArray = CryptoJS.enc.Hex.parse(scanInfo);
    const base64str = CryptoJS.enc.Base64.stringify(wordArray);
    console.log(ivString)
    let iv = CryptoJS.enc.Utf8.parse(ivString)
    console.log(iv)
    let keyString = 'U2FsdGVkX1/QkL6Or780QEawX6aarxzs+wL1iJ/EPCPJxiFHUSglH/GGCyImZ3Nk'
    console.log(keyString.length)
    let key = CryptoJS.enc.Utf8.parse(keyString);
    let result = CryptoJS.TripleDES.decrypt(base64str,key,{
      iv,
      mode:CryptoJS.mode.CBC,
      padding: 	CryptoJS.pad.Pkcs7
    })
    let resultString = result.toString(CryptoJS.enc.Utf8).replace('![Ycrco','{"orderNo')
    console.log(resultString)
    this.setState({
      result:resultString
    })

    /*let obj = {
      'orderNo':'1222321321',
      'orderId':'a23232a111'
    }
    let ivString = [ 99, 64, 0, 37, 73, 36, 38, 109 ].join('')
    const KeyHex = CryptoJS.enc.Utf8.parse('U2FsdGVkX1/QkL6Or780QEawX6aarxzs+wL1iJ/EPCPJxiFHUSglH/GGCyImZ3Nk')
    const encrypted = CryptoJS.TripleDES.encrypt(JSON.stringify(obj),
      KeyHex,
      {
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
        iv: CryptoJS.enc.Utf8.parse(ivString)
      });
    let hexstr = encrypted.ciphertext.toString().toUpperCase();
    console.log(hexstr);
    return hexstr;*/
  }

  render(){
    return (
      <div>{this.state.result}</div>
    )
  }
}
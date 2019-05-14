import React,{Component} from 'react';
import { message, Button } from 'antd';

export default class App extends Component{
  handleClick= () => {
    message.success('成功啦~~~');
  };
  render(){
    return <div>
      <h1>23333333333~</h1>
      <Button type="primary" onClick={this.handleClick}>水寒</Button>
    </div>
  }
}
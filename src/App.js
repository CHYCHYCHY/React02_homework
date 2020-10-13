import React, { Component } from 'react';
import AddMessage from './addMessage';
import "./index.css";
import List from './list';
import Title from './title';

class App extends Component {
  state = {
    data: [
      {
        id: 0,
        name: "昵称",
        title: "第一条"
      }
    ]
  }
  add = (newName, newTodo) => {
    let { data } = this.state;
    data.push({
      id: Date.now(),
      name: newName,
      title: newTodo
    })
    this.setState({
      data
    })
  }

  remove=(id)=>{
    let {data} = this.state;
    this.setState({
      data:data.filter(item=>item.id!==id)
    })
  }

  render() {
    let { data } = this.state;

    return <section className="wrap">
      <Title />
      <AddMessage
        add={this.add}
      />
      <List data={data}
        remove = {this.remove}
      />
    </section>
  }
}

export default App;
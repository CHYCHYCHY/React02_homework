import React, { Component } from "react";
export default class AddMessage extends Component {
    state = {
        val: "",
        vals: ""
    }
    render() {
        let { add } = this.props;
        let { val } = this.state;
        let { vals } = this.state;
        return <div className="addMessage">
            <input type="text"
                placeholder="请输入昵称"
                value={val}
                onChange={({ target }) => {
                    this.setState({
                        val: target.value
                    })
                }}
            />
            <textarea placeholder="请输入留言"
                value={vals}
                onChange={({ target }) => {
                    this.setState({
                        vals: target.value
                    })
                }}
            ></textarea>
            <button onClick={() => {
                if (val.trim() && vals.trim()) {
                    add(val, vals);
                    this.setState({
                        val: "",
                        vals: ""
                    })
                }
            }}>提交留言</button>
        </div>
    }
}
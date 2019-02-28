import React, { Component } from 'react'
// import { userInfo } from 'os';

class Clock extends Component{
    constructor(){
        super()
        this.state = {
            date: new Date()
        }
    }

    /**
     * 组件渲染前设置一个定时器，每秒更新一次时间
     */
    componentWillMount(){
        this.timer = setInterval(()=>{
            this.setState({date: new Date()})
        }, 1000)
        // ajax.get('http://json-api.com/user', (userData)=>{
        //     this.setState({
        //         userData
        //     })
        // })
    }

    /**
     * 组件销毁时清除定时器，不然隐藏时钟的时候由于还在不断地setState，
     * 因为JavaScript的闭包特性，这样会导致严重的内存泄露
     */
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
                <h1>
                    <p>现在的时间是</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock
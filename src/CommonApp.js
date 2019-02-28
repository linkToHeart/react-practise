import React, { Component } from 'react'
import CommonInput from './CommonInput'
import CommonList from './CommonList'

class CommonApp extends Component {

    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }

    handleSubmitComment(comment){
        this.state.comments.push(comment)
        this.setState({
            comments: this.state.comments
        })
    }

    /**
     * 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
     */
    componentWillMount(){
        
    }

    /**
     * 组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
     */
    componentDidMount(){

    }

    /**
     * 组件对应的 DOM 元素从页面中删除之前调用。
     */
    componentWillUnmount(){

    }

    render(){
        return(
            <div className='wrapper'>
                <CommonInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommonList comments={this.state.comments}/>
            </div>
        )
    }
}

export default CommonApp
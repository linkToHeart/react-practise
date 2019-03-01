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

    _loadComments(){
        let comments = localStorage.getItem('comments')
        if(comments){
            comments = JSON.parse(comments)
            this.setState({ comments })
        }
    }

    _saveComments(comments){
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    handleSubmitComment(comment){
        if(!comment) return
        if(!comment.username) return alert('请输入用户名！')
        if(!comment.content) return alert('请输入评论内容！')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({
            comments
        })
        this._saveComments(comments)
    }

    /**
     * 组件挂载开始之前，也就是在组件调用 render 方法之前调用。
     */
    componentWillMount(){
        this._loadComments()
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

    handleDeleteComment(index){
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({comments})
        this._saveComments(comments)
    }

    render(){
        return(
            <div className='wrapper'>
                <CommonInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommonList 
                    comments={this.state.comments}
                    onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommonApp
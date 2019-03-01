import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommonInput extends Component {

    static propTypes={
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    handleUsernameChange(event){
        this.setState({
            username: event.target.value
        })
    }

    handleContentChange(event){
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(){
        if(this.props.onSubmit){
            // const {username, content} = this.state
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: +new Date()
            })
        }
        this.setState({content:''})
    }

    componentWillMount(){
        this._loadUsername()
    }

    componentDidMount(){
        this.textarea.focus()
    }

    _saveUsername(username){
        localStorage.setItem('username', username)
    }

    _loadUsername(){
        const username = localStorage.getItem('username')
        if(username){
            this.setState({ username })
        }
    }

    handleUsernameBlur(){
        this._saveUsername(this.state.username)
    }

    render(){
        return(
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input onChange={this.handleUsernameChange.bind(this)}
                               value={this.state.username}
                               onBlur={this.handleUsernameBlur.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea} 
                                  onChange={this.handleContentChange.bind(this)} 
                                  value={this.state.content}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommonInput
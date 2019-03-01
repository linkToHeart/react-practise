import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component{

    static propTypes={
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor(){
        super()
        this.state = {timeString:''}
    }

    componentWillMount(){
        this._updateCommentTime()
        this.timer = setInterval(
            this._updateCommentTime.bind(this)
        , 5000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    _updateCommentTime(){
        const comment = this.props.comment
        const duration = (+new Date() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60 
            ? `${Math.round(duration / 60)}分钟前` 
            : `${Math.round(Math.max(duration, 1))}秒钟前`
        })
    }

    _getProcessedContent(content){
        /**用了dangerouslySetInnerHTML会有xss漏洞，
         * 所以前5个是为了防止xss漏洞对字符串进行转义 */
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleCommentDelete(){
        if(this.props.onDeleteComment){
            this.props.onDeleteComment(this.props.index)
        }
    }

    render(){
        const comment = this.props.comment

        return(
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}</span>：
                </div>
                <p dangerouslySetInnerHTML={{
                    __html:this._getProcessedContent(comment.content)
                }} />
                <span className='comment-createdtime'>{this.state.timeString}</span>
                <span className='comment-delete' 
                      onClick={this.handleCommentDelete.bind(this)}>
                    删除
                </span>
            </div>
        )
    }
}

export default Comment
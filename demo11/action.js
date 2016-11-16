/**
 * Created by yjf on 16-9-25.
 */
var LikeButton = React.createClass({
    getInitialState:function() {
        return {liked:false};
    },
    handleClick:function(even){
        this.setState({liked: !this.state.liked});
    },
    render:function(){
        var text =this.state.liked?'like':'dislike';
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我。点切换状态。
            </p>
        );
    }
});
ReactDOM.render(
    <LikeButton/>,
    document.getElementById('example')
);
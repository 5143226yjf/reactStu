/**
 * Created by yjf on 16-9-25.
 */
/*var myComponent=<div className="foo"/>;
ReactDOM.render(
    myComponent,
    document.getElementById('example')
);*/
var WebSite = React.createClass({
    getInitialState:function(){
        return {
            name:'菜鸟教程',
            site:'http://www.runoob.com'
        };
    },
    render:function(){
        return (
            <div>
                <Name name={this.props.name}/>
                <Link site={this.props.site}/>
            </div>
        );
    }
});

var Name=React.createClass({
    render:function(){
        return (
            <h1>{this.props.name}</h1>
        );
    }
});

var Link = React.createClass({
    render:function(){
        return (
            <a href={this.props.site}>{this.props.site}</a>
        );
    }
});
ReactDOM.render(
    <WebSite name="菜鸟教程" site="http://www.runoob.com"/>,
    document.getElementById('example')
);
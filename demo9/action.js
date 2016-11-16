var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
var arr=[
    <h2>菜鸟教程</h2>,
    <h2>react study</h2>
];
var i=2;
ReactDOM.render(
    <div>
        <h1 style = {myStyle}>{i == 1 ? 'True' : 'False'}</h1>
        {arr}
    </div>,
    document.getElementById('example')
);


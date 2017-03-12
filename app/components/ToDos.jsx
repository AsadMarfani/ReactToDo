var React = require('react');

var ToDos = React.createClass({
    render: function () {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var returnDataAndMsg = ()=>{

            let msg = 'Created At : ';
            let createCompleteDate = createdAt;

            if(completedAt) {
                msg = 'Completed At : ';
                createCompleteDate = completedAt;
            }
          return msg + createCompleteDate;
        };
        return(
            <div onClick = {()=>{
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked = {completed}/> {text}
                <p>{returnDataAndMsg()}</p>
            </div>
        );
    }
});

module.exports = ToDos;
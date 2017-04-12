import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Login = React.createClass({
    _onLogIn(){
        //console.log(id);
        var {dispatch} = this.props;
        dispatch(actions.startLogin());
    },
    render(){
        return (
            <div className = "row">
                <h2 className = "page-title">ToDo App!</h2>
                <div className="columns small-centered small-10 medium-6 large-4">
                    <div className="callout auth-callout">
                        <h4>Login</h4>
                        <p>Login With GitHub Account Below</p>
                        <button className = "button" onClick = {this._onLogIn}>Login With GitHub</button>
                    </div>
                </div>
            </div>
        )
    }
});

export default Redux.connect()(Login);

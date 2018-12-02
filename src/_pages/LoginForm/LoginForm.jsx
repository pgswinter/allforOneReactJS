import React from 'react';
// import fetchAccount from "../../_services/authentication.services";

// const dataAuth = fetchAccount;

import { connect } from "react-redux";
import { getAccounts, getPermission } from "../../redux/actions";

class LoginForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            username:{
                name:'username',
                value:''
            },
            password:{
                name:'password',
                value:''
            }
        }
        
        // this.state = {
        //     username: "",
        //     password: ""
        // }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    // Execute immediatly after component was rendered
    // Using load data one time, avoid callbacl data when render component
    componentDidMount() {
        this.props.getAccounts();
        this.props.getPermission();
	}

    handleChange(e){
        // const {name,value} = e.target;
        // this.setState({
        //     [name]: value
        // })

        const changeAccount = Object.assign({},this.state);
        if(changeAccount.username.name === e.target.name){
            changeAccount.username.value = e.target.value;
        }
        if(changeAccount.password.name === e.target.name){
            changeAccount.password.value = e.target.value;
        }
        this.setState(changeAccount);
    }

    handleSubmit(e){
        e.preventDefault();
        let checkAuth = this.props.accountsList.accounts.filter(item => {
            return item.username === this.state.username.value && item.password === this.state.password.value
        })

        if(checkAuth.length){
            console.log("LOGIN SUCCESS!");
        }else{
            console.log("LOGIN FAIL!");
        }
    }

    render(){
        return <div className="container">
            <h1>Welcome to my app! There is login form</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="group-form">
                    <label htmlFor="">Username: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.username.value} name="username" placeholder="Please type your username"/>
                </div>
                <div className="group-form">
                    <label htmlFor="">Password: </label>
                    <input type="password" onChange={this.handleChange} value={this.state.password.value} name="password" placeholder="Please type your password"/>
                </div>
                <button>submit</button>
            </form>
        </div>
    }
    
}


// const connectedLoginForm = (LoginForm);

const mapStateToProps = state => ({
    accountsList: state.accountsReducer,
    permissionsList: state.permissionReducer
});

const mapDispatchToProps = dispatch => (
    {
        getAccounts: () => {
            dispatch(getAccounts());
        },
        getPermission: () => {
            dispatch(getPermission());
        }
    }
);

const connectedLoginForm = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export { connectedLoginForm as LoginForm };
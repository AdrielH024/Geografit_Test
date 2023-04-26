import React from 'react';
class Formtolog extends React.Component {
    constructor(props){
        super(props);
        this.state = {user:""};
        this.state = {pass:""};
        this.state = {teste: true};

        this.handleChangepass = this.handleChangepass.bind(this);
        this.handleChangeuser = this.handleChangeuser.bind(this);
        this.Compare = this.Compare.bind(this);
    }

    handleChangeuser(event){
        this.setState({user: event.target.user});
    }

    handleChangepass(event){
        this.setState({pass: event.target.pass});
    }


    Compare(use,pas){
        console.log(use + pas);

        if(this.state.user == 'admin' && this.state.pass =='123'){
            alert("acerto");
        }
    }

    render(){
        return(

                <label>
                    nome:
                    <input type="text" value={this.state
                    .user} onChange={this.handleChangeuser}/>
                    senha:
                    <input type="text" value={this.state
                    .pass} onChange={this.handleChangepass}/>
                    <button onClick={this.Compare(this.state.user,this.state.pass)}>entrar</button>
                </label>
        );
    }
}

function Loginpage(props){
    var islogged = false;
    if (islogged== false){
        return(
            <div>
                <div id="art">
                <Formtolog/>
                </div>
            </div>
        );
    }
}

export default Loginpage;
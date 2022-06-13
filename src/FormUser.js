import React from 'react';
import axios from 'axios';
import ExampleComponent from './Captcha13';
import FormSearch from './FormSearch';
import Captcha12 from './Captcha';


class FormUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: '' };
        this.state = { password: '' };
        this.state = { token: '' };
        this.state = { hasToken: false };
        this.state = { cursor: 'pointer' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setToken(token) {
        this.setState(this.state.token, token);
    }

    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        if (event.target.name === 'user') {
            this.setState({ username: event.target.value });
        } else {
            this.setState({ password: event.target.value });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        //console.log('cpt: ' + window.cpt + ' length: ' + window.cpt.length);
        if (window.cpt.length < 5) {
            alert('click on captcha to continue using the system');
            return;
        } else {           

            const params = { "username": this.state.username, "password": this.state.password }

            axios.post('https://opmet.decea.mil.br/adm/login', params).then((response) => {
                this.setState({ token: response.data.authorization });
                this.setState({ hasToken: true });
            }).catch(error => {
                console.log(error);
                console.log(error.request.status);
                var statusRet;
                var retorno = error.message;
                if (error.response.data) {
                    retorno = error.response.data.messages;
                    console.log(retorno['pt-BR']);
                    statusRet = retorno['en-US'];
                } else {
                    retorno = error.message;
                    console.log(retorno);
                    statusRet = retorno;
                }
                this.setState({ token: statusRet });
                this.setState({ hasToken: false });
            });
        }
    }

    changeCursor() {
        if (this.state.cursor === 'wait') {
            return 'pointer';
        }
        return 'wait';
    }

    render() {
       
        return (
            <form onSubmit={this.handleSubmit}  className='t1'>
                <fieldset>
                    <legend>
                        <h2>OPMET System - Authenticate to use web services</h2>
                    </legend>
                    <label>
                        User:
                        <input type="text" name="user" id="user" username={this.state.username} onChange={this.handleChange} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" id="password" password={this.state.password} onChange={this.handleChange} />
                    </label>

                    <input type="submit" value="Get OPMET Token"  style={{ cursor: this.state.cursor }} />
                    <br></br>
                    <p></p>
                    
					
                    <ExampleComponent />
                    <Captcha12 />

                    <div>
                        <p className='q2' >Token: <br></br> {this.state.token}</p>
                    </div>
                </fieldset>

                <FormSearch hasToken={this.state.hasToken} token={this.state.token} />


            </form>

        );
    }
}
export default FormUser;
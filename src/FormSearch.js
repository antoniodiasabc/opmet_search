import React from 'react';
import SearchIwxxmMessage from './SearchIwxxmMessage';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchIwxxm: false };
        this.state = { address: '' };
        this.state = { token: this.props.token };

        this.state = {
            estados: [{ "name": "Insert Messages in Text Format (TAC)", valor: "https://opmet.decea.mil.br/iwxxm/insertiwxxm" },
            { "name": "Insert IWXXM files (XML Format)", valor: "https://opmet.decea.mil.br/iwxxm/insertiwxxmcontent" },
            { "name": "Search IWXXM Messages", valor: "https://opmet.decea.mil.br/iwxxm/searchiwxxm" }]
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
        if (event.target.name === 'cmdFunc' && event.target.value === 'https://opmet.decea.mil.br/iwxxm/searchiwxxm') {
            console.log('search selected');
            this.setState({ searchIwxxm: true });
            this.setState({ address: 'https://opmet.decea.mil.br/iwxxm/searchiwxxm' });
        } else {
            this.setState({ searchIwxxm: false });
        }
    }


    render() {
        console.log('token 2 ' + this.state.token);
        console.log('token 3 ' + this.props.token);

        if (this.props.hasToken) {
            return (
                <div>
                    <fieldset>
                        <legend>
                            <h2>OPMET System - Search messages using web services</h2>
                        </legend>
                        <label>Choose a Service: &nbsp;
                            <select name="cmdFunc" id="cmdFunc" onChange={this.handleChange} >
                                <option value="0">Select an Option</option>
                                {this.state.estados.map(estado => (<option key={estado.name} value={estado.valor}>{estado.name}</option>))}
                            </select>
                        </label>
                        <p></p>
                       
                        <SearchIwxxmMessage searchIwxxm={this.state.searchIwxxm} address={this.state.address} token={this.props.token} />

                    </fieldset>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}
export default SearchForm;

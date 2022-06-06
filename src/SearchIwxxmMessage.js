import axios from 'axios';
import React from "react";

class SearchIwxxmMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { token: this.props.token };
        this.state = { address: this.props.address };
        this.state = { aerodrome: '' };
        this.state = { messagetype: '' };
        this.state = { dataini: '' };
        this.state = { dataend: '' };
        this.state = { result: '' };
        this.state = { cursor: 'pointer' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changeCursor = this.changeCursor.bind(this);
    }


    changeCursor() {
        if (this.state.cursor === 'wait') {
            return 'pointer';
        }
        return 'wait';
    }



    handleChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);

        if (event.target.name === 'aerodrome') {
            this.setState({ aerodrome: event.target.value });
        } else if (event.target.name === 'messagetype') {
            this.setState({ messagetype: event.target.value });
        } else if (event.target.name === 'dataini') {
            this.setState({ dataini: event.target.value });
        } else if (event.target.name === 'dataend') {
            this.setState({ dataend: event.target.value });
        }
    }


    handleSubmit(event) {
        event.preventDefault();
        this.changeCursor();

        console.log('address: ' + this.props.address);
        console.log('token: ' + this.props.token);

        const params = "local=" + this.state.aerodrome + "&msg=" + this.state.messagetype + "&data_ini=" + this.state.dataini + "&data_fim=" + this.state.dataend;

        const headers = {
            'Authorization': this.props.token
        }

        axios.post(this.props.address, params, { "headers": headers }).then((response) => {
            this.setState({ result: response.data });
             console.log('consulta retornou: ' + response.data);
        }).catch(error => {
            console.log(error);
            var ret = JSON.parse(error.request.response);
            console.log(ret[0].messages['en-US']);
            console.log(error.request.status);
            this.setState({ result: ret[0].messages['en-US'] });
        });

        this.changeCursor();
    }


    render() {
        console.log(this.props.searchIwxxm);
        console.log(this.state.token);
        console.log(this.state.address);

        const style = {
            minHeight: '380px',
            minWidth: '1480px',
            padding: '9px',
            boxSizing: 'border-box',
            fontSize: '10px'
        };

        if (this.props.searchIwxxm) {
            return (
                <div>
                    <fieldset>
                        <div>
                            <table >
                                <tbody>
                                    <tr className='t1'>
                                        <td >
                                            <div><p>Aerodrome or FIR</p></div>
                                        </td>
                                        <td>
                                            <input type="text" id="aerodrome" name="aerodrome" title="" placeholder="aerodrome" aerodrome={this.state.aerodrome} onChange={this.handleChange} />(four letters)
                                        </td>
                                    </tr>
                                    <tr className='t1'>
                                        <td  >
                                            <div  ><p>Message Type</p></div>
                                        </td>
                                        <td  >

                                            <input type="text" title="" id="messagetype" name="messagetype" messagetype={this.state.messagetype} placeholder="message type" onChange={this.handleChange} />METAR or TAF or SIGMET, ...
                                        </td>
                                    </tr>
                                    <tr className='t1'>
                                        <td  >
                                            <div  ><p>Start Date</p></div>
                                        </td>
                                        <td  >

                                            <input type="text" title="" id="dataini" name="dataini" placeholder="start date" dataini={this.state.dataini} onChange={this.handleChange} />(YYYYMMDDHH)
                                        </td>
                                    </tr>
                                    <tr className='t1'>
                                        <td  >
                                            <div  ><p>End date</p></div>
                                        </td>
                                        <td  >

                                            <input type="text" title="" id="dataend" name="dataend" placeholder="end date" dataend={this.state.dataend} onChange={this.handleChange} />(YYYYMMDDHH)
                                        </td>
                                        <td align='right'>
                                            <input type="button" value="Search Messages" onClick={this.handleSubmit} style={{ cursor: this.state.cursor }} />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>

                    <div>
                        <h2>Results:</h2>
                        <textarea style={style} defaultValue={this.state.result} readOnly ></textarea>
                    </div>
                </div>
            )
        } else {
            console.log('escolha um item ');
        }
    }
}
export default SearchIwxxmMessage;
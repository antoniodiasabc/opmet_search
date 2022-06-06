import { ReCaptchav2 } from 'react-recaptcha-google';
import React, { Component } from 'react';


class Captcha14 extends React.Component {


    onChange(value) {
        console.log('Captcha value:', value);
    }

    onChange2(){

    }
    render() {
        return (
            <div>
                <ReCaptchav2
                    sitekey="6Lfo4B8gAAAAAGCzybu2b37Sb-3encan6Z34yDpr" onChange={this.onChange2}
                />
            </div>
        );
    }
};
export default Captcha14;
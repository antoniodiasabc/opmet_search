import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

class ExampleComponent extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("1 started, just a second...");
        //this.captchaDemo.reset();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
          this.captchaDemo.reset();
          console.log("1 onload ...");
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= 2 your recaptcha token");
    this.setState({teste3: recaptchaToken});
    window.cpt = recaptchaToken;
  }

  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            data-theme="dark"            
            render="explicit"
            sitekey="6LdXXAsUAAAAALc4qwdnm0dKi7a9hCUmfIDJKAfz"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
       
      </div>
    );
  };
};
export default ExampleComponent;
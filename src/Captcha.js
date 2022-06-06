import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

class Captcha12 extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("3 started, just a second...");
        //this.captchaDemo.reset();
        //this.captchaDemo.execute();
    }
  }
  onLoadRecaptcha() {
      if (this.captchaDemo) {
         // this.captchaDemo.reset();
          console.log("3 onload ...");
         // this.captchaDemo.execute();
      }
  }
  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!  
    console.log(recaptchaToken, "<= 1 your recaptcha token");
  }


  render() {
    return (
      <div>
        {/* You can replace captchaDemo with any ref word */}
        <ReCaptcha
            ref={(el) => {this.captchaDemo = el;}}
            size="normal"
            render="explicit"
            sitekey="6LdXXAsUAAAAALc4qwdnm0dKi7a9hCUmfIDJKAfz"
            onloadCallback={this.onLoadRecaptcha}
            verifyCallback={this.verifyCallback}
        />
      </div>
    );
  };
};
export default Captcha12;
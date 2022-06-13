import React, { Component } from 'react';
import { ReCaptcha } from 'react-recaptcha-google';

class Captcha12 extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoad = this.onLoad.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }
  componentDidMount() {
    if (this.captchaDemo) {
        console.log("3 started, just a second...");
        //this.captchaDemo.reset();
        //this.captchaDemo.execute();
    }
  }
  onLoad() {
      if (this.captchaDemo) {
         // this.captchaDemo.reset();
          console.log("3 onload ...");
         // this.captchaDemo.execute();
      }
  }
  onSuccess(recaptchaToken) {
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
            sitekey="6LezjEwgAAAAAOG4b6c2ipSE3I-VT3v2MMi4CgmE"
            onLoad={this.onLoad}
            onSuccess={this.onSuccess}
        />
      </div>
    );
  };
};
export default Captcha12;
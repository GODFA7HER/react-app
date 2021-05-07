import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const Emailwork: React.FC = () => { //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.
  const QRCode = require('qrcode.react');


  //declares the state variables using the usestate hook by react
  const [message, setMessage] = useState('');
  const [Url, setUrl] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');


  //function retrieves the value of the input in message text area
  const Messageeditor = (event: any) => {
    setMessage(event.target.value);
  }

  //function retrieves the value of the input in the URL text area
  const GetUrl = (event: any) => {
    setUrl(event.target.value);
  }

  //function retrieves the value of the input in the Phone Number text area
  const PutNumber = (event: any) => {
    setNumber(event.target.value);
  }

  //function retrieves the value of the input in the Email text area
  const PutMail = (event: any) => {
    setMail(event.target.value);
  }

  //function retrieves the value of the input in the subject text area
  const GetSubject = (event: any) => {
    setSubject(event.target.value);
  }

  //function retrieves the value of the input in body set area
  const GetBody = (event: any) => {
    setBody(event.target.value);
  }

  return (
    <div className="columns has-background-black-ter">
      <div className="column has-background-danger-light">
        <div className="field">
          <QRCode value={`SMS:${number}:${message}`} size={256} /> {/*creates the QRcode and links them to the variables number and message */}
          <div className="control">
            <label className="label">Phone Number</label>
          </div>
          <input className="input" type="text" placeholder="Phone Number..." onInput={PutNumber} />{/*Changes the QRcode based on the input in the phone number text box */}
        </div>

        <div className="field">
          <label className="label">message</label>
          <div className="control">
            <input className="input" type="text" placeholder="Message..." onInput={Messageeditor} />{/*Changes the QRcode based on the input in the message text box */}
          </div>
        </div>

      </div>
      <div className="column has-background-warning-dark " >
        <div className="field">
          <QRCode value={`mailto:${mail} Subject=${subject} &body=${body}.`} size={256} />
          <label className="label">Email</label>
          <div className="control">
            <input className="input" type="text" placeholder="Email..." onInput={PutMail} />{/*Changes the QRcode based on the input in the Email text box */}
          </div>
        </div>

        <div className="field">
          <label className="label">Subject</label>
          <div className="control">
            <input className="input" type="text" placeholder="Subject..." onInput={GetSubject} />{/*Changes the QRcode based on the input in the subject text box */}
          </div>
        </div>

        <div className="field">
          <label className="label">Body</label>
          <div className="control">
            <input className="input" type="text" placeholder="Body..." onInput={GetBody} />{/*Changes the QRcode based on the input in the body text box */}
          </div>
        </div>

      </div>
      <div className="column has-background-danger-dark">{/*puts the value in a column and chnages the colour */}
        <div className="field">
          <QRCode value={`URL = ${Url}`} size={256} />{/*Links the QRcode to the variable Url */}
          <label className="label">URL</label>{/*shows the label */}
          <div className="control">
            <input className="input" type="text" placeholder="URL..." onInput={GetUrl} />{/*Changes the QRcode based on the input in the URL text box */}
          </div>
        </div>
      </div>


    </div>

  )
}


export default Emailwork;
import React, { Component } from 'react';
import FormErr from './components/FormErr';


class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            msg: '',
            formErrors: {name: '', email: '',msg:''},
            nameValid: false,
            emailValid: false,
            msgValid:false,
            formValid: false
          }
    }
    /*submitFormHandler(event) {
        event.preventDefault();
        alert('Form Submited');
    }*/
    handleUserInput (event) {
        //console.warn(event.target.id);
        const name = event.target.id;
        const value = event.target.value;
        this.setState({[name]: value},() => { this.validateField(name, value) });
        console.dir(this.state);
    }
    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let emailValid = this.state.emailValid;
        let msgValid = this.state.msgValid;

        switch(fieldName) {
        case 'name':
            nameValid = (value.length > 2 && value.match( /^[a-zA-Z ]{2,30}$/));
            fieldValidationErrors.name = nameValid ? '' : ' is invalid';
            break;
        case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
        case 'msg':
            msgValid = value.length >= 6;
            fieldValidationErrors.msg = msgValid ? '': ' is too short';
            break;
        default:
            break;  
        }
        this.setState({formErrors: fieldValidationErrors,
                    nameValid: nameValid,
                    emailValid: emailValid,
                    msgValid: msgValid
        }, this.validateForm);
    }

    validateForm(event) {
        //event.preventDefault();
        this.setState({formValid: this.state.nameValid && this.state.emailValid && this.state.msgValid});
        //this.setState({nameValid: true,});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'is-invalid');
    }

    
    
    render() {
        return (
            <form onSubmit={this.validateForm}>
                <FormErr formErr={this.state.formErrors}/>

                <div className="form-group">
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" className={`form-control ${this.errorClass(this.state.formErrors.name)}`} placeholder="Enter your name" value={this.state.name} onChange={(event) => this.handleUserInput(event)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" className={`form-control ${this.errorClass(this.state.formErrors.email)}`} placeholder="Enter your email"  value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="msg">Your msg</label>
                    <textarea className={`form-control ${this.errorClass(this.state.formErrors.msg)}`} id="msg" rows="5" placeholder="Enter your message" defaultValue={this.state.msg} onChange={(event) => this.handleUserInput(event)} ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Submit</button>
            </form>
        );
    }
}

export default Contact;
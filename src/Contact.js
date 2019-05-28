import React from 'react';

/*function InputText(){
    return (<label>Name:<input type="text" value="test1234"/></label>);
}*/

function Contact() {
    /*let textInput = React.createRef();
    function handleClick() {
        textInput.current.focus();
    }*/

    let textInput = null;
    let emailInput = null;

    /*function txtvalue() {
        //console.log(textInput.value);
    }

    function mailvalue() {
        //console.log(emailInput.value);
    }*/

    function submitFormHandler(event) {
        //debugger
       // alert('Your favorite flavor is: ');
        console.warn(textInput.value);
        console.error(emailInput.value);
        event.preventDefault();
        let name = textInput.value;
        let email = emailInput.value;

        let nameregex = /^[a-zA-Z ]{2,30}$/;
        let emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        

        if (nameregex.test(name)) {
            alert('Valid Name');
        } else {
            alert('Invalid Name');
        }

        if (emailregex.test(email)) {
            alert('Valid Email');
        } else {
            alert('Invalid Email');
        }


    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input type="text" id="name" className="form-control" onSubmit={submitFormHandler} ref={(input) => { textInput = input; }} placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email : </label>
                <input type="text" id="email" className="form-control" onSubmit={submitFormHandler} ref={(input) => { emailInput = input; }} placeholder="Enter your email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    );
}

export default Contact;

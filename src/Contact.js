import React from 'react';

/*function InputText(){
    return (<label>Name:<input type="text" value="test1234"/></label>);
}*/

function submitFormHandler(event) {
    //debugger
    alert('Your favorite flavor is: ');
    event.preventDefault();
}



function Contact() {
    /*let textInput = React.createRef();
    function handleClick() {
        textInput.current.focus();
    }*/

    let textInput = null;
    let emailInput = null;

    function txtvalue() {
        console.dir(textInput)
        console.log(textInput.value);
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="form-group">
                <label for="name">Email address</label>
                <input type="email" id="name" className="form-control" onChange={txtvalue} ref={(input) => { textInput = input; }} placeholder="Enter your name" />
            </div>
            <div className="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email" className="form-control" onChange={txtvalue} ref={(input) => { textInput = input; }} placeholder="Enter your name" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <button type="submit" className="btn btn-primary">Submit</button>
        </form>


    );
}

export default Contact;

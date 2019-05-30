import React, { Component } from 'react';

class Kgf extends Component {
    constructor() {
        super();
    }
    err(){

    }
    errs(){
        //console.dir(this.props.formErr); `Fifteen is ${a + b} and not ${2 * a + b}.`);
        let err = '';
        for(var p in this.props.formErr){
            console.log(p);
            if(this.props.formErr[p])
            // err += `<strong>${p}</strong> ${this.props.formErr[p]}`;
            err += p;
        }
        return <div className="alert alert-warning" role="alert">err</div>;
    }
    render() {
        return (
            
            this.errs()
        );
    }
}

export default Kgf;

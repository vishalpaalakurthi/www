import React, { Component, createRef, useEffect, useRef } from 'react';



const cpRef = createRef();

class CP_Container extends Component {

    constructor(){
        super();
        this.state = {
            blocks: []
        }
        this.onPaste = this.onPaste.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }

    componentDidMount() {
    }

    onFocusOut() {
    }

    onClick() {
        cpRef.current.focus();
    }

    onPaste(e) {
        debugger
        //alert("Pasted data- " + e.clipboardData.getData('text'))
        const { items, files, types } = e.clipboardData;
        const text = e.clipboardData.getData('text');

        var blocks = this.state.blocks;
        blocks.push(text)

        this.setState(blocks);
    }


    render() {
        return (
            <div ref={cpRef} style={{minHeight: '500px', width: '100%', border: '1px solid black', padding: '20px'}} 
                onClick={this.onClick}
                onPaste={this.onPaste}
                tabIndex="1">

                {
                    this.state.blocks.map((v,i) => {
                        return (
                                <SubContainer />
                        )
                    })
                }

            </div>
        )
    }
}

export default CP_Container;



class SubContainer extends Component {

    constructor() {
        super();
        this.state = {
            blocks1: []
        }

        this.onPaste = this.onPaste.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocusOut = this.onFocusOut.bind(this);
    }

    componentDidMount() {
    }

    onFocusOut() {
    }

    onClick() {
        cpRef.current.focus();
        cpRef.current.addEventListener("paste", this.onPaste);
    }

    onPaste(e) {
        alert('h')
        //alert("Pasted data- " + e.clipboardData.getData('text'))
        const { items, files, types } = e.clipboardData;
        const text = e.clipboardData.getData('text');

        var blocks1 = this.state.blocks1;
        blocks1.push(text)

        this.setState(blocks1);
    }


    render() {
        return (
            <div ref={cpRef} style={{minHeight: '100px', width: '100%', border: '1px solid black'}} onClick={this.onClick}>
                
                {
                    this.state.blocks1.map((v,i) => {
                        return (
                                <h3>
                                    {v}
                                </h3>
                        )
                    })
                }
            </div>
        );
    }

}
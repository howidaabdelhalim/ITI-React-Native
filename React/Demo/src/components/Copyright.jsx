/* eslint-disable react/prop-types */
import { Component } from "react";

class Copyright extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: props.year               
        };
    }

    render() {
        return (
            <div>
                <p>&copy; {this.state.year}. All rights reserved.</p> {/* Copyright message */}
            </div>
        );
    }
}

export default Copyright;

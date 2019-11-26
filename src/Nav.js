import React, { Component } from "react";

class Nav extends Component {
    render = () => (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Home</a>
            <a className="navbar-brand" href="#">Astronauts</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    );
}

export default Nav; 
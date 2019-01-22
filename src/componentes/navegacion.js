import React, { Component } from 'react';

class Navegacion extends Component{
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="https://github.com">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://github.com">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}

export default Navegacion;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBarPage extends Component {
    render() {
        return (
            // linking to the specific path vv
            // << created in Routes file 
            <div className="nav">
                | <Link to="/">Home</Link> | 
                | <Link to="/menu">Menu</Link> | 
                | <Link to="/about">About</Link> |
                | <Link to="/extra">Extra</Link> |
            </div>
            
        );
    }
}
export default NavBarPage;
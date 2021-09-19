import React from 'react'
import { Link } from 'react-router-dom'

class Path extends React.Component {
    render(){
        return(
            <div>
                <Link to="/Home">Home</Link>
                <Link to="/About">About</Link>
            </div>
        )
    }
}

export default Path;
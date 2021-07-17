import React from 'react';
import './Home.css';
import Nav from './Nav';
import ChatArea from './ChatArea';


function Home() {
    return (
        <div className="home">
            <Nav/>
            <ChatArea/>
        </div>
    )
}

export default Home

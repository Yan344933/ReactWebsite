import React from 'react';
import './Home.css';

class DailyWeather extends React.Component {


    render() {
        return (
        <div className='home'>
            <header className="page-header">
                <div>Welcome to Yan's React.js Laboratory!</div>
            </header>
            <div className='content'>
                Here you can find Experiments in React.js made by Yan!
            </div>
        </div>
        )
    }
}
export default DailyWeather;
import React from 'react';
import Weather from './components/Weather/Weather'
import Menu from './components/Menu/Menu'
import Reference from './components/Reference/Reference'
import Home from './components/Home/Home'
import './App.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'component' : '',
        }
    }

    componentChange = (component) => {
        this.setState({
            'component': component
        })
    }

    render() {
        return (
            
            <div>
                <div className='menu'>
                    <Menu onSelectDropdown={this.componentChange}/>
                </div>
                <div>
                    {this.state.component === '' && <Home />}
                    {this.state.component === 'weather' && <Weather />}
                    {this.state.component === 'ref' && <Reference />}
                </div>
            </div>
        )
    }
}
export default App;
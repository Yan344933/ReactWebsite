import React, {useState, useEffect} from 'react';
import Weather from './components/Weather/Weather'
import Menu from './components/Menu/Menu'
import Reference from './components/Reference/Reference'
import Home from './components/Home/Home'
import Tasks from './components/Tasks/Tasks'
import './App.css'

const App = () => {

    const [component, setComponent] = useState('');

    const componentChange = (component_foreign) => {
        setComponent(component_foreign)
    }

    return (
            
        <div>
            <div className='menu'>
                <Menu onSelectDropdown={componentChange}/>
            </div>
            <div>
                {component === '' && <Home />}
                {component === 'weather' && <Weather />}
                {component === 'ref' && <Reference />}
                {component === 'task' && <Tasks />}
            </div>
        </div>
    )
    }

export default App;
import React, {useState, useEffect} from 'react';
import Weather from './components/Weather/Weather'
import Menu from './components/Menu/Menu'
import Reference from './components/Reference/Reference'
import Home from './components/Home/Home'
import Tasks from './components/Tasks/Tasks'
import Component from './components/Component/Component'
import Game from './components/XXOO/Game'
import './App.css'
import Converter from './components/Converter/Converter';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    const [component, setComponent] = useState('');

    const componentChange = (component_foreign) => {
        setComponent(component_foreign)
    }

    return (
            
    /*    <div>
            <div className='menu'>
                <Menu onSelectDropdown={componentChange}/>
            </div>
            <div>
                {component === '' && <Home />}
                {component === 'weather' && <Weather />}
                {component === 'ref' && <Reference />}
                {component === 'task' && <Tasks />}
                {component === 'component' && <Component />}
                {component === 'XXOO' && <Game />}
                {component === 'converter' && <Converter />}
            </div>
        </div>*/
        <>
            <Menu />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/component' element={<Component />} />
                <Route path='/reference' element={<Reference />} />
                <Route path='/experiment/weather' element={<Weather />} />
                <Route path='/experiment/task' element={<Tasks />} />
                <Route path='/experiment/XXOO' element={<Game />} />
                <Route path='/experiment/converter' element={<Converter />} />
            </Routes>
        </>
    )
    }

export default App;
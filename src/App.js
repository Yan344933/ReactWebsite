import React from 'react';
import Weather from './components/Weather/Weather'
import Menu from './pages/Menu/Menu'
import Reference from './pages/Reference/Reference'
import Home from './pages/Home/Home'
import Tasks from './components/Tasks/Tasks'
import Component from './pages/Component/Component'
import Game from './components/XXOO/Game'
import './App.css'
import Converter from './components/Converter/Converter';
import { Routes, Route } from 'react-router-dom';
import MapCompare from './components/BusCompare/MapContainer';

const App = () => {

    return (
            
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
                <Route path='/experiment/bus-map-compare' element={<MapCompare />} />
            </Routes>
        </>
    )
    }

export default App;
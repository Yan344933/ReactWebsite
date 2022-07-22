import React, {useState} from 'react';
import { Button, Alert} from 'react-bootstrap';
import './Converter.css'

const Converter = () => {

    const [roman, setRoman] = useState('')
    const [arabic, setArabic] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const [message, setMessage] = useState(false)

    const conversion = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    const to_arabic = () => { 

        const arr = roman.split('').reverse() 
    
        const num_arr = arr.map((val)=> conversion[val]) 
      
        const sum = num_arr.reduce((acc, curr, index, arr)=> { 
      
          if(arr.at(index - 1) > curr)       
            return acc - curr 

          return acc + curr 
      
        }) 
      
        setArabic(sum)
    }

    const to_roman = () => {
        
    }

    const convert = () => {
        if(roman === '' && arabic === 0) {

            setMessage('Empty Input!')

            setShowAlert(true)

            setInterval(()=> setShowAlert(false),3000)
        }
        if (roman ==='')
            to_roman()
        if(arabic === 0)
            to_arabic()
            
    }

    const clear = () => {
        setArabic(0)
        setRoman('')
    }

    const handleChangeRoman = (e) => {
        setArabic(0)
        setRoman(e.target.value)
    }

    const handleChangeArabic = (e) => {
        setRoman('')
        setArabic(e.target.value)
    }

    return (
        <div>
            <div className='page-header'>Roman-Arabic Converter</div>
            <div className='container col-sm-7'>
                { showAlert &&
                        <Alert key='danger' variant='danger'>{message}</Alert>}
            </div>
            <div className='content'>
                <div>
                    
                    <div className='input-container'>
                        <label htmlFor="roman" >Roman Number</label><br />
                        <input id="roman" value={roman} onChange={handleChangeRoman} />
                    </div>

                    <div className='input-container'>
                        <label htmlFor="arabic">Arabic Number</label><br />
                        <input id="arabic" value={arabic} onChange={handleChangeArabic}/>
                    </div>
                
                    <div className='btn-container'>
                        <Button onClick={convert}>Convert</Button>
                        <Button onClick={clear}>Clear</Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Converter
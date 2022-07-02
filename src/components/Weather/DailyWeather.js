import React from 'react';

const DailyWeather = (props) => {

    const formatDate = (Date) => {
        return Date.substr(0,4) + '-' + Date.substr(4,2) + '-' + Date.substr(6,2)
    }

        return (
        <div className='col-sm-3 card m-1'>
            <div className='card-body'>
                <h5 className='card-title'>
                    {props.day && formatDate(props.day['Date'])} ({props.day.week.substr(2,1)})
                </h5>
                
                <p className='card-text mt-3 lead'>
                    {props.day.minTemp['value']}
                    -
                    {props.day.maxTemp['value'] + '℃'}
                </p>

                <h6 className='card-footer text-muted mt-4 text-start'>{props.day.remarks}</h6>
            </div>
        </div>
        )
}

export default DailyWeather;
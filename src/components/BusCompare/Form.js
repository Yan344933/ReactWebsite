import React from 'react';

const Form = () => {

    const [routes, setRoutes] = useState([]);

    const addRoute = route => {

        setRoutes([...routes, route])
    }

    return (
        <div>
            <form>
                {routes.map((item) => (
                    <div className='route-item'>
                        {`${item.route_number} 往${item.dest}`}
                    </div>
                )

                )}
            </form>
        </div>
    );
}

export default Form;

const AddRoute = () => {
    
}
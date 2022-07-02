import React from 'react';
import {Button, Container, Row} from 'react-bootstrap';
import NeonButton from './Neon-Button/Neon-Button'

const Component = () => {


    return(
        <div>
            <div className="page-header">
                <Container>
                    <Row>
                        <div className='col-7 text-sm-end'>
                            <span className='align-middle'>Useful(?) Components</span>
                        </div>
                    </Row>
                </Container>
            </div>
            <div className='container col-7 justify-content-center'>
                <NeonButton />
            </div>
        </div>
    )
}

export default Component;
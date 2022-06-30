import React from 'react';
import {reference} from '../../constants';
import {Container, ListGroup} from 'react-bootstrap';

const Reference = () => {

        return (           
            <div>
                <div class="page-header">
                    <Container className='justify-content-center'>
                        <p className='text-center mb-0'>Reference</p>
                    </Container>
                </div>
                <Container className='p-md-3'>
                    <ListGroup>
                        {reference && reference.map((item) => 
                        <ListGroup.Item>
                            {item.name} : <a href={item.url} target="_blank" rel="noreferrer">{item.url}</a>
                        </ListGroup.Item>)}
                    </ListGroup>
                </Container>
            </div>
        )
}


export default Reference;
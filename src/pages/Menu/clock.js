import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const Clock = () => {

    const [today, setToday] = useState(new Date());

    const intervalId = setInterval(() => setToday(new Date()),3000);

    const formatDateTime = (date) => {
        const month = date.getMonth() + 1 < 10? '0' + (date.getMonth() + 1) : date.getMonth();
        const min = date.getMinutes() + 1 < 10? '0' + (date.getMinutes() + 1) : date.getMinutes();
        
        return `${date.getFullYear()}/${month}/${date.getDate()} ${date.getHours()}:${min}`;
    }


    useEffect(() => {

        return () => {
            clearInterval(intervalId)
        }
    })

    return (
        <Navbar.Text>
            <Container className='ml-sm-3 mt-1 mt-sm-0'>
                Today: {formatDateTime(today)}
            </Container>
        </Navbar.Text> 
    )

}

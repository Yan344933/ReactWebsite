import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';
import './Game.css'

const XXOOGame = () => {

    const [board, setboard] = useState(Array(9).fill(' '));

    const [round, setRound] = useState(0);

    const [winner, setWinner] = useState('');

    const PlayerOnClick = (index) => {

        setRound(round + 1);

        const tempBoard = board.slice();
        tempBoard[index] = 'O';

     //   setboard(previousState => (previousState, [...tempBoard]))
        if(!checkWin(tempBoard)){
        
      //  console.log(`board after player move = ${board}`);
            const computerIndex = ComputerMove(tempBoard);

            tempBoard[computerIndex] = 'X';

            checkWin(tempBoard)
        }

        setboard(tempBoard);

        
    }

    const ComputerMove = (board) => {

        const emptyCells = board.reduce((acc, next, i) => {
            return next === ' ' && acc.push(i), acc
        }, [])

        const inputIndex = Math.floor(Math.random() * emptyCells.length)
        
        return emptyCells[inputIndex];

    }

    useEffect(() => {
        console.log(`board from useEffect = ${board}`);
    })
    
    const checkWin = (board) => {


        for(let i  = 0; i< 3; i++){
            //check Column
            if(board[i] === board[i+3] && board[i] === board[i+6] && board[i] !== ' '){
                setWinner(board[i] ==='O'? 'You': 'Computer')
                console.log('Column')
                return true;
            }

            //check Row
            if(board[i * 3] === board[i*3+1] && board[i*3] === board[i*3+2] && board[i*3] !== ' '){
                setWinner(board[i*3] ==='O'? 'You': 'Computer')
                console.log(`Row: i= ${i}`)
                return true;
            }
        }

        //check diagonal
        if((board[0] === board[4] && board[0] === board[8] && board[4] !== ' ') ||
        (board[2] === board[4] && board[2] === board[6] && board[4] !== ' ')){
            setWinner(board[4] ==='O'? 'You': 'Computer')
            console.log('Diag')
            return true;
        }
        
    }

    const Restart = () => {
        const emptyBoard = Array(9).fill(' ');

        setboard(emptyBoard)
        setWinner('')
        setRound(0)
    }

    return (
        <div>
            <div className='page-header'>XXOO Game</div>
            <div className='content'>
                <div className='round-count'>Round {round}</div>
                <div className='game-board'>
                    
                    {board.map((cell, index) => {

                        return (
                            <input type="button" className='cell' key={index} onClick={() => {PlayerOnClick(index)}} 
                            value={cell}
                            disabled={cell !== ' ' || winner !==''}/>

                        )
                    }
                    )}
                </div>

                {winner !== '' &&
                <div className='game-set'>
                    <div>
                        <p>{winner} Win!</p>
                        <Button onClick={Restart}>Restart</Button>
                    </div>
                </div>}

            </div>
        </div>
    )
}

export default XXOOGame;

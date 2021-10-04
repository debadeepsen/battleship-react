import React from 'react'

const tenDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const Board = ({ id, caption }) => {
    return (
        <div className="board-container">
            <h3>{caption}</h3>
            <div className="board">
                {
                    tenDigits.map(e => (
                        <div>
                            {
                                tenDigits.map(e => (
                                    <div></div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Board;

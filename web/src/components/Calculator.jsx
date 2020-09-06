import React, {useState} from 'react';

const Calculator = () => {
    const operators = ['-', '+', 'x', '÷', '='];
    const numbers = [];
    const [memory, setMemory] = useState('');

    for (let i = 0; i < 10; i++) {
        numbers.push(i);
    }

    const updateMemory = (event) => {
        let keyPressed = event.target.innerText;

        switch (keyPressed) {
            case '÷':
                keyPressed = '/';
                break;

            case 'x':
                keyPressed = '*';
                break;
            case '=':
                const result = eval(memory);
                setMemory(result);
                break;
        }
        if (keyPressed !== '=') setMemory(memory + keyPressed);
    };

    const clearMemory = () => {
        setMemory('');
    };

    return (
        <div className='calculator'>
            <div className='display'>{memory}</div>
            <div className='keypad'>
                <div className='key clear' onClick={clearMemory}>C</div>
                {numbers.map(number => (
                    <button onClick={updateMemory}
                            key={number} className='key'>
                        {number}
                    </button>
                ))}
                {operators.map(operator => (
                    <button onClick={updateMemory}
                            key={operator} className='key'>
                        {operator}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;

import { useState, useEffect } from 'react';
import './app.css';

function useCounter(initial) {
    const [counter, setCounter] = useState(initial);

    // Это вариант с запросом, чтобы он нормально работал после активации - уберите все props,
    // которые приходят в компонент + аргумент initial поменяйте на 0 или null

    useState(useEffect(() => {
        fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
            .then(res => res.text())
            .then(res => setCounter(Number(res)))
            .catch(err => console.log(err))
    }, []));

    const incCounter = () => {
        if (counter < 50) {
            setCounter(counter => counter + 1)
        }
    }

    const decCounter = () => {
        if (counter > -50) {
            setCounter(counter => counter - 1)
        }
    }

    const rndCounter = () => {
        setCounter(+(Math.random() * (50 - -50) + -50).toFixed(0))
    }

    const resetCounter = () => {
        setCounter(initial)
    }

    return {
        counter,
        incCounter,
        decCounter,
        rndCounter,
        resetCounter
    }
}

const Counter = (props) => {
    const { counter, incCounter, decCounter, rndCounter, resetCounter } = useCounter(0);

    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={incCounter}>INC</button>
                <button onClick={decCounter}>DEC</button>
                <button onClick={rndCounter}>RND</button>
                <button onClick={resetCounter}>RESET</button>
            </div>
        </div>
    )
}

const RndCounter = (props) => {
    const { counter, rndCounter, resetCounter } = useCounter(9990);

    return (
        <div className="component">
            <div className="counter">{counter}</div>
            <div className="controls">
                <button onClick={rndCounter}>RND</button>
                <button onClick={resetCounter}>RESET</button>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <>
            <Counter />
            <RndCounter />
        </>
    )
}

export default App;
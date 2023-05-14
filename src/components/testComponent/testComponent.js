import { useState } from 'react';
import { flushSync } from 'react-dom';

function TestComponent() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        // setCount(c => c + 1); // Не вызывает ререндер
        // setFlag(f => !f); // Не вызывает ререндер
        // React вызовет ререндер только один раз, в конце

        //     setTimeout(() => {
        //         setCount(c => c + 1);
        //         setFlag(f => !f);
        //     }, 100);

        flushSync(() => {
            setCount(c => c + 1);
        });

        flushSync(() => {
            setFlag(f => !f);
        });

        console.log('render');
    }
    /*
    //  function handleClick() {
    //     fetchSomething().then(() => {
    //       // До React 17 следующие вызовы не батчились
    //       // Установка состояния происходит “после” события, в колбэке асинхронного вызова
    //       setCount(c => c + 1); // Спровоцирует ререндер
    //       setFlag(f => !f); // Спровоцирует ререндер
    //     });
    //   }
    */

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        </div>
    );
}

export default TestComponent;
const Counter = (counter, inc, dec, rnd) => {
    return (
        <div class="jumbotron">
            <h1>{counter}</h1>
            </br>
            <button onClick={dec} className="btn btn-primary">DEC</button>
            <button onClick={inc} className="btn btn-primary">INC</button>
            <button onClick={rnd} className="btn btn-primary">RND</button>
        </div >
    )
};

export default Counter;
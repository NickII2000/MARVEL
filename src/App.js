import { Component, useState, useEffect, useCallBack } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const getSomeImages = () => {
    console.log('fetching');
    return [
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        "dhttps://www.planetware.com/arizona/from-las-vegas-to-antelope-canyon-best-ways-to-get-there.htm"
    ]
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    function logging() {
        console.log('log!');
    }

    useEffect(() => {
        // console.log('effect');
        document.title = `Slide: ${slide}`;

        // window.addEventListener('click', logging);

        // return () => {
        //     window.removeEventListener('click', logging);
        // }

    }, [slide]);

    useEffect(() => {
        console.log('autoplay');
    }, [autoplay]);

    function changeSlide(i) {
        setSlide(siude => slide + i);
    }

    function toggleAutoplay() {
        setAutoplay(autoplay => !autoplay);
    }

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {
                    getSomeImages().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={url} alt="slide" />
                        )
                    })
                }
                <div className="text-center mt-5">Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="buttons mt-3">
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(-1)}>-1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={() => changeSlide(1)}>+1
                    </button>
                    <button
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay
                    </button>
                </div >
            </div >
        </Container >
    )
}


function App() {
    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(false)}>Click</button>
            {slider ? <Slider /> : null}
        </>
    );
}

export default App;

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const countTotal = (num) => {
    console.log('counting...');
    return num + 10;
}

const Slider = (props) => {

    const [slide, setSlide] = useState(0);
    const [autoplay, setAutoplay] = useState(false);

    const getSomeImages = useCallback(() => {
        console.log('fetching');
        return [
            "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
            "https://www.planetware.com/photos-large/USNY/usa-best-places-miami.jpg",
            "https://www.planetware.com/wpimages/2022/09/best-luxury-all-inclusive-resorts-world-conrad-maldives-rangali-island-the-maldives.jpg"
        ];
    }, []);

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

    const total = useMemo(() => {
        return countTotal(slide);
    }, []);

    return (
        <Container>
            <div className="slider w-50 m-auto">
                {/* {
                    getSomeImages().map((url, i) => {
                        return (
                            <img key={i} className="d-block w-50" src={url} alt="slide" />
                        )
                    })
                } */}

                <Slide getSomeImages={getSomeImages} />

                <div className="text-center mt-5">Active slide {slide} <br />
                    {autoplay ? 'auto' : null}
                </div>
                <div className="text-center mt-5">Total slides: {total}
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

const Slide = ({ getSomeImages }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        setImages(getSomeImages());
    }, [getSomeImages]);

    return (
        <>
            {images.map((url, i) => <img key={i} className="d-block w-50" src={url} alt="slide" />)}
        </>
    )
}

function App() {
    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider((slider) => !slider)}>Click</button>
            {slider ? <Slider /> : null}
        </>
    );
}

export default App;
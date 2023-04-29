import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = (value) => true;
    // const validateInput = (value) => value.search(/\d/) >= 0;

    // return { value: value, onChange: onChange, validateInput: validateInput };
    return { value, onChange, validateInput };
}

const Form = () => {
    // const [text, setText] = useState('');
    // const [textArea, setTextArea] = useState('');

    const input = useInputWithValidate('');
    const textArea = useInputWithValidate('');

    // const validateInput = (text) => text.search(/\d/) >= 0;
    const color = input.validateInput() ? 'text-danger' : null;

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${textArea.value}`} type="text" className="form-control" readOnly />
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input
                        onChange={input.onChange}
                        type="email"
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
}

function App() {
    return (
        <Form />
    );
}

export default App;

// import { useState } from "react";
// import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";

// import decoration from '../../resources/img/vision.png';

// const App = () => {

//     const [selectedChar, setChar] = useState(null);

//     const onCharSelected = (id) => {
//         setChar(id);
//     }

//     return (
//         <div className="app">
//             <AppHeader />
//             <main>
//                 <ErrorBoundary>
//                     <RandomChar />
//                 </ErrorBoundary>
//                 <div className="char__content">
//                     <ErrorBoundary>
//                         <CharList onCharSelected={onCharSelected} />
//                     </ErrorBoundary>
//                     <ErrorBoundary>
//                         <CharInfo charId={selectedChar} />
//                     </ErrorBoundary>
//                 </div>
//                 <img className="bg-decoration" src={decoration} alt="vision" />
//             </main>
//         </div>
//     )
// }


// export default App;
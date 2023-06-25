// --- SwitchTransition

import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const modes = ["out-in", "in-out"];

export default function App() {
    const [mode, setMode] = React.useState("out-in");
    const [state, setState] = React.useState(true);
    const helloRef = React.useRef(null);
    const goodbyeRef = React.useRef(null);
    const nodeRef = state ? helloRef : goodbyeRef;
    return (
        <>
            <div className="label">Mode:</div>
            <div className="modes">
                {modes.map((m) => (
                    <Form.Check
                        key={m}
                        label={m}
                        id={`mode=msContentScript${m}`}
                        type="radio"
                        name="mode"
                        checked={mode === m}
                        value={m}
                        onChange={(event) => {
                            setMode(event.target.value);
                        }}
                    />
                ))}
            </div>
            <div className="main">
                <SwitchTransition mode={mode}>
                    <CSSTransition
                        key={state}
                        nodeRef={nodeRef}
                        addEndListener={(done) => {
                            nodeRef.current.addEventListener("transitionend", done, false);
                        }}
                        classNames="fade"
                    >
                        <div ref={nodeRef} className="button-container">
                            <Button onClick={() => setState((state) => !state)}>
                                {state ? "Hello, world!" : "Goodbye, world!"}
                            </Button>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
            </div>
        </>
    );
}



//---CSSTransition

// import { useState } from 'react';
// import { Container } from 'react-bootstrap';
// // import { Transition } from 'react-transition-group';
// import { CSSTransition } from 'react-transition-group';
// import './App.css';

// const Modal = (props) => {

//     const duration = 1300;

//     return (
//         <CSSTransition
//             in={props.show}
//             timeout={duration}
//             onEnter={() => props.setShowTrigger(false)}
//             onExited={() => props.setShowTrigger(true)}
//             mountOnExit
//             unmountOnExit
//             classNames='modal'>
//             <div className="modal mt-5 d-block">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title">Typical modal window</h5>
//                             <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <p>Modal body content</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//                             <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </CSSTransition>
//     )
// };

// function App() {
//     const [showModal, setShowModal] = useState(false);
//     const [showTrigger, setShowTrigger] = useState(true);

//     return (
//         <Container>
//             {/* {showModal ? <Modal onClose={setShowModal} /> : null} */}
//             <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger} />
//             {showTrigger ?
//                 <button
//                     type="button"
//                     className="btn btn-warning mt-5"
//                     onClick={() => setShowModal(true)}>Open Modal</button> :
//                 null}
//         </Container>
//     );
// }

// export default App;


//---Transition

// const Modal = (props) => {

//     const duration = 300;

//     const defaultStyle = {
//         transition: `all ${duration}ms ease-in-out`,
//         opacity: 0,
//         visibility: 'hidden',
//     }

//     const transitionStyles = {
//         entering: { opacity: 1, visibility: 'visible' },
//         entered: { opacity: 1, visibility: 'visible' },
//         exiting: { opacity: 0, visibility: 'hidden' },
//         exited: { opacity: 0, visibility: 'hidden' },
//     };

//     return (
//         <Transition
//             in={props.show}
//             timeout={duration}
//             onEnter={() => props.setShowTrigger(false)}
//             onExited={() => props.setShowTrigger(true)}
//             unmountOnExit>
//             {state => (
//                 <div className="modal mt-5 d-block" style={{
//                     ...defaultStyle,
//                     ...transitionStyles[state]
//                 }}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Typical modal window</h5>
//                                 <button onClick={() => props.onClose(false)} type="button" className="btn-close" aria-label="Close"></button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>Modal body content</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-secondary">Close</button>
//                                 <button onClick={() => props.onClose(false)} type="button" className="btn btn-primary">Save changes</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </Transition>
//     )
// }

// function App() {
//     const [showModal, setShowModal] = useState(false);
//     const [showTrigger, setShowTrigger] = useState(true);

//     return (
//         <Container>
//             {/* {showModal ? <Modal onClose={setShowModal} /> : null} */}
//             <Modal show={showModal} onClose={setShowModal} setShowTrigger={setShowTrigger} />
//             {showTrigger ?
//                 <button
//                     type="button"
//                     className="btn btn-warning mt-5"
//                     onClick={() => setShowModal(true)}>Open Modal</button> :
//                 null}
//         </Container>
//     );
// }

// export default App;
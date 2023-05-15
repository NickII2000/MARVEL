import data from './data';
import { useState, useMemo, useDeferredValue } from 'react';

function App() {
    const [text, setText] = useState('');
    const [posts, setPosts] = useState(data);
    const deferredValue = useDeferredValue(text);

    const filteredPosts = useMemo(() => {
        return posts.filter(item => item.name.toLowerCase().includes(text));
    }, [deferredValue]);

    const onValueChange = (e) => {
        setText(e.target.value.toLowerCase());
    }

    return (
        <>
            <input value={text} type='text' onChange={onValueChange} />

            <hr />

            <div>
                {filteredPosts.map(post => (
                    <div key={post._id}>
                        <h4>{post._id} {post.name}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;


// import { useState } from "react";
// import AppHeader from "../appHeader/AppHeader";
// import RandomChar from "../randomChar/RandomChar";
// import CharList from "../charList/CharList";
// import CharInfo from "../charInfo/CharInfo";
// import ComicsList from "../comicsList/ComicsList";
// import AppBanner from "../appBanner/AppBanner";
// import ErrorBoundary from "../errorBoundary/ErrorBoundary";
// import TestComponent from "../testComponent/TestComponent";

// import decoration from '../../resources/img/vision.png';

// const App = () => {

//     const [selectedChar, setChar] = useState(null);

//     const onCharSelected = (id) => {
//         setChar(id);
//     }

//     return (
//         <div className="app">
//             <TestComponent />
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
//                 {/* <AppBanner />
//                 <ComicsList /> */}
//             </main>
//         </div>
//     )
// }


// export default App;
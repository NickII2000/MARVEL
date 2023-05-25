import { createContext } from 'react';

const dataContext = createContext({
    mail: "default@example.com",
    text: 'default  text'
});

export default dataContext;
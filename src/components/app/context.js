import { createContext } from 'react';

const dataContext = createContext({
    mail: "default@example.com",
    text: 'default  text',
    fourceChangeMail: () => { }
});

export default dataContext;
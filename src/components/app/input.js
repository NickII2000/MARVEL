import { useContext } from 'react';
import dataContext from './context';

const InputComponent = () => {

    const context = useContext(dataContext);

    return (
        <input
            value={context.mail}
            type="email"
            className='form-control'
            placeholder="name@example.com"
            onFource={context.forceChangeMail} />
    )
};

export default InputComponent;
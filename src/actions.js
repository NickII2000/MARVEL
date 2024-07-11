export const inc = () => ({ type: 'INC' });
export const dec = () => ({ type: 'DEC' });
export const rnd = () => {
    const value = Math.floor(Math.random() * 10);
    return { type: 'RND', payload: value };
};
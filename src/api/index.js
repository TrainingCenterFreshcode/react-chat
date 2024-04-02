export const getMessages = () => 
fetch('https://dummyjson.com/comments').then(res => res.json());
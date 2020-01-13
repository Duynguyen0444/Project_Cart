var initialState = [
    {
        id: 1,
        name: 'iPhone X',
        img: '',
        price: 1000,
        description: 'Apple',
        inventory: 10,
    },
    {
        id: 2,
        name: 'iPhone 11',
        img: '',
        price: 700,
        description: 'Apple in California',
        inventory: 20,
    },
    {
        id: 3,
        name: 'iPhone 11 Pro',
        img: '',
        price: 1000,
        description: 'Apple',
        inventory: 18,
    }
];

const product  = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
};

export default product; 


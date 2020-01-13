var initialState = [
    {
        id: 1,
        name: 'iPhone X',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphoneX-spacegray_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1548459944179',
        price: 1000,
        description: 'Apple',
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'iPhone 11',
        image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882&amp;hei=1058&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1567022175704',
        price: 700,
        description: 'Apple in California',
        inventory: 20,
        rating: 4
    },
    {
        id: 3,
        name: 'iPhone 11 Pro',
        image: 'https://clickbuy.com.vn/uploads/2019/09/thumb_11-ProMAX_2.jpg',
        price: 1000,
        description: 'Apple',
        inventory: 18,
        rating: 5
    }
];

const products  = (state = initialState, action) =>{
    switch(action.type){
        default: return [...state];
    }
};

export default products; 


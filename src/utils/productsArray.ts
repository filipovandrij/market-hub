 export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

const productsArray:Product[] = [
    {
        id:1,
title: 'iPhone 14 Pro',
description: 'This is iPhone 14 Pro',
type: 'phone',
capacity:'2516',
price: 2000,
image:'/images/Iphone_black.jpg'
    },
    {
        id:2,
title: 'iPhone 13 Pro',
description: 'This is iPhone 14 Pro',
type: 'phone',
capacity:'156',
price: 1500,
image:'/images/Iphone_blue.jpg'
    },
    {
        id:3,
title: 'iPhone 12 Pro',
description: 'This is iPhone 12 Pro',
type: 'phone',
capacity:'2546',
price: 200,
image:'/images/Iphone_gold.jpg'
    },
    {
        id:4,
title: 'iPhone 11 Pro',
description: 'This is iPhone 11 Pro',
type: 'phone',
capacity:'56',
price: 3000,
image:'/images/Iphone_green.jpg'
    },
    {
        id:5,
title: 'iPhone 10 Pro',
description: 'This is iPhone 10 Pro',
type: 'phone',
capacity:'556',
price: 12000,
image:'/images/Iphone_purple.jpg'
    },
    {
        id:6,
title: 'iPhone 9 Pro',
description: 'This is iPhone 9 Pro',
type: 'phone',
capacity:'56',
price: 100,
image:'/images/Iphone_white.jpg'
    },
]


export const getProductsObject = (array:Product[]) => 
array.reduce(
    (object,product) => ({
        ...object,
        [product.id]:product,
    }),
    {}
    )

    

export default productsArray
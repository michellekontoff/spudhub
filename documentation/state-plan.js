/* Shopping cart/cookie object {"product_id": "quantity" }
    Shopping cart in the store gets populated from the data/cookie,
    ---if item is added to cart but there is no cookie, then cookie is created
    ---when changes are made to the shopping cart the cookie is updated
    ---when the user purchases it the cookie data is used to construct an orders details entries
        ---the cookie gets deleted and clears the store */

store =
{
    shopping_cart: {
        1: {
            id: 1,
            unit_price: 14.17,
            quantity: 3
        },
        6: {
            id: 6, // this is the product id
            unit_price: 11.11,
            quantity: 4
        }
    },

    products: {
        1: {
            id: 1,
            user_id: 3,
            name: 'potato',
            description: 'yum yum',
            quantity: 1,
            price: 100,
        },
        2: {
            id: 2,
            user_id: 7,
            name: 'also potato',
            description: 'not as yum',
            quantity: 99,
            price: -40.90,
        }
    },

    session: {
        user: {
            id: 1,
            username: 'Username',
            address: 'end of the universe',
        }
    }
}

console.log(store)

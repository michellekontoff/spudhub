/* Shopping cart/cookie object {"product_id": "quantity" }
    Shopping cart in the store gets populated from the data/cookie,
    ---if item is added to cart but there is no cookie, then cookie is created
    ---when changes are made to the shopping cart the cookie is updated
    ---when the user purchases it the cookie data is used to construct an orders details entries
        ---the cookie gets deleted and clears the store */




/*
    User makes a new order.
    1) We create a new order entry in the orders table.
        - This will pull user_id from the session user.
        - This will pull total price from whatever is calculated on the shopping cart page
    2) We create new order details entries in the order details table for every item in the cart.
        - This goes through every item. It pulls the product_id and the quantity
        - Then we use the id of the order we just created, to become the order_id on our order detail.

        ORDER:
            id: 42
            user_id: 1,
            total_price: a lot

        For every item in cart, example:
        ORDER DETAIL:
            order_id: 42,
            product_id: 1,
            quantity: 3

        ORDER DETAIL:
            order_id: 42,
            product_id: 6,
            quantity: 4

*/

store =
    {
        shopping_cart: {
            1: {
                product_id: 1,
                quantity: 3
            },
            6: {
                product_id: 6,
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

        //perform a thunk/disptach thing when page renders, which populates store with that specific product's reviews

        reviews: { //only populated/refreshed upon visiting products/:id
            7: {
                id: 7,
                user_id: 45,
                product_id: 2,
                review,
                rating: 10
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



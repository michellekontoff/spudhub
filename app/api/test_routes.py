from flask import Blueprint, jsonify
from app.models import Product, Order, Order_Detail, Review, product

test = Blueprint('test', __name__)

@test.route('/')
def test1():
    products = Product.query.first()

    print('---------------------------------')
    print(products)

    # return {'products': [product.to_dict() for product in products]}
    return products.to_dict()


@test.route('/review')
def test2():
    review = Review.query.first()

    return review.to_dict()



@test.route('/order')
def test3():
    order = Order.query.first()
    return order.to_dict()

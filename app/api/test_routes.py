from flask import Blueprint, jsonify
from app.models import Product, Order, Order_Detail, Review

test = Blueprint('test', __name__)

@test.route('/')
def test1():
    products = Product.query.all()
    print({'products': [product.to_dict() for product in products]})
    return 

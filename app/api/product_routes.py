from flask import Blueprint
from app.models import Product

product_routes = Blueprint("products", __name__)

@product_routes.route("/")
def products():
    products = Product.query.all()
    return {product.to_dict()['id']: product.to_dict() for product in products}

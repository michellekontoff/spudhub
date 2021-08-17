from flask import Blueprint
from app.models import Product

product_routes = Blueprint("products", __name__)

@product_routes.route("/")
def products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}

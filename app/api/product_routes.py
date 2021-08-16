from flask import Blueprint
from app.models import Product

product_routes = Blueprint("products", __name__)

@product_routes.route("/")
def products():
    products = Product.query.all()
    # print(products[0].to_dict()[id])
    products = [product.to_dict() for product in products]
    print(products)
    return {product[id]: product for product in products}
    # {product[id]: product.to_dict() for product in products}

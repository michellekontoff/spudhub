from flask import Blueprint, request
from app.models import Product, db
from datetime import date, datetime
from app.forms.product_create_form import ProductCreateForm
product_routes = Blueprint("products", __name__)

@product_routes.route("/")
def products():
    products = Product.query.all()
    return {product.to_dict()['id']: product.to_dict() for product in products}


@product_routes.route("/create",methods=['POST'])
def create_product():
    form=ProductCreateForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_product = Product(user_id=data['user_id'], name=data['name'] , description=data['description'], price= data['price'], quantity= data['quantity'] , image=data['image'],created_at = datetime.now(), updated_at= datetime.now())
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
        # TODO: redirect to new page after new product is created

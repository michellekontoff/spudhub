from flask import Blueprint, request
from app.models import Product, db
from datetime import date, datetime
from app.forms.product_create_form import ProductCreateForm
from app.forms.product_edit_form import ProductEditForm
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
    else:

        return {'errors':form.errors},500


@product_routes.route('/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def product_page(id):
    product = Product.query.filter(Product.id == id).first()

    if request.method == 'GET':
        return product.to_dict()

    elif request.method == 'PUT':
        form = ProductEditForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            new_data = form.data
            product.name = new_data['name']
            product.description = new_data['description']
            product.price = new_data['price']
            product.quantity = new_data['quantity']
            product.image = new_data['image']
            product.updated_at = datetime.now()

            db.session.add(product)
            db.session.commit()
            return product.to_dict()
        else:
            return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(product)
        db.session.commit()
        return {"deletion":"successful"}

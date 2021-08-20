from flask import Blueprint, request
from app.models import db, Review
from datetime import  datetime
# from app.forms.review_create_form import ReviewForm
# from app.forms.review_edit_form import ReviewEditForm

review_routes = Blueprint("reviews", __name__)


@review_routes.route('/')
def all_reviews():

    reviews = Review.query.all()

    return {review.to_dict()['id']: review.to_dict() for review in reviews}


@review_routes.route('/create', method=["POST"])
def create_product():
    form = ReviewForm() # This is grabs the validators for the Review Form
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(): # Once validated , the user-inputs will be pulled from the form and saved as the data variable
        data = Review()
        form.populate_obj(data)
        data['create_at'] = datetime.now() # adds the created_at time individually since it wasn't used inside the Review Form
        data['updated_at'] = datetime.now()
        print(data)
        # db.session.add(data)
        # db.session.commit()
        return data.to_dict()
    else:
        return "Bad Data "



# @review_routes.route('/<int:id>', methods=[ 'PUT', 'DELETE'])
# def review_page(id):
#     review = Review.query.filter(Review.id == id).first()

#     if request.method == 'PUT':
#         form = ReviewEditForm()
#         form['csrf_token'].data = request.cookies['csrf_token']
#         if form.validate_on_submit():
#             new_data = form.data
#         # new_data =request.get_json()
#             product.name = new_data['name']
#             product.description = new_data['description']
#             product.price = new_data['price']
#             product.quantity = new_data['quantity']
#             product.image = new_data['image']
#             product.updated_at = datetime.now()

#             db.session.add(product)
#             db.session.commit()
#             return product.to_dict()
#         else:
#             return {'errors':form.errors},500

#     elif request.method == 'DELETE':
#         db.session.delete(product)
#         db.session.commit()
#         return {"deletion":"successful"}

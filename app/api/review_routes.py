from flask import Blueprint, request
from app.models import db, Review
from datetime import  datetime
from app.forms.review_create_form import ReviewCreateForm
from app.forms.review_edit_form import ReviewEditForm

review_routes = Blueprint("reviews", __name__)


@review_routes.route('/')
def all_reviews():

    reviews = Review.query.all()
    return {review.to_dict()['id']: review.to_dict() for review in reviews}


@review_routes.route('/create', methods=["POST"])
def create_review():

    form = ReviewCreateForm() # This is grabs the validators for the Review Form
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit(): # Once validated , the user-inputs will be pulled from the form and saved as the data variable
        data = form.data
        new_review = Review(
        user_id = data['user_id'],
        product_id = data['product_id'],
        review = data['review'],
        rating = data['rating'],
        created_at = datetime.now(), # adds the created_at time individually since it wasn't used inside the Review model
        updated_at = datetime.now(),
        )
        # form.populate_obj(data), this method might work as well
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    else:
        return {'errors':form.errors}, 500


#  according to TA, if we werent using wtforms, this is how to obtain the body from the request
# test = request.get_json()
# print(test)

    # this how the errors are returned
# {
#     "errors": {
#         "rating": [
#             "This field is required."
#         ],
#         "review": [
#             "Review must be between 2 and 255 characters."
#         ]
#     }
# }


@review_routes.route('/<int:id>', methods=[ 'PUT', 'DELETE'])
def review_page(id):
    review = Review.query.filter(Review.id == id).first()

    if request.method == 'PUT':
        form = ReviewEditForm()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            new_data = form.data
            review.rating = new_data['rating']
            review.review = new_data['review']
            review.updated_at = datetime.now()

            db.session.commit()
            return review.to_dict()
        else:
            return {'errors':form.errors},500

    elif request.method == 'DELETE':
        db.session.delete(review)
        db.session.commit()
        return {"deletion":"successful"}

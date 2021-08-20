from flask_wtf import FlaskForm
from wtforms import  TextAreaField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Review, review


# def check_name_on_edit(form, field):
#     name = field.data

#     review = Review.query.filter(Review.name == name).first()

#     if product and product.id != form.data['product_id']:
#         raise ValidationError("Name must be unique.")



class ProductEditForm(FlaskForm):


    description = TextAreaField('Description', validators=[DataRequired(), Length(min=2, max=255, message="Description must be between %(min)d and %(max)d characters.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)d.")])
    image = TextField("Image")

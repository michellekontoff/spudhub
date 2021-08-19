
from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Product


def check_name_and_length(form, field):
    name = field.data

    products = Product.query.filter(Product.name == name and Product.id != form.data['product_id']).all()
    print('----------------')
    print(products)
    print(form.data['product_id'])

    if 2 < len(name) > 50 or :
        raise ValidationError("Name must be between 2 and 50 characters.")




class ProductEditForm(FlaskForm):
    product_id = IntegerField("product_id")
    name = StringField('Name', validators=[DataRequired(), check_name_and_length])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=2, max=255, message="Description must be between %(min)d and %(max)d characters.")])
    price = DecimalField('Price', validators=[DataRequired(), NumberRange(min=0.01 ,max=99999999.99, message="Price must be between $%(min)d and $%(max)d.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)d.")])
    image = TextField("Image")

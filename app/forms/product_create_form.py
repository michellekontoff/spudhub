from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Product

def check_name_and_length(form, field):
    name = field.data
    product = Product.query.filter(Product.name == name).first()

    if product or 2 < len(name) > 50:
        raise ValidationError("Name must be unique and between 2 and 50 characters.")

    

class ProductCreateForm(FlaskForm):
    user_id = IntegerField()
    name= StringField('Name', validators=[DataRequired(), Length(min=2, max=50, message="Name must be between %(min)d and %(max)d characters.")])
    description = TextAreaField('Description', validators=[DataRequired(), check_name_and_length])
    price= DecimalField('Price', validators=[DataRequired(), NumberRange(min=0.01 ,max=99999999.99, message="Price must be between $%(min)d and $%(max)d.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)d.")])
    image = TextField("Image")

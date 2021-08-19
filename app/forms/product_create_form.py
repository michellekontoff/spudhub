from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Product

def check_name_on_create(form, field):
    name = field.data
    product = Product.query.filter(Product.name == name).first()

    if product:
        raise ValidationError("Name must be unique.")



class ProductCreateForm(FlaskForm):
    user_id = IntegerField()
    name= StringField('Name', validators=[DataRequired(), Length(min=2, max=50, message="Name must be between %(min)d and %(max)d characters."), check_name_on_create])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=2, max=255, message="Description must be between %(min)d and %(max)d characters.")])
    price= DecimalField('Price', validators=[DataRequired(), NumberRange(min=0.01 ,max=99999999.99, message="Price must be between $%(min)d and $%(max)d.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)d.")])
    image = TextField("Image")

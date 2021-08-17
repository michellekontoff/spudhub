from re import I
from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
# from app.models import Product


class ProductEditForm(FlaskForm):

    name= StringField('Name')
    description = TextAreaField('Description')
    price= DecimalField('Price')
    quantity = IntegerField('Quantity')
    image = TextField("Image")

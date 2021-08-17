from re import I
from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField

from wtforms.validators import DataRequired
# from app.models import Product

validators= [DataRequired()]

class ProductCreateForm(FlaskForm):
    user_id = IntegerField()
    name= StringField('Name', validators)
    description = TextAreaField('Description', validators)
    price= DecimalField('Price', validators)
    quantity = IntegerField('Quantity')
    image = TextField("Image")

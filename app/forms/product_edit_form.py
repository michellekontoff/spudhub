
from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField
from wtforms.validators import DataRequired, Length, NumberRange
# from app.models import Product





class ProductEditForm(FlaskForm):

    name= StringField('Name', validators=[DataRequired(), Length(min=2, max=50, message="Name must be between %(min)d and %(max)d characters.")])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=2, max=255, message="Description must be between %(min)d and %(max)d characters.")])
    price= DecimalField('Price', validators=[DataRequired(), NumberRange(min=0.01 ,max=99999999.99, message="Price must be between $%(min)d and $%(max)d.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)d.")])
    image = TextField("Image")

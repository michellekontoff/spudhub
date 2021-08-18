from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, TextAreaField, IntegerField, TextField

from wtforms.validators import DataRequired, Length, NumberRange



class ProductCreateForm(FlaskForm):
    user_id = IntegerField()
    name= StringField('Name', validators=[DataRequired(), Length(min=2, max=50, message="Name must be between %(min)% and %(max)% characters.")])
    description = TextAreaField('Description', validators=[DataRequired(), Length(min=2, max=255, message="Description must be between %(min)% and %(max)% characters.")])
    price= DecimalField('Price', validators=[DataRequired(), NumberRange(min=0.01 ,max=99999999.99, message="Price must be between $%(min)% and $%(max)%.")])
    quantity = IntegerField('Quantity',validators=[DataRequired(), NumberRange(min=1, message="Quantity must be at least %(min)% .")])
    image = TextField("Image")

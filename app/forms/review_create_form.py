from flask_wtf import FlaskForm
from wtforms import  TextAreaField, IntegerField, StringField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError
from app.models import Review



class ReviewCreateForm(FlaskForm):
    product_id = IntegerField()
    user_id = IntegerField()
    rating = StringField('Rating', validators=[DataRequired(message='Please choose a star rating')])
    review = TextAreaField('Review', validators=[DataRequired(message='Review cannot be blank'), Length(min=2, max=255, message="Review must be between %(min)d and %(max)d characters.")])

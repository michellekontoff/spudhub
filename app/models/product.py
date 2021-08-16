# from enum import unique
from app.models import review
from .db import db
from .order_detail import Order_Detail

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Numeric(precision=10, scale=2, asdecimal=False), nullable=False )
    quantity = db.Column(db.Integer , nullable=True)
    image = db.Column(db.Text, nullable=True)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)

    reviews = db.relationship("Review", backref=db.backref("products"), lazy=True )



    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'quantity': self.quantity,
            # 'review_ids':[review.id for review in self.reviews],
            'created_at': str(self.created_at),
            'updated_at': str(self.updated_at)

        }

    def get_reviews(self):
        return [review.to_dict() for review in self.reviews]

# from enum import unique
from sqlalchemy.orm import backref
from .db import db
from .order_detail import Order_Detail

class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(50), unique=True, nullable=False)
    description = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Numeric(10,2), nullable=False)
    quantity = db.Column(db.Integer , nullable=True)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)

    orders = db.relationship("Order", secondary=Order_Detail, backref=db.backref("products"), lazy=True)
    reviews = db.relationship("Review", backref=db.backref("products"), lazy=True )


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'quantity': self.quantity,
            'reviews': self.reviews,
            'created_at': self.created_at,
            'updated_at': self.updated_at

        }

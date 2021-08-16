
# from sqlalchemy.orm import backref
from .db import db
from .order_detail import Order_Detail



class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    total_price = db.Column(db.Numeric(precision=10, scale=2, asdecimal=False), nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)

# Might need to add a reciprical property to products
    products = db.relationship("Product", secondary='order_details', backref=db.backref("orders"), lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'total_price': self.total_price,
            'products':[{
                'id':product.id,
                'name':product.name,
                'price':product.price
                } for product in self.products],
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

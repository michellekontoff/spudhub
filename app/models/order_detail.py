from .db import db
# from .order import Order

# association = db.Table('association',
#     db.Column('order_id',db.Integer, db.ForeignKey('orders.id'),primary_key=True),
#     db.Column('product_id',db.Integer, db.ForeignKey('products.id'),primary_key=True)
# )


class Order_Detail(db.Model):
    __tablename__='order_details'

    id = db.Column(db.Integer,primary_key=True, nullable=False)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    order_id= db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)
    product_id= db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    quantity = db.Column(db.Integer , nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'order_id': self.order_id,
            'product_id': self.product_id,
            'quantity': self.quantity,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }

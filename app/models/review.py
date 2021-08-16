from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'


    id = db.Column(db.Integer, primary_key=True)
    user_id= db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    product_id= db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    review = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer, default=0, nullable=False)
    created_at = db.Column(db.Date , nullable=False)
    updated_at = db.Column(db.Date , nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'product_id': self.product_id,
            'review': self.review,
            'rating': self.rating,
            'created_at': self.created_at,
            'updated_at': self.updated_at

        }

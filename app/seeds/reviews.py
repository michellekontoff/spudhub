from app.models import db, Review
from datetime import datetime

def seed_reviews():
    review1 = Review(
        user_id = 1,
        product_id = 1,
        review = "Wow! Such a great potato!",
        rating = 3,
        created_at = datetime.now(),
        updated_at = datetime.now(),
    )

    db.session.add(review1)

    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()

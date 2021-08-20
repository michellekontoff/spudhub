from app.models import db, Order
from datetime import datetime

def seed_orders():

    order1 = Order(
        user_id = 1,
        total_price = 17.99,
        created_at = datetime.now(),
        updated_at = datetime.now(),
    )

    db.session.add(order1)

    db.session.commit()

def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()

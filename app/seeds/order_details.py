from app.models import db, Order_Detail
from datetime import datetime

def seed_order_details():

    order_detail1 = Order_Detail(
        user_id = 1,
        order_id = 1,
        product_id = 26,
        quantity = 2,
        created_at = datetime.now(),
        updated_at = datetime.now(),
    )

    order_detail2 = Order_Detail(
        user_id = 1,
        order_id = 1,
        product_id = 3,
        quantity = 4,
        created_at = datetime.now(),
        updated_at = datetime.now(),
    )

    db.session.add(order_detail1)
    db.session.add(order_detail2)

    db.session.commit()

def undo_order_details():
    db.session.execute('TRUNCATE order_details RESTART IDENTITY CASCADE;')
    db.session.commit()

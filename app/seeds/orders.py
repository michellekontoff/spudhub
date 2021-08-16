from app.models import db, Order
from datetime import datetime

# Adds a demo user, you can add other users here if you want
def seed_orders():

    order1 = Order(
        user_id = 1,
        total_price = 17.99,
        created_at = datetime.now(),
        updated_at = datetime.now(),
    )

    db.session.add(order1)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_orders():
    db.session.execute('TRUNCATE orders RESTART IDENTITY CASCADE;')
    db.session.commit()

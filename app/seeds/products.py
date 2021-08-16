from app.models import db, Product
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_products():
    p1= Product(
        user_id =1, name='potatoe', description='toeish', price='0.99', image='https://raw.githubusercontent.com/michellekontoff/spudhub/main/product_images/potato.jpg', created_at=datetime.now(), updated_at= datetime.now()
    )
    p2= Product(
        user_id =1, name='avocado', description='green', price='4.99',quantity=4, image='https://raw.githubusercontent.com/michellekontoff/spudhub/main/product_images/avocado.jpg', created_at=datetime.now(),updated_at=datetime.now()
    )
    p3= Product(
        user_id =2, name='radish', description='rad', price='499.00',quantity=1, image='https://raw.githubusercontent.com/michellekontoff/spudhub/main/product_images/radish.jpg', created_at=datetime.now(), updated_at=datetime.now()
    )

    # db.session.add(demo)
    # db.session.add(marnie)
    # db.session.add(bobbie)
    db.session.add(p1)
    db.session.add(p2)
    db.session.add(p3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the products table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, Product
from datetime import datetime
from app.seeds.product_list import products
import random

def seed_products():
    i = 0

    while i < len(products):
        name = products[i]
        split_name = name.split("_")
        j_name = (" ").join(split_name)
        p = Product(
            user_id = random.randint(1, 3),
            name=f'{ j_name.title() }',
            description=f'This is a locally grown { j_name }. It\'s fresh and ready to be eaten.',
            price=float(random.randint(1, 20)) + 0.99,
            image=(f'https://raw.githubusercontent.com/michellekontoff/spudhub/main/product_images/{ name }.jpg'),
            created_at=datetime.now(),
            updated_at= datetime.now()
        )
        db.session.add(p)
        i += 1

    db.session.commit()

def undo_products():
    db.session.execute('TRUNCATE products RESTART IDENTITY CASCADE;')
    db.session.commit()

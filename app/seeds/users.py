from app.models import db, User

def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()

def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

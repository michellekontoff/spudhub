# Welcome to [SpudHub](https://spudhub.herokuapp.com)!

[SpudHub](https://spudhub.herokuapp.com) is a site where people can buy locally grown produce from farmers who have excess goods to share. Users can add, update, and delte items they'd like to sell, and users can add, edit, delete, and purchase items from their shopping cart.

-------------

### Here are some quick links to our wiki pages:

[MVP Feature List](https://github.com/michellekontoff/spudhub/wiki/MVP-Features) - List of features needed for the minimum viable product

[User Stories](https://github.com/michellekontoff/spudhub/wiki/User-Stories) - List of user stories for each feature

[Layout Framework](https://github.com/michellekontoff/spudhub/wiki/layout-framework) - List and layout of our framework routes

[Database Schema](https://github.com/michellekontoff/spudhub/wiki/Database-Schema) - List of tables and relationships in our database

[API Routes](https://github.com/michellekontoff/spudhub/wiki/API-Routes) - List of API routes that will be used in our application

[Wireframes](https://github.com/michellekontoff/spudhub/wiki/Wireframes) - List of wireframe designs for each page

--------------------

## Visuals

### Log In & Sign Up
<img src='https://i.imgur.com/xNs1fA9.png' />

### Homepage
Non-logged in user
<img src='https://i.imgur.com/N5msA8N.png' />

Logged In user
<img src='https://i.imgur.com/0srnL4V.png' />

### Shopping Cart
<img src='https://i.imgur.com/9UjEnIX.png' />

### Product Details

Product Modal
<img src='https://i.imgur.com/coijFtq.png' />

Product Page
<img src='https://i.imgur.com/on1bpkB.png' />

Product Edit and Create Forms
<img src='https://i.imgur.com/h1tPRJc.png' />

-----------------

## Technology

- React
- Reduc
- JavaScript
- Python
- Flask
- PostgreSQL
- SQLAlchemy

-----------------

## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/michellekontoff/spudhub.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment

4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, run:

   ```bash
   npm start
   ```

## Technical Challenges

- Using localStorage as our shopping cart was a new and a challenging implementation because we incorporated it into our store state.
<img src='https://i.imgur.com/5aCmc8H.png' />

## Future Features

- [ ] Search Bar
- [ ] Reviews
- [ ] Categories
- [ ] Favorites

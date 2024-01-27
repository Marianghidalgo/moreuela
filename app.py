from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'app.sqlite')
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Guide(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    content = db.Column(db.String(144), unique=False)
    image = db.Column(db.String(1025), unique=False)
    content_two = db.Column(db.String(144), unique=False)

    def __init__(self, title, content, image, content_two):
        self.title = title
        self.content = content
        self.image = image
        self.content_two = content_two


class GuideSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'content', 'image', 'content_two')


guide_schema = GuideSchema()
guides_schema = GuideSchema(many=True)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

# Endpoint to create a new guide
@app.route('/guide', methods=["POST"])
def add_guide():
    title = request.json['title']
    content = request.json['content']
    image = request.json['image']
    content_two = request.json['content_two']

    new_guide = Guide(title, content, image, content_two)

    db.session.add(new_guide)
    db.session.commit()

    guide = Guide.query.get(new_guide.id)

    return guide_schema.jsonify(guide)

# Endpoint to query all guides
@app.route("/guides", methods=["GET"])
def get_guides():
    all_guides = Guide.query.all()
    result = guides_schema.dump(all_guides)
    return jsonify(result)

# Endpoint for querying a single guide
@app.route("/guide/<id>", methods=["GET"])
def get_guide(id):
    guide = Guide.query.get(id)
    return guide_schema.jsonify(guide)

# Endpoint for updating a guide
@app.route("/guide/<id>", methods=["PUT"])
def guide_update(id):
    guide = Guide.query.get(id)
    title = request.json['title']
    content = request.json['content']
    image = request.json['image']
    content_two = request.json['content_two']

    guide.title = title
    guide.content = content
    guide.image = image
    guide.content_two = content_two

    db.session.commit()
    return guide_schema.jsonify(guide)


# portfolio data
class Portfolio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    content = db.Column(db.String(144), unique=False)
    image = db.Column(db.String(1025), unique=False)
    imagetwo = db.Column(db.String(1025),unique=False)
    

    def __init__(self, title, content, image, imagetwo):
        self.title = title
        self.content = content
        self.image = image
        self.imagetwo = imagetwo
      

class PortfolioSchema(ma.Schema):
    class Meta:
        fields = ('id','title', 'content', 'image','imagetwo')


portfolio_schema = PortfolioSchema()
portfolios_schema = PortfolioSchema(many=True)


# Endpoint to create a new portfolio
@app.route('/portfolio', methods=["POST"])
def add_portfolio():
    title = request.json['title']
    content = request.json['content']
    image = request.json['image']
    imagetwo = request.json['imagetwo']
    
    
    new_portfolio = Portfolio(title, content, image, imagetwo)

    db.session.add(new_portfolio)
    db.session.commit()

    portfolio = Portfolio.query.get(new_portfolio.id)

    return guide_schema.jsonify(portfolio)

# Endpoint to query all portfolios
@app.route("/portfolios", methods=["GET"])
def get_portfolios():
    all_portfolios = Portfolio.query.all()
    result = portfolios_schema.dump(all_portfolios)
    return jsonify(result)


# Endpoint for querying a single portfolio
@app.route("/portfolio/<id>", methods=["GET"])
def get_portfolio(id):
    portfolio = Portfolio.query.get(id)
    return portfolio_schema.jsonify(portfolio)


# Endpoint for updating a portfolio
@app.route("/portfolio/<id>", methods=["PUT"])
def portfolio_update(id):
    portfolio = Portfolio.query.get(id)
    title = request.json['title']
    content = request.json['content']
    image = request.json['image']
    imagetwo = request.json['imagetwo']
   

    portfolio.title = title
    portfolio.content = content
    portfolio.image = image
    portfolio.imagetwo = imagetwo
    

    db.session.commit()
    return portfolio_schema.jsonify(portfolio)




#Database Shop
class Shop(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False)
    price = db.Column(db.Float(), unique=False)
    image = db.Column(db.String(1025), unique=False)
    description = db.Column(db.String(144), unique=False)
    amount = db.Column(db.Integer(), unique=False)

    def __init__(self, name, price, image, description, amount):
        self.name = name
        self.price = price
        self.image = image
        self.description = description
        self.amount = amount
        


class ShopSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'price', 'image', 'description', 'amount')


shop_schema = ShopSchema()
shops_schema = ShopSchema(many=True)

# Endpoint to create a new guide
@app.route('/shop', methods=["POST"])
def add_shop():
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    description = request.json['description']
    amount = request.json['amount']

    new_shop = Shop(name, price, image, description, amount)

    db.session.add(new_shop)
    db.session.commit()

    shop = Shop.query.get(new_shop.id)

    return shop_schema.jsonify(shop)

# Endpoint to query all shops
@app.route("/shops", methods=["GET"])
def get_shops():
    all_shops = Shop.query.all()
    result = shops_schema.dump(all_shops)
    return jsonify(result)

# Endpoint for querying a single shop
@app.route("/shop/<id>", methods=["GET"])
def get_shop(id):
    shop = Shop.query.get(id)
    return shop_schema.jsonify(shop)

# Endpoint for updating a shop
@app.route("/shop/<id>", methods=["PUT"])
def shop_update(id):
    shop = Shop.query.get(id)
    name = request.json['name']
    price = request.json['price']
    image = request.json['image']
    description = request.json['description']
    amount = request.json['amount']

    shop.name = name
    shop.price = price
    shop.image = image
    shop.description = description

    db.session.commit()
    return guide_schema.jsonify(shop)


# project data
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), unique=False)
    content = db.Column(db.String(144), unique=False)
    content_two = db.Column(db.String(144), unique=False)
    image = db.Column(db.String(1025), unique=False)
    imagetwo = db.Column(db.String(1025),unique=False)
    

    def __init__(self, title, content, content_two, image, imagetwo):
        self.title = title
        self.content = content
        self.content_two = content_two
        self.image = image
        self.imagetwo = imagetwo
      

class ProjectSchema(ma.Schema):
    class Meta:
        fields = ('id','title', 'content', 'content_two', 'image','imagetwo')


project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)


# Endpoint to create a new project
@app.route('/project', methods=["POST"])
def add_project():
    title = request.json['title']
    content = request.json['content']
    content_two = request.json['content_two']
    image = request.json['image']
    imagetwo = request.json['imagetwo']
    
    
    new_project = Project(title, content, content_two, image, imagetwo)

    db.session.add(new_project)
    db.session.commit()

    project = Project.query.get(new_project.id)

    return guide_schema.jsonify(project)

# Endpoint to query all projects
@app.route("/projects", methods=["GET"])
def get_projects():
    all_projects = Project.query.all()
    result = projects_schema.dump(all_projects)
    return jsonify(result)


# Endpoint for querying a single project
@app.route("/project/<id>", methods=["GET"])
def get_project(id):
    project = Project.query.get(id)
    return project_schema.jsonify(project)


# Endpoint for updating a project
@app.route("/project/<id>", methods=["PUT"])
def project_update(id):
    project = Project.query.get(id)
    title = request.json['title']
    content = request.json['content']
    content_two = request.json['content_two']
    image = request.json['image']
    imagetwo = request.json['imagetwo']
   

    project.title = title
    project.content = content
    project.content_two = content_two
    project.image = image
    project.imagetwo = imagetwo
    

    db.session.commit()
    return project_schema.jsonify(project)






if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)





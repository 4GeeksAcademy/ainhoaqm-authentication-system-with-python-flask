from api.models import db, User
from api.utils import APIException
from flask import Flask, request, jsonify, redirect, url_for, Blueprint
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity


api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

# Registration endpoint
@api.route('/register', methods=['POST'])
def register():
    data = request.get_json()

    if 'email' not in data or 'password' not in data:
        raise APIException("Email and password are required", status_code=400)

    if User.query.filter_by(email=data['email']).first():
        raise APIException("Email is already registered", status_code=400)

    new_user = User(email=data['email'], password=data['password'])
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201

# Login endpoint
@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    if 'email' not in data or 'password' not in data:
        raise APIException("Email and password are required", status_code=400)

    user = User.query.filter_by(email=data['email']).first()

    if user and user.password == data['password']:
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200
    else:
        raise APIException("Invalid email or password", status_code=401)

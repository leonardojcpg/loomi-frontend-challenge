from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime
import mysql.connector
import secrets
import bcrypt


apiServer = Flask(__name__)
CORS(apiServer)
apiServer.config['SECRET_KEY'] = secrets.token_hex(64)


connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='LEOgomes0605',
    database='loomi_users'
)

@apiServer.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    if not email or not password:
        return jsonify({'message': 'Email and password are required'}), 400
    
    cursor = connection.cursor()
    command = "SELECT idusers, password FROM users WHERE email = %s"
    values = (email,)
    cursor.execute(command, values)
    row = cursor.fetchone()
    
    if row is not None:
        idusers, db_password = row
        if db_password == password:
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'message': 'Invalid password'}), 401
    else:
        return jsonify({'message': 'User not found'}), 404
    
    cursor.close()



@apiServer.route('/users', methods=['GET'])
def get_users():
    cursor = connection.cursor()
    command = 'SELECT * FROM users'
    cursor.execute(command)
    result = cursor.fetchall()
    cursor.close()
    return jsonify(result)

@apiServer.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    cursor = connection.cursor()
    
    try:
        command = "INSERT INTO users (email, password) VALUES (%s, %s)"
        values = (new_user["email"], new_user["password"])
        cursor.execute(command, values)
        connection.commit()
        user_id = cursor.lastrowid
        token = jwt.encode({'user_id': user_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, apiServer.config['SECRET_KEY'], algorithm='HS256')

        cursor.close()
        return jsonify({"message": "User created successfully", "token": token}), 201
    except mysql.connector.Error as err:
        print("Error:", err)
        return jsonify({"message": "Failed to create user"}), 500



if __name__ == '__main__':
    apiServer.run(port=3000, host='localhost', debug=True)

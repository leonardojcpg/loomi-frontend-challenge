from flask import Flask, jsonify, request
import mysql.connector

apiServer = Flask(__name__)

# Conexão ao banco de dados
connection = mysql.connector.connect(
    host='localhost',
    user='root',
    password='LEOgomes0605',
    database='loomi_users'
)

@apiServer.route('/users', methods=['GET'])
def get_users():
    cursor = connection.cursor()
    command = 'SELECT * FROM users'
    cursor.execute(command)
    result = cursor.fetchall()
    cursor.close()
    return jsonify(result)

@apiServer.route('/users/<int:id>', methods=['GET'])
def get_user_by_id(id):
    cursor = connection.cursor()
    command = f'SELECT * FROM users WHERE id = {id}'
    cursor.execute(command)
    result = cursor.fetchone()
    cursor.close()
    if result:
        return jsonify(result)
    else:
        return jsonify({"message": "User not found"}), 404

@apiServer.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    cursor = connection.cursor()
    command = f'INSERT INTO users (email, password) VALUES ("{new_user["email"]}", "{new_user["password"]}")'
    cursor.execute(command)
    connection.commit()
    cursor.close()
    return jsonify({"message": "User created successfully"}), 201

if __name__ == '__main__':
    apiServer.run(port=3000, host='localhost', debug=True)

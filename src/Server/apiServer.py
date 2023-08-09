from flask import Flask, jsonify, request
from flask_cors import CORS
import mysql.connector

apiServer = Flask(__name__)
CORS(apiServer)

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

@apiServer.route('/users', methods=['POST'])
def create_user():
    new_user = request.get_json()
    cursor = connection.cursor()
    try:
        command = "INSERT INTO users (email, password) VALUES (%s, %s)"
        values = (new_user["email"], new_user["password"])
        cursor.execute(command, values)
        connection.commit()
        cursor.close()
        return jsonify({"message": "User created successfully"}), 201
    except mysql.connector.Error as err:
        print("Error:", err)
        return jsonify({"message": "Failed to create user"}), 500


if __name__ == '__main__':
    apiServer.run(port=3000, host='localhost', debug=True)

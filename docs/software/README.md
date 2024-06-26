# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення та початкового наповнення бази даних

``` SQL
-- MySQL Script generated by MySQL Workbench
-- Fri May  3 11:54:48 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8mb3 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`action`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`action` ;

CREATE TABLE IF NOT EXISTS `mydb`.`action` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(32) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`client`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`client` ;

CREATE TABLE IF NOT EXISTS `mydb`.`client` (
  `id` CHAR(36) NOT NULL,
  `login` VARCHAR(32) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_client_role1_idx` (`role_id` ASC) VISIBLE,
  CONSTRAINT `fk_client_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`mediadata`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`mediadata` ;

CREATE TABLE IF NOT EXISTS `mydb`.`mediadata` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` TEXT NOT NULL,
  `fileType` VARCHAR(32) NOT NULL,
  `metadata` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = MyISAM;


-- -----------------------------------------------------
-- Table `mydb`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`permission` ;

CREATE TABLE IF NOT EXISTS `mydb`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(32) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`permissions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`permissions` ;

CREATE TABLE IF NOT EXISTS `mydb`.`permissions` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_permissions_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_permissions_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_permissions_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `mydb`.`role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_permissions_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `mydb`.`permission` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`request`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`request` ;

CREATE TABLE IF NOT EXISTS `mydb`.`request` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `description` TEXT NULL DEFAULT NULL,
  `datetime` DATETIME NOT NULL,
  `action_id` INT NULL,
  `mediadata_id` INT NULL,
  `client_id` CHAR(36) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_request_action1_idx` (`action_id` ASC) VISIBLE,
  INDEX `fk_request_mediadata1_idx` (`mediadata_id` ASC) VISIBLE,
  INDEX `fk_request_client1_idx` (`client_id` ASC) VISIBLE,
  CONSTRAINT `fk_request_action1`
    FOREIGN KEY (`action_id`)
    REFERENCES `mydb`.`action` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_mediadata1`
    FOREIGN KEY (`mediadata_id`)
    REFERENCES `mydb`.`mediadata` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_request_client1`
    FOREIGN KEY (`client_id`)
    REFERENCES `mydb`.`client` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `mydb`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`role` ;

CREATE TABLE IF NOT EXISTS `mydb`.`role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = armscii8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`action`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'SingUp', 'Registration');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'Login', 'Authorisation');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'Help', 'User contact support');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'PasswordRecovery', 'User password recovery');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'DeleteRequest', 'Account deletion request');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'SearchRequest', 'Search for data');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'DataFilter', 'Data Filtering');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'Import', 'Loading data into the system');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'Export', 'Download data from the system');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'RequestHistory', 'User request history');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'AddSource', 'Add new source');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'DeleteSource', 'Delete data source');
INSERT INTO `mydb`.`action` (`id`, `name`, `description`) VALUES (DEFAULT, 'ProfileDelete', 'Delete account');
  
COMMIT;

-- -----------------------------------------------------
-- Data for table `mydb`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'Guest', 'A temporary visitor');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'User', 'Person who uses a system or service');
INSERT INTO `mydb`.`role` (`id`, `name`, `description`) VALUES (DEFAULT, 'Admin', 'Person who has control over and responsibility for a system or network');

-- -----------------------------------------------------
-- Data for table `mydb`.`client`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`client` (`id`, `login`, `email`, `password`, `role_id`) VALUES ('78b810fc-d32e-4ed1-9152-1c005301ca79', 'Andrew', 'andrew@student.com', 'passandrew', 1);
INSERT INTO `mydb`.`client` (`id`, `login`, `email`, `password`, `role_id`) VALUES ('24a189c6-f27a-42cc-a253-f806b9bc479c', 'Alex', 'alex@student.com', 'passalex', 1);
INSERT INTO `mydb`.`client` (`id`, `login`, `email`, `password`, `role_id`) VALUES ('61ea5b43-f794-4299-b4f2-7e607269bed1', 'The God', 'maks@student.com', 'maxpass', 2);
INSERT INTO `mydb`.`client` (`id`, `login`, `email`, `password`, `role_id`) VALUES ('aaa060e9-4bb3-493e-852d-fa5286300889', 'Jan', 'jan2stud@gmail.com', 'pasJan', 1);
COMMIT;

COMMIT;
```

## RESTfull сервіс для управління даними

### Модуль запуску сервера

```py
from init import create_app

app = create_app()

if __name__ == '__main__':
    app.run(debug=True)
```

### Модуль, що містить конфігураційні дані

```py
from dotenv import load_dotenv
import os

load_dotenv()  

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('SQLALCHEMY_DATABASE_URI')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY')
```

### Модуль, який визначає моделі бази даних

```py
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)  

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
```

### Модуль, що містить маршрути до сервісу

```py
from flask import Blueprint, request, jsonify
from models import db, User
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash

bp = Blueprint('routes', __name__)

@bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if not data or not 'username' in data or not 'email' in data or not 'password' in data:
        return jsonify({'message': 'Invalid data'}), 400
    
    new_user = User(username=data['username'], email=data['email'])
    new_user.set_password(data['password'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User registered successfully'}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if not user or not user.check_password(data['password']):
        return jsonify({'message': 'Invalid credentials'}), 401
    access_token = create_access_token(identity={'username': user.username, 'email': user.email})
    return jsonify({'access_token': access_token}), 200

@bp.route('/users', methods=['GET'])
@jwt_required()
def get_users():
    users = User.query.all()
    result = [{'id': user.id, 'username': user.username, 'email': user.email} for user in users]
    return jsonify(result), 200

@bp.route('/user', methods=['GET'])
@jwt_required()
def get_user():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404
    return jsonify({'id': user.id, 'username': user.username, 'email': user.email}), 200

@bp.route('/user', methods=['PUT'])
@jwt_required()
def update_user():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    data = request.get_json()
    if 'username' in data:
        user.username = data['username']
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.password = generate_password_hash(data['password'], method='sha256')

    db.session.commit()
    return jsonify({'message': 'User updated successfully'}), 200

@bp.route('/user', methods=['DELETE'])
@jwt_required()
def delete_user():
    current_user = get_jwt_identity()
    user = User.query.filter_by(username=current_user['username']).first()
    if not user:
        return jsonify({'message': 'User not found'}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'}), 200
```

## Ініціалізація Flask додатку

```py
from flask import Flask
from flask_jwt_extended import JWTManager
from config import Config
from models import db
from routes import bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    jwt = JWTManager(app)

    app.register_blueprint(bp)

    with app.app_context():
        db.create_all()

    return app
```

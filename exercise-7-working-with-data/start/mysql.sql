USE FrontEndMasters;

CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (user_id)
)  ENGINE=INNODB;

INSERT INTO Users (name) VALUES("Burke Holland")

SELECT * FROM Users

CREATE DATABASE FrontEndMasters;
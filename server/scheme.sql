DROP DATABASE IF EXISTS AsiaBarRestaurant;
CREATE DATABASE AsiaBarRestaurant;
USE AsiaBarRestaurant;

CREATE TABLE Users (
    Username VARCHAR(50) PRIMARY KEY NOT NULL,
    Password VARCHAR(50) NOT NULL
);

INSERT INTO Users VALUES ("admin", "admin");
INSERT INTO Users VALUES ("user", "user");
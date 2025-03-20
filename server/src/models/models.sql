DROP DATABASE IF EXISTS AsiaBarRestaurant;
CREATE DATABASE AsiaBarRestaurant;
USE AsiaBarRestaurant;

CREATE TABLE Users (
    Username VARCHAR(25) PRIMARY KEY NOT NULL,
    Type VARCHAR(25) NOT NULL,
    Password VARCHAR(100) NOT NULL
);

CREATE TABLE Clients (
    IdDocument VARCHAR(20) PRIMARY KEY NOT NULL,
    Name VARCHAR(50) NOT NULL,
    Address VARCHAR(25) NOT NULL,
    Phone VARCHAR(20) NOT NULL
);

CREATE TABLE Foods (
    Name VARCHAR(50) PRIMARY KEY NOT NULL,
    Availability INT DEFAULT TRUE NOT NULL,
    Price FLOAT NOT NULL,
    Category VARCHAR(50) NOT NULL,
    Description VARCHAR(100)
);

CREATE TABLE MainDish (
    FoodName VARCHAR(50),
    FOREIGN KEY (FoodName) REFERENCES Foods(Name) 
    -- Image BLOB NOT NULL (leaving this here just in case we need it)
);

CREATE TABLE SideDish (
    FoodName VARCHAR(50),
    FOREIGN KEY (FoodName) REFERENCES Foods(Name)
);

CREATE TABLE Product (
    FoodName VARCHAR(50),
    FOREIGN KEY (FoodName) REFERENCES Foods(Name), 
    Provider VARCHAR(50) NOT NULL,
    Quantity INT NOT NULL
);

CREATE TABLE Sales (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    ClientIdDocument VARCHAR(20),
    FOREIGN KEY (ClientIdDocoment) REFERENCES Clients(IdDocument),
    Type VARCHAR(20) NOT NULL,
    Total FLOAT NOT NULL
);

CREATE DATABASE hot;
USE hot;
CREATE TABLE waitlist(
	customerName VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) NOT NULL,
    customerID VARCHAR(100) NOT NULL
);

CREATE TABLE topFive(
	customerName VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) NOT NULL,
    customerID VARCHAR(100) NOT NULL
);
CREATE TABLE mastertable(
	customerName VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) NOT NULL,
    customerID VARCHAR(100) NOT NULL
);

DROP DATABASE hot;
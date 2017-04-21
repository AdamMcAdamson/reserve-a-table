CREATE DATABASE hot;
USE hot;
CREATE TABLE waitlist(
	customerName VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(100) NOT NULL,
    customerEmail VARCHAR(100) NOT NULL,
    customerID VARCHAR(100) NOT NULL
    );
    INSERT INTO hot.waitlist(customerName, phoneNumber, customerEmail, customerID)
    VALUES("John Smith","123-456-7890","testing@test.com","test123");
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
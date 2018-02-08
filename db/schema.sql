DROP DATABASE burgers_db;

-- Create burger database

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id int unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN default 0
);


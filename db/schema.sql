-- Create burger database

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id int unsigned NOT NULL auto_increment,
    burger_name varchar(30),
    devoured: boolean
);
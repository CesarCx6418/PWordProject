CREATE DATABASE  TheAdvdb;

USE  TheAdvdb;
CREATE TABLE phrase (
    id INT not null AUTO_INCREMENT,
    title VARCHAR(40),
    descript VARCHAR(250),
    cover VARCHAR(250),

    PRIMARY KEY(id)

)

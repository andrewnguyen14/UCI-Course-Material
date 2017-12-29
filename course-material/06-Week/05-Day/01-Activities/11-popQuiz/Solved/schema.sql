DROP DATABASE IF EXISTS whatever;

CREATE DATABASE whatever;

USE whatever;

CREATE TABLE whatever_table_you_want_man (
	id INT NOT NULL AUTO_INCREMENT,
	whatever_else_you_want_inside VARCHAR(111),
    PRIMARY KEY(id)
);

INSERT INTO whatever_table_you_want_man
(whatever_else_you_want_inside) VALUES
("kitties and dogs or something");

INSERT INTO whatever_table_you_want_man
(whatever_else_you_want_inside) VALUES
("uh");

INSERT INTO whatever_table_you_want_man
(whatever_else_you_want_inside) VALUES
("today's Friday");

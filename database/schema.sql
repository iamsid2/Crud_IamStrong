CREATE DATABASE IF NOT EXISTS crud;
USE crud;

CREATE TABLE Developers (
	id int NOT NULL AUTO_INCREMENT,
    developer_name varchar(255) NOT NULL,
		dev_org varchar[255] NOT NULL,
		dev_type varchar(255) NOT NULL,
		phone varchar(255) NOT NULL,
		address varchar(255),
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);

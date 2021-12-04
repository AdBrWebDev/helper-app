/*database users*/
CREATE TABLE users
(
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    phone VARCHAR(15),
    country VARCHAR(25) NOT NULL,
    city VARCHAR(25) NOT NULL,
    street VARCHAR(25),
    age INT NOT NULL,
    is_admin BOOLEAN,
    avatar BLOB(50000),
    e_mail VARCHAR(50)
)
ENGINE=INNODB

/*database user members*/
CREATE TABLE user_members
(
	id_user INT,
    members_mail VARCHAR(50) NOT NULL,
    name VARCHAR(20) NOT NULL,
    surname VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

/*nature form*/
CREATE TABLE nature_form
(
	id_user INT,
    date DATETIME,
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

/*e-shop*/
CREATE TABLE e_shop
(
	id_product INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(40),
    price DOUBLE(10, 2),
    contain_in_warehouse INT
)
ENGINE=INNODB


/*e-shop product image*/
CREATE TABLE eshop_product_image
(
	id_product INT NOT NULL,
    img MEDIUMBLOB,
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product)
)
ENGINE=INNODB

/*e-shop product text*/
CREATE TABLE eshop_product_text
(
	id_product INT,
    text TEXT(5000),
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product)
)
ENGINE=INNODB

/*orders*/
CREATE TABLE orders
(
	id_order INT AUTO_INCREMENT PRIMARY KEY,
    id_product INT NOT NULL,
    id_user INT,
   	order_created DATETIME,
    contain INT,
    delivery_date DATE,
    FOREIGN KEY (id_product) REFERENCES e_shop(id_product),
    FOREIGN KEY (id_user) REFERENCES users(id_user)
)
ENGINE=INNODB

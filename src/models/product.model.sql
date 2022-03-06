CREATE TABLE products(
                  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
                  product_name varchar(30) NOT NULL UNIQUE, 
                  product_description varchar(30) NOT NULL,
                  product_varieties json NOT NULL,
                  date_uploaded DATETIME NOT NULL DEFAULT date.now() NOT NULL,
                  date_edited DATETIME NOT NULL DEFAULT date.now() NOT NULL
                );



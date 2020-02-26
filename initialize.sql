SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users, labs, logs, inventory;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50),
  PRIMARY KEY (id)
);

CREATE TABLE labs (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  lab_name VARCHAR(50),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE logs (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  entry_date VARCHAR(20),
  entry TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
    ON DELETE CASCADE
);

CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  lab_id INT NOT NULL,
  chemical VARCHAR(50),
  quantity VARCHAR(20),
  location VARCHAR(50),
  size VARCHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (lab_id)
  REFERENCES labs (id)
    ON DELETE CASCADE
);

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS users, logs, procedures, books, labs, inventory;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  email VARCHAR(50) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE books (
  id INT NOT NULL AUTO_INCREMENT,
  book VARCHAR(20) NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id)
);

CREATE TABLE logs (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  book_id INT NOT NULL,
  book_entry_number INT NOT NULL,
  rxn_sketch JSON,
  quick_info VARCHAR(50),
  results VARCHAR(50),
  yield VARCHAR(20),
  last_updated VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id)
  REFERENCES users (id),
  FOREIGN KEY (book_id)
  REFERENCES books (id)
    ON UPDATE CASCADE
);

CREATE TABLE procedures (
  id INT NOT NULL AUTO_INCREMENT,
  log_id INT NOT NULL,
  date VARCHAR(20),
  entry TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (log_id)
  REFERENCES logs (id)
);

INSERT INTO users
	(first_name, last_name, email, password)
VALUES 
  ("James","Butt", "email1@email.com", '$2b$10$2GAXxmrcSesWfMB56SUziehilZ0uC6WH6bDW98WJUjivo9zCLvryO'),
  ("Josephine","Darakjy", "email2@email.com",'$2b$10$2GAXxmrcSesWfMB56SUziehilZ0uC6WH6bDW98WJUjivo9zCLvryO'),
  ("Chauncey","Motley", "email3@email.com",'abc123');

  INSERT INTO books
    (book, user_id)
  VALUES
    ("Book 1", 2),
    ("Book 2", 2);

  INSERT INTO logs
    (user_id, book_id, book_entry_number, rxn_sketch, quick_info, results, yield, last_updated)
  VALUES
  (2, 2, 1, '{ "fileData": null, "fileType": null }', "QUICKINFO1", "RESULTS1", "90%", "1591908933467"), 
  (2, 1, 4, '{ "fileData": null, "fileType": null }', "QUICKINFO1", "RESULTS1", "90%", "1591908909547"),
  (2, 1, 3, '{ "fileData": null, "fileType": null }', "QUICKINFO2", "RESULTS2", "95%", "1591908872958"),
  (2, 1, 2, '{ "fileData": null, "fileType": null }', "QUICKINFO3", "RESULTS3", "100%", "1591908806037"),
  (2, 1, 1, '{ "fileData": null, "fileType": null }', "QUICKINFO4", "RESULTS4", "105%", "1591908787894");

  INSERT INTO procedures
    (log_id, date, entry)
  VALUES
    (1, "11/11/11", "entry for procedure 1"),
    (1, "22/22/22", "entry for procedure 2"),
    (2, "11/11/11", "entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1eentry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1ntry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1entry for procedure 1"),
    (2, "22/22/22", "entry for procedure 2"),
    (3, "33/33/33", "entry for procedure 1"),
    (3, "44/44/44", "entry for procedure 2"),
    (4, "55/55/55", "entry for procedure 1"),
    (4, "66/66/66", "entry for procedure 2"),
    (5, "05/14/91", "entry for procedure 1"),
    (5, "05/14/91", "entry for procedure 2");
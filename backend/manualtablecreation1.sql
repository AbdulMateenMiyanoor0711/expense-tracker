SELECT * FROM expense_tracker.users;

CREATE TABLE session (
id INT PRIMARY KEY AUTO_INCREMENT,
token varchar(500),
 valid_till DATETIME NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE user_budget(
id INT PRIMARY KEY AUTO_INCREMENT,
user_id int not null,
FOREIGN KEY (user_id) REFERENCES users(id),
budget_amount DECIMAL(10,2) not null default 0,
created_at datetime not null default CURRENT_TIMESTAMP
);

CREATE TABLE user_expense(
id INT PRIMARY KEY AUTO_INCREMENT,
user_id int not null,
FOREIGN KEY (user_id) REFERENCES users(id),
expense_name varchar(100) not null,
expense_date datetime,
expense_category varchar(200) not null,
expense_amount decimal(10,2) not null default 0
);
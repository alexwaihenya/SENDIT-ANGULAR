CREATE TABLE User 
(   id INT PRIMARY KEY IDENTITY(1,1),
    userName VARCHAR(200) UNIQUE, 
    email VARCHAR(200) NOT NULL UNIQUE , 
    password VARCHAR(200), 
    role VARCHAR(200) DEFAULT 'user'
)
 UPDATE Users SET role='admin' WHERE id ='1'
CREATE OR ALTER PROCEDURE welcomeEmail
AS
BEGIN
SELECT * FROM USERS
WHERE is_sent='no'
END
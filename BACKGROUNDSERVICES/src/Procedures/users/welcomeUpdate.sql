CREATE PROCEDURE welcomeEmailUpdate
AS
BEGIN
UPDATE USERS
SET 

is_sent='yes'

WHERE 
is_sent = 'no'
END
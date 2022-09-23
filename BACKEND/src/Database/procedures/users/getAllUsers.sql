CREATE PROCEDURE getUsers
AS
BEGIN
	IF EXISTS(SELECT username,email FROM dbo.USERS WHERE role = 'user')
	BEGIN
		SELECT username,email FROM dbo.USERS WHERE role = 'user';
	END

	ELSE

	BEGIN
		RAISERROR('No user currently', 11,1)
		RETURN;
	END
END


CREATE PROCEDURE getAllUsers

AS 
BEGIN

SELECT * FROM USERS
WHERE role = 'user'

END
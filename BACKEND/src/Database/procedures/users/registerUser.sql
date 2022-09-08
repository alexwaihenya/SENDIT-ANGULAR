CREATE PROCEDURE registerUser (@username VARCHAR(200),@email VARCHAR(200),@password VARCHAR(200))
AS
BEGIN
	IF EXISTS (SELECT * FROM USERS WHERE email=@email)
		BEGIN 
			RAISERROR ('Email Taken, try a different email',11,1);
		END
	IF EXISTS(SELECT * FROM USERS WHERE username = @username)
		BEGIN 
			RAISERROR ('username Taken, try a different one',11,1);
		END
		
		ELSE

	BEGIN
		INSERT INTO USERS (username,email,password) 
		VALUES(@username,@email, @password)
	END
END
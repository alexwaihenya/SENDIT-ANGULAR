CREATE PROCEDURE updateParcel(
			
			@parcel_id INT,
			@senderemail VARCHAR(200),
            @receiveremail  VARCHAR(200),
            @fromLoc  VARCHAR(200),
            @parcel_desc  VARCHAR(200),
            @toLoc  VARCHAR(200),
            @status  VARCHAR(200),
            @weight INT,
            @price INT)
AS 
BEGIN
	IF EXISTS (SELECT * FROM PARCELS WHERE parcel_id = @parcel_id )
	BEGIN
	UPDATE  PARCELS
	SET
	senderemail = @senderemail,
    receiveremail = @receiveremail,
	parcel_desc = @parcel_desc ,
    fromLoc = @fromLoc,
    toLoc = @toLoc,
    status = @status,
    weight = @weight,
    price = @price
	WHERE parcel_id = @parcel_id
	END
END	
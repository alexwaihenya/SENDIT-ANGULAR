CREATE PROCEDURE INSERTUPDATE(

    
    @senderemail VARCHAR(200), 
    @receiveremail VARCHAR(200),
    @parcel_desc VARCHAR(200)
    @fromLoc VARCHAR(200) ,
    @toLoc VARCHAR(200),
    @status VARCHAR(200),
    @weight INT, 
    @price INT

)
AS 

BEGIN

INSERT INTO PARCELS
(senderemail,
receiveremail,
parcel_desc,
fromLoc,
toLoc,
status,
weight,
price)
VALUES(
	@senderemail,
	@receiveremail,
	@parcel_desc,
	@fromLoc,
	@toLoc,
	@status,
	@weight,
	@price)
END


ALTER PROCEDURE [dbo].[INSERTUPDATE](

    @parcel_id INT ,
    @senderemail VARCHAR(200),
    @receiveremail VARCHAR(200) ,
	@parcel_desc VARCHAR(200),  
    @fromLoc VARCHAR(200),
    @toLoc VARCHAR(200),
    @status VARCHAR(200),
    @weight INT,
    @price INT,
	@is_sent VARCHAR(200),
    @is_delivered VARCHAR(200),
	@is_deleted BIT  
)
AS 
BEGIN
	IF EXISTS (SELECT * FROM PARCELS WHERE parcel_id = @parcel_id AND status='dispatched')
	BEGIN
	UPDATE  PARCELS
	SET parcel_id = @parcel_id,
	senderemail = @senderemail,
    receiveremail = @receiveremail,
	parcel_desc = @parcel_desc ,
    fromLoc = @fromLoc,
    toLoc = @toLoc,
    status = @status,
    weight = @weight,
    price = @price,
	is_sent = @is_sent,
    is_delivered = @is_delivered,
	is_deleted = @is_deleted
	WHERE parcel_id = @parcel_id
	END

	ELSE
		BEGIN
		INSERT INTO PARCELS(
		senderemail,receiveremail,parcel_desc,fromLoc,toLoc,status,weight,price
		)
		VALUES(
		@senderemail,@receiveremail,@parcel_desc,@fromLoc,@toLoc,@status,@weight,@price
		)
		END
END
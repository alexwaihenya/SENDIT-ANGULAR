CREATE PROCEDURE addParcel(

    
    @senderemail VARCHAR(200), 
    @receiveremail VARCHAR(200),
    @parcel_desc VARCHAR(200)
    @fromLoc VARCHAR(200) ,
    @toLoc VARCHAR(200),
    @parcel_desc VARCHAR(200),
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
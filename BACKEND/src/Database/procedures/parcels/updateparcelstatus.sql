-- parcel sent
CREATE PROCEDURE UPDATEPARCELSENT(

    @parcel_id INT
    )
	
AS 
BEGIN
	IF EXISTS(SELECT * FROM PARCELS WHERE parcel_id = @parcel_id AND is_sent='no' AND is_deleted=0)
	BEGIN
		UPDATE PARCELS
		SET is_sent = 'yes'
		where parcel_id = @parcel_id
	END
	ELSE
		BEGIN
			RAISERROR('parcel is already sent',11,1);
			RETURN;
			
		END
		
	
END

-- parcel delivered
CREATE PROCEDURE UPDATEPARCELSENT(

    @parcel_id INT
    )
	
AS 
BEGIN
	IF EXISTS(SELECT * FROM PARCELS WHERE parcel_id = @parcel_id AND is_sent='no' AND is_deleted=0)
	BEGIN
		UPDATE PARCELS
		SET is_sent = 'yes'
		where parcel_id = @parcel_id
	END
	ELSE
		BEGIN
			RAISERROR('parcel is already sent',11,1);
			RETURN;
			
		END
		
	
END


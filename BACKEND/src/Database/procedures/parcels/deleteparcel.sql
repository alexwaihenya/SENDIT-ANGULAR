-- CREATE PROCEDURE deleteParcel(@parcel_id INT)


-- AS 
-- BEGIN
-- 	IF EXISTS(SELECT * FROM PARCELS WHERE parcel_id=@parcel_id)
-- 		BEGIN
-- 			DELETE FROM PARCELS
-- 			WHERE parcel_id = @parcel_id
-- 		END
-- 	ELSE
-- 		BEGIN
-- 		RAISERROR('parcel does not exist..',11, 1);
-- 		RETURN;
-- 	END
		
-- END


CREATE PROCEDURE deleteParcel(@parcel_id INT)


AS 
BEGIN
	IF EXISTS(SELECT * FROM PARCELS WHERE parcel_id=@parcel_id AND is_deleted=0)
	BEGIN
		UPDATE PARCELS
		SET is_deleted = 1
		WHERE parcel_id = @parcel_id
		
	END
	ELSE
		BEGIN
			RAISERROR('parcel does not exist',11,1);
			RETURN;
			
		END
END
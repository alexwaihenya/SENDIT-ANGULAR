CREATE PROCEDURE deliveredEmail

AS

BEGIN

    SELECT * FROM PARCELS WHERE is_delivered='no'

END


-- CREATE PROCEDURE updatedeliveredEmail(@parcel_id INT)

-- AS

-- BEGIN

--     UPDATE PARCELS SET is_delivered='yes' WHERE parcel_id = @parcel_id

-- END

CREATE OR ALTER PROCEDURE updateDelivered(@parcel_id VARCHAR(200))
AS
BEGIN
SELECT * FROM parcels WHERE parcel_id=@parcel_id AND is_sent='no'
UPDATE parcels
SET
is_sent='yes'
END
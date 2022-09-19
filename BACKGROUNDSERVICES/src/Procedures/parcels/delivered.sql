CREATE PROCEDURE deliveredEmail

AS

BEGIN

    SELECT * FROM PARCELS WHERE is_delivered='no'

END


CREATE PROCEDURE updatedeliveredEmail(@parcel_id INT)

AS

BEGIN

    UPDATE PARCELS SET is_delivered='yes' WHERE parcel_id = @parcel_id

END
CREATE PROCEDURE dispatchEmail

AS

BEGIN

    SELECT * FROM PARCELS WHERE is_sent='no'

END

CREATE PROCEDURE updateDispatchEmail(@parcel_id INT)

AS

BEGIN

    UPDATE PARCELS SET is_sent='yes' WHERE parcel_id = @parcel_id

END
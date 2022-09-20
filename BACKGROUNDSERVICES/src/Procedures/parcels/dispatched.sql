-- CREATE PROCEDURE dispatchEmail

-- AS

-- BEGIN

--     SELECT * FROM PARCELS WHERE is_sent='no'

-- END


CREATE OR ALTER PROCEDURE dispatchEmail

AS

BEGIN

    SELECT * FROM PARCELS WHERE status='dispatched' and is_sent='no'

END
CREATE OR ALTER PROCEDURE updateDispatchEmail

AS

BEGIN

    UPDATE PARCELS SET is_sent='yes' 

END

CREATE OR ALTER PROCEDURE receiverDispatched(@parcel_id VARCHAR(200))
AS
BEGIN
SELECT * FROM parcels WHERE parcel_id=@parcel_id AND is_sent='no'
UPDATE parcels
SET
is_sent='yes'
END


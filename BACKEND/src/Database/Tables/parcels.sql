CREATE TABLE PARCELS (
    parcel_id INT PRIMARY KEY  IDENTITY(1,1),
    senderemail VARCHAR(200) NOT NULL,
    receiveremail VARCHAR(200) NOT NULL,
	parcel_desc VARCHAR(200) NOT NULL,
    fromLoc VARCHAR(200) NOT NULL,
	fromLat INT NOT NULL,
	fromLong INT NOT NULL,
    toLoc VARCHAR(200) NOT NULL,
	toLat INT NOT NULL,
	toLong INT NOT NULL,
    status VARCHAR(200) NOT NULL,
    weight INT NOT NULL,
    price INT NOT NULL,
	is_sent VARCHAR(200) DEFAULT 'no',
    is_delivered VARCHAR(200) DEFAULT 'no',
	is_deleted BIT DEFAULT 0 NOT NULL
)
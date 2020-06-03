CREATE TABLE LIGHTS (
	Light_partNum VARCHAR(30) NOT NULL,
	Wattage INT,
	Voltage INT,
	Socket VARCHAR(30),
	Bulb_type VARCHAR(30),
	PRIMARY KEY (Light_partNum)
);
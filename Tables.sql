CREATE TABLE SPARK_PLUG (
	Spark_partNum INT NOT NULL,
	Drive_size FLOAT NOT NULL,
	Thread_size INT NOT NULL,
	Seat_style VARCHAR(10),
	PRIMARY KEY (Spark_partNum)
);

CREATE TABLE LIGHTS (
	Light_partNum INT NOT NULL,
	Wattage INT NOT NULL,
	Lifespan INT NOT NULL,
	Color_temp INT NOT NULL,
	Socket INT NOT NULL,
	PRIMARY KEY (Light_partNum)
);

CREATE TABLE TIRES (
	Tire_partNum INT NOT NULL,
	Pressure INT NOT NULL,
	Construction VARCHAR(10),
	Diameter INT NOT NULL,
	Width INT NOT NULL,
	Type_Tires VARCHAR(10),
	PRIMARY KEY (Tire_partNum)
);

CREATE TABLE WHEELS (
	Rim_size INT NOT NULL, 
	Wheel_partNum INT NOT NULL, 
	Tire_partNum INT NOT NULL, 
	PRIMARY KEY (Wheel_partNum),
	FOREIGN KEY (Tire_partNum)
);

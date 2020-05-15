CREATE TABLE WHEELS (
	Rim_size INT NOT NULL, 
	Wheel_partNum INT NOT NULL, 
	Tire_partNum INT NOT NULL, 
	PRIMARY KEY (Wheel_partNum),
	FOREIGN KEY (Tire_partNum) REFERENCES TIRES (Tire_partNum)
);

CREATE TABLE WHEELS (
	Rim_size INT NOT NULL, 
	Wheel_partNum VARCHAR(30) NOT NULL, 
	Tire_partNum VARCHAR(30) NOT NULL, 
	PRIMARY KEY (Wheel_partNum),
	FOREIGN KEY (Tire_partNum) REFERENCES TIRES (Tire_partNum)
);

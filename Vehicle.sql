CREATE TABLE VEHICLE (
    Model_year INT NOT NULL,
    Make VARCHAR(30),
    Model VARCHAR(30),
    Engine_modelNum INT NOT NULL,
    Light_partNum INT NOT NULL,
    Wheel_partNum INT NOT NULL,
    PRIMARY KEY (Model_year, Make, Model),
    FOREIGN KEY (Engine_modelNum) REFERENCES ENGINE (Engine_modelNum), 
    FOREIGN KEY (Light_partNum) REFERENCES LIGHTS (Light_partNum),
    FOREIGN KEY (Wheel_partNum) REFERENCES WHEELS (Wheel_partNum)
);
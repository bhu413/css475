CREATE TABLE VEHICLE (
    Model_year INT NOT NULL,
    Make VARCHAR(30),
    Model VARCHAR(30),
    Engine_modelNum VARCHAR(30) NOT NULL,
    Light_partNum VARCHAR(30) NOT NULL,
    Wheel_partNum VARCHAR(30) NOT NULL,
    PRIMARY KEY (Model_year, Make, Model),
    FOREIGN KEY (Engine_modelNum) REFERENCES ENGINE (Engine_modelNum), 
    FOREIGN KEY (Light_partNum) REFERENCES LIGHTS (Light_partNum),
    FOREIGN KEY (Wheel_partNum) REFERENCES WHEELS (Wheel_partNum)
);
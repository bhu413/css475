CREATE TABLE ENGINE (
    Engine_modelNum VARCHAR(30) NOT NULL,
    Gasket VARCHAR(30),
    Displacement FLOAT NOT NULL,
    Oil VARCHAR(30),
    Fuel VARCHAR(30),
    Cylinder INT NOT NULL,
    Spark_partNum VARCHAR(30) NOT NULL,
    PRIMARY KEY (Engine_modelNum),
    FOREIGN KEY (Spark_partNum) REFERENCES SPARK_PLUG (Spark_partNum)
);
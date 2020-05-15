CREATE TABLE ENGINE (
    Engine_modelNum INT NOT NULL,
    Gasket VARCHAR(30),
    Displacement FLOAT NOT NULL,
    Injectors VARCHAR(30),
    Oil VARCHAR(30),
    Fuel VARCHAR(30),
    Cylinder INT NOT NULL,
    Spark_partNum INT NOT NULL,
    PRIMARY KEY (Engine_modelNum),
    FOREIGN KEY (Spark_partNum) REFERENCES SPARK_PLUG (Spark_partNum)
);
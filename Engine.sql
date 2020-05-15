CREATE TABLE ENGINE (
    Engine_modelNum INT NOT NULL,
    Gasket VARCHAR(10),
    Displacement FLOAT NOT NULL,
    Injectors VARCHAR(10),
    Oil VARCHAR(10),
    Fuel VARCHAR(10),
    Cylinder INT NOT NULL,
    Spark_partNum INT NOT NULL,
    PRIMARY KEY (Engine_modelNum),
    FOREIGN KEY (Spark_partNum) REFERENCES SPARK_PLUG (Spark_partNum)
);
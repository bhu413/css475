

alter table Vehicle drop constraint PK__SPARK_PL__DD4B6482526F33C4;

alter table engine drop column Spark_partNum;

alter table Spark_Plug alter column Spark_partNum varchar(30);

alter table Spark_plug add primary key (Spark_partNum);

alter table engine add Spark_partNum varchar(30);

alter table engine add Foreign Key (Spark_partNum) REFERENCES SPARK_PLUG (Spark_partNum);



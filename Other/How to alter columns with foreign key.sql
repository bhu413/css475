

alter table Wheels drop constraint PK__WHEELS__D6441F88DD27AD5E;

alter table Vehicle drop column Wheel_partNum;

alter table Wheels alter column Wheel_partNum varchar(30);

alter table Wheels add primary key (Wheel_partNum);

alter table Vehicle add Wheel_partNum varchar(30);

alter table Vehicle add Foreign Key (Wheel_partNum) REFERENCES Wheels (Wheel_partNum);



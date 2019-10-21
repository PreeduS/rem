\c demo_db;
CREATE table demo_table(userid int);

INSERT INTO demo_table(userid) VALUES(10);
INSERT INTO demo_table(userid) VALUES(11);

\d demo_table;
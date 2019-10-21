FROM postgres
COPY db_init.sql /opt/demo/db_init.sql

RUN psql demo_db -U postgres -h localhost  -p 5432;
#RUN chmod -R 777 /var/lib/postgresql/data;
#RUN chown -R postgres /var/lib/postgresql/data;

#CMD psql -U postgres -h localhost -p 5432 -c psql -U postgres -f /opt/demo/db_init.sql
CMD psql -U postgres -f /opt/demo/db_init.sql
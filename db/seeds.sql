INSERT INTO department (department_name)
VALUES("Sales"), ("Engineering"), ("Legal"), ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES("Sales Lead", 100000, 2), ("Sales Person", 80000, 2), ("Lead Engineer", 150000, 4), ("Software Engineer", 120000, 4); 

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('John', 'Doe', 1, null), ('Mike', 'Chan', 2, 1), ('Ashley', 'Rodriguez', 3, 4), ('Kevin', 'Tupik', 4, 5); 





  
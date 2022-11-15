INSERT INTO department (id, department_name)
VALUES(1, "Sales"), (2, "Engineering"), (3, "Legal"), (4, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES(1, "Sales Lead", 100000, 2), (2, "Sales Person", 80000, 2), (3, "Lead Engineer", 150000, 4), (4, "Software Engineer", 120000, 4); 

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES(1, 'John', 'Doe', 1, null), (2, 'Mike', 'Chan', 2, 1), (3, 'Ashley', 'Rodriguez', 3, 4), (4, 'Kevin', 'Tupik', 4, 5); 





  
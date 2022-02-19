INSERT INTO department(department_id, name)
VALUES
    ('1', 'Front Office',),
    ('2', 'Ticket Sales',),
    ('3', 'Marketing',),
    ('4', 'Player Personnel',);

INSERT INTO role(role_id, title, salary, department_id)
VALUES
    ('1', 'General Manager', 100000, '1',),
    ('2', 'Assistant GM', 80000, '1',),
    ('3', 'Scout', 50000, '1',),
    ('4', 'Director of Ticket Sales', 50000, '2',),
    ('5', 'Account Executive', 40000, '2',),
    ('6', 'Marketing Director', 40000, '3',),
    ('7', 'Marketing Coordinator', 30000, '3',),
    ('8', 'Director of Player Personnel', 600000, '4',),
    ('9', 'Manager', 500000, '4',),
    ('10', 'Coach', 100000, '4',);

INSERT INTO employee(employee_id, first_name, last_name, role_id, manager_id)
VALUES
    ('1', 'Brian', 'Cashman', '1', NULL,),
    ('2', 'Jean', 'Afterman', '2', '1',),
    ('3', 'Zack', 'Greenfield', '3', '2',),
    ('4', 'Dan', 'Caplan', '4', NULL,),
    ('5', 'Keith', 'Dolega', '5', '4',),
    ('6', 'James', 'Sensale', '5', '4',),
    ('7', 'Evan', 'James', '5', '4',),
    ('8', 'Chris', 'Bitetto', '6', NULL),
    ('9', 'Eric', 'Feibusch', '7', '6',),
    ('10', 'Justin', 'Klemm', '8', NULL),
    ('11', 'Jeff', 'Moody', '9', '8',),
    ('12', 'Tom', 'Butto', '10', '9',);
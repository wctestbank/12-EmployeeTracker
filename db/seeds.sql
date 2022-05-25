INSERT INTO department(name) VALUES
    ('SALES'),
    ('ENGINEERING'),
    ('FINANCE'),
    ('LEGAL');

INSERT INTO role (title, salary, department_id) VALUES
    ('SALES LEAD', 100000, 1),
    ('SALESPERSON', 80000, 1),
    ('ENGINEER', 150000, 2),
    ('ACCOUNTANT', 125000, 3),
    ('LAWYER', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('JOHN', 'DOE', 1, null),
    ('MIKE', 'CHAN', 2, null),
    ('ASHELY', 'RODRIGUEZ', 3, null),
    ('TOM', 'ALLEN', 4, null),
    ('SARAH', 'LOURD', 5, null),
    ('MALIA', 'BROWN', 5, 1);

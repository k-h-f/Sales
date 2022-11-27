drop table if exists products
create table products (
    id integer,
    model_name varchar(100),
    brand varchar(100),
    price integer
    country varchar(100)
);

insert into
    phones (id, model_name, brand, price, country)
values
    (1, 'iPhone 12', 'Apple', 999, 'GB'),
    (2, 'iPhone 13', 'Apple', 899, 'FR'),
    (3, 'Pixel', 'Google', 1300, 'GB'),
    (4, 'iPhone 13', 'Apple', 799, 'GB'),
    (5, 'Galaxy', 'Samsung', 800), 'GB'),
    (6, 'iPhone 14', 'Apple', 499 , 'GB'),
    (7, 'Galaxy', 'Samsung', 600, 'DE'),
    (8, 'iPhone 14', 'Apple', 599, 'GB'),
    (9, 'iPhone 14', 'Apple', 699, 'DE'),

create table laptops (
    id integer,
    model_name varchar(100),
    brand varchar(100),
    price integer
    country varchar(100)
);

insert into
    laptops (id, model_name, brand, price, country)
values
    (1, 'Macbook Pro 14 inch', 'Apple', 1899, 'GB'),
    (2, 'Microsoft Surface Pro 6', 'Microsoft', 1399, 'DE'),
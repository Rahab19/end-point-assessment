USE PRODUCT;
GO
CREATE OR ALTER PROCEDURE addProduct 
(@id VARCHAR (255),@name VARCHAR(100),@description VARCHAR(255),@price DECIMAL(18, 2))
AS
BEGIN
    INSERT INTO Product1 (id,name, description, price)
    VALUES (@id,@name, @description, @price);

END

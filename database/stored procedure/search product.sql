USE PRODUCT;
GO

CREATE OR ALTER PROCEDURE searchProduct (@id VARCHAR (100))
AS
BEGIN
SELECT * FROM Product1 WHERE id =@id
END
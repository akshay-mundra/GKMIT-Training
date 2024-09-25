
-- Select firstname and last name in a single column using concatination

SELECT
  CONCAT("FirstName", ' ', "LastName") 
  AS "FullName"
FROM 
	"Customer"
ORDER BY 
  "FirstName" asc;
    

-- select first name and last name using concatination (another method)

SELECT
	"FirstName" ||
  ' ' ||
  "LastName"
  AS "FullName"
FROM
	"Customer" 
ORDER BY
	"FirstName" ASC;



-- Queries on Track table.

-- find max in milliseconds.

SELECT
  MAX("Milliseconds")
FROM 
	"Track";


-- find min in bytes

SELECT 
  MIN("Bytes")
FROM
  "Track";


-- calculate sum of UnitPrice 

SELECT 
  SUM("UnitPrice") AS "Total Unit Price"
FROM
  "Track";


-- Calculate speed using the bytes and millisecond in kb/s and show in table

SELECT 
  *,
  CONCAT("Bytes"/1024, '/' , "Milliseconds"/1000, ' KB/s') 
  AS "Speed"
FROM
  "Track"


-- Queries on Employee table

-- Calculate the count of people by their ‘city’ and sort them alphabetically from the “Employee” table.

SELECT
  "City",
  COUNT("EmployeeId") 
  AS  "Employee Count"
FROM
  "Employee"
GROUP BY 
  "City"
ORDER BY 
  "City";


-- Queries on Invoice table.

-- Count the number of invoices in the range of
-- Jan to March of 2009 using the invoice date and 
-- also calculate the sum of the total of invoices in that range.

SELECT 
  COUNT("InvoiceId") AS "Total Invoices",
  SUM("Total") AS "Total Value"
FROM
  "Invoice"
WHERE
  "InvoiceDate" 
  BETWEEN '2009-01-01' AND '2009-03-31';


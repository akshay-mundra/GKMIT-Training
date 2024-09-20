Creating End points for the users.


1.get all users
GET
localhost:5000/users

2. Get specific user
GET
localhost:5000/users/:id

3. Create a new user
POST
localhost:5000/users/
data: {
	data...
}

4. Delete a user
DELETE
localhost:5000/users/:id

5. Update a user 
PUT
localhost:5000/users/:id 
data: {
	name: ...,
	other details...
}

6. PATCH
loclalhost:5000/users/:id
data: {
	key: value
}


nested query
localhost.../users/:id/address



query params -> Used for additional info
dynamic variable -> Used to target specific info for a resource.




####  Standard Response Format 


1. GET

- GEt api should suooort pagination  
	- pagiation have a limit and have a page number.
	- sorting :  sort:asc, desc,,,, key -> sort on name, or any other var.	
- Should supoort sorting
- Filtering or Searching.


data type ---
{
	total: total number fof items,
	data: [...]
}
status Code - 200, 404 




2. POST
create a resource
-status code -> 201 
data: {}



3. PUT - have to send all data----as it replaces all data
data : {}

4. patch - have to send the data that need to be udpated
data: {key: value}


5. DELETE - delete a item from resource











TASK:
1. Options and add and head http protocol
2. Status codes
3. CRUD app in txt
	-Users and post are the  two resources,
	-write crud for both resources.
	-properly following 
	-each end point should show - 
	-method, path, request body if present.
	-and status code .
	-query params to filter for post using dates startdate and enddate.











other keywords

1. MVC - resource - ROR website
2. Fat helper
3. green controller
4. why not to write business login in controller.
5. SPS pattern.
6. FAt controller lean model
7. lean controller fat model
8. 

























Task - Create endpoints for Users and Posts


mistakes------
- Use json format in body and response, 
- No multiple status codes
- must usage of http in url
- 



# users

url - http://localhost:5000/users
method - GET
body: {}
response: {
	data: [
		{
			"username": "username",
			"email": "abc@gmail.com"
		}
	]
}
status : 200


url - http://localhost:5000/users
method - POST
body: {
	"username": "username",
	"email": "abc@gmail.com"
}
response: {"message": "message"}
status : 201


url - http://localhost:5000/users/:id
method - GET
body: {}
response: {
	data: {
		"username": "username",
		"email": "abc@gmail.com"
	}
}
status: 200


url - http://localhost:5000/users/:id
method - PUT
body: {
	"username": "username",
	"email": "abc@gmail.com"
}
response: {"message": "message"}
status: 200


url - http://localhost:5000/users/:id
method - PATCH
body: {
	"username": "username"
}
response: {"message": "message"}
status: 200


url - http://localhost:5000/users/:id
method - DELETE
body: {}
response: {"message": "message"}
status: 200





# Posts

url - http://localhost:5000/posts?startDate=19-09-2024&endDate=25-09-2024&page=2&limit=10
method - GET
body: {}
response: {
	data: [
		{
			"user": "user id",
			"postDate": "19-09-2024",
			"lastMOdified": "19-09-2024",
			"title": "title",
		    "description": "description",
			"image": "image"
		}
	]
}
status: 200


url - http://localhost:5000/posts
method - POST
body: {
	"user": "userID",
	"postDate": "date",
	"lastModified": "date",
	"title": "title",
	"description": "description",
	"image": "image"
}
response: {message: "message"}
status: 201


url - http://localhost:5000/posts/:id
method - GET
body: {}
response: {
	data: {
		"user": "userID",
		"postDate": "date",
		"lastModified": "date",
		"title": "title",
		"description": "description",
		"image": "image"
	}
}
status: 200


url - http://localhost:5000/posts/:id
method - PUT
body: {
	"user": "userID",
	"postDate": "date",
	"lastModified": "date",
	"title": "title",
	"description": "description",
	"image": "image"
}
response: {message: "message"}
status: 200


url - http://localhost:5000/posts/:id
method - PATCH
body: {
	"title": "title"
}
response: {message: "message"}
status: 200


url - http://localhost:5000/posts/:id
method - DELETE
body: {}
response: {message: "message"}
status: 200


url - http://localhost:5000/users/:id/posts?startDate=19-09-2024&endDate=25-09-2024&page=2&limit=10
method - GET
body: {}
response: {
	data: [
		{
			"user": "userID",
			"postDate": "date",
			"lastModified": "date",
			"title": "title",
			"description": "description",
			"image": "image"
		}
	]
}
status: 200





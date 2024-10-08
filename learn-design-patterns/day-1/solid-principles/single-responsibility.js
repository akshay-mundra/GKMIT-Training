// 1. Single Responsibility Principle

// Bad code
class UserManager {

  constructor(authService, db) {
    this.authService = authService;
    this.db = db;
  }

  authenticate(username, password) {
    // logic here
  }

  save(user){
    // save user to db
  }

}

// good code 
class AuthenticationService {
  authenticate(username, password) {
    // Authentication logic
  }
}

class UserRepo {
  save(data) {
    // save user to db 
  }
}
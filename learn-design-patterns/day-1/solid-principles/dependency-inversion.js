
// 5. Dependency Inversion Principle


// bad code
class EmailController {
  sendEmail(emailDetails) {
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}

// good code
class EmailController {
  sendEmail(emailDetails) {
    const response = EmailApiController.sendEmail(emailDetails);
    if (response.status == 200) {
       return true;
    } else {
       return false;
    }
  }
}

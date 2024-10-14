// 1. Question
//Code

class NotificationService {
    sendEmail(email, message) {
        // Sending email logic
        console.log(`Sending email to ${email}: ${message}`);
    }
    sendSMS(phoneNumber, message) {
        // Sending SMS logic
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    }
    logNotification(message) {
        // Logging logic
        console.log(`Logging notification: ${message}`);
    }
    notify(method, recipient, message) {
        if (method === "email") {
            this.sendEmail(recipient, message);
            this.logNotification(`Email sent to ${recipient}`);
        } else if (method === "sms") {
            this.sendSMS(recipient, message);
            this.logNotification(`SMS sent to ${recipient}`);
        } else {
            throw new Error("Unsupported notification method");
        }
    }
}

const service = new NotificationService();

service.notify("email", "user@example.com", "Hello via Email!");

// -- Answer :  It violates the Single Responsibility Principle.



// Good code
class EmailManager {
    send(email, message) {
        console.log(`Sending email to ${email}: ${message}`);
    }
}
class SmsManager {
    send(phoneNumber, message) {
        console.log(`Sending SMS to ${phoneNumber}: ${message}`);
    }
}
class Logger {
    log(message) {
        console.log(`Logging notification: ${message}`);
    }
}
class NotificationService {
    constructor(emailService, smsService, logger) {
        this.emailService = emailService;
        this.smsService = smsService;
        this.logger = logger;
    }
    notify(method, recipient, message) {
        if (method === "email") {
            this.emailService.send(recipient, message);
            this.logger.log(`Email sent to ${recipient}`);
        } else if (method === "sms") {
            this.smsService.send(recipient, message);
            this.logger.log(`SMS sent to ${recipient}`);
        } else {
            throw new Error("Unsupported notification method");
        }
    }
}
const emailService = new EmailManager();
const smsService = new SmsManager();
const logger = new Logger();
const service = new NotificationService(emailService, smsService, logger);
service.notify("email", "user@example.com", "Hello via Email!");




// 4. Question
//Code



class UserManager {
    createUser(username) {
        console.log(User ${username} created.);
    }
    deleteUser(userId) {
        console.log(User ${userId} deleted.);
    }
    resetPassword(userId) {
        console.log(Password for user ${userId} reset.);
    }
    sendEmail(userId, message) {
        console.log(Sending email to user ${userId}: ${message});
    }

}


const userManager = new UserManager();
userManager.createUser("john_doe");
userManager.sendEmail(1, "Welcome!");


// --ANSWER : It violates the Single Responsibility Principle.
//Good code



class UserCreator {
    createUser(username) {
        console.log(`User ${username} created.`);
    }
}
class UserDeleter {
    deleteUser(userId) {
        console.log(`User ${userId} deleted.`);
    }
}
class PasswordManager {
    resetPassword(userId) {
        console.log(`Password for user ${userId} reset.`);
    }
}
class EmailService {
    sendEmail(userId, message) {
        console.log(`Sending email to user ${userId}: ${message}`);
    }
}

const userCreator = new UserCreator();
const userDeleter = new UserDeleter();
const passwordManager = new PasswordManager();
const emailService = new EmailService();
userCreator.createUser("john_doe");
emailService.sendEmail(1, "Welcome!");





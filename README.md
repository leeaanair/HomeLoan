# HomeOpen

## Introduction 
An Angular - Spring Boot Application which allows user to apply for loan and allows admin to retrieve the data given by the user and to approve/reject the application.

## Features
### For all:
1. Login (using session management)
2. EMI Calculator
3. Eligibility calculator

### For customers:
1. Registration
2. Forgot Password
3. Apply for loan
4. Upload data and documents
5. Check status of the application
### For admin:
1. Retrieve data of the users 
2. approve/reject the application

## Workflow
1. Customer needs to register into the website and enter data which is validated.
2. They can then login using their credentials.
3. On successful login, customer can see a dashboard where they get the option for applying for loan, or tracking loan status.

### Loan application:
1. Customer has to fill personal details, property details, employment details and loan details and required documents.
2. On successful submission, they get an application number which they need to keep it safe for tracking their application status.

### Admin dashboard:
1. On logging in, the admin sees the list of all pending applications.
2. On clicking the application number, admin can see the entered details by the customer.
3. If the applicant is not eligible (on calculating the grantable loan ), the admin has no choice but to reject the application.
4. If the applicant is eligible, the admin can check the data and documents and change the status from pending to approve/reject.
5. On approval of application, the admin has to generate an account number for the customer and the loan is granted to them.

### Loan tracker:
1. Customer has to enter their email ID and application number.
2. The status of the application can be pending, approved or rejected.
3. If the status is approved, the customer can see the status, account number and calculated EMI.
4. Else, the user only gets to see pending or rejected.

### Forgot password:
1. On login page, if the user has forgotten the password or wants to reset it, they have to click on forgot password option.
2. They have to enter the registered email ID.
3. If the email ID is registered, they will receive a mail which would have the link to reset the password.
4. On clicking the link, they will be redirected to the page, where they will reset the password.

### Calculator:
#### EMI Calculator:
1. User has to enter their loan amount and tenure and interest or can change it using the sliders
2. EMI is then calculated using the formula :
PxRx(1+R)^N/((1+R)^(N)-1)

### Eligibility calculator 
1. User has to enter their monthly salary.
2. Grantable loan is calculated by :
60x0.6xmonthly salary
3. If your desired loan is less than the grantable loan, it can be accepted, else it will be rejected.

## Technology Stack
1. Angular
2. Bootstrap
3. HTML
4. CSS
5. Java 8
6. Spring Boot
7. Oracle 
8. Maven

## How to run
1. Download the code.
2. After unzipping the file, go to the folder
3. Run terminal in that path, run
    `npm install`
4. Run `ng serve`

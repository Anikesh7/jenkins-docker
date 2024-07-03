## Project Name: Nodejs-Ejs Web Application CI/CD Pipeline

### Project Description:

This project involves setting up a Continuous Integration and Continuous Deployment (CI/CD) pipeline using Jenkins, installed on an AWS EC2 instance, for a Node.js-EJS web application. The deployment of the application is managed using Docker, which ensures that the application runs consistently across different environments. Additionally, Amazon Route 53 is used for DNS management to provide a user-friendly domain name for accessing the application.

### Accessing the Application: 
The deployed application can be accessed via the custom domain name configured in Route 53 - http://deploy.quizbotiq.me.

### Key Components:

- **Node.js-EJS Web Application**: The core application built using Node.js and EJS templating engine.
- **Jenkins**: Installed on an AWS EC2 instance to manage the CI/CD pipeline.
- **Docker**: Used to containerize the application for consistent deployment.
- **Amazon Route53**: Used for DNS management to map a custom domain name to the application hosted on the EC2 instance.

### CI/CD Pipeline Steps:

- **Code Checkout**: Jenkins pulls the latest code from the GitHub repository.
- **Docker Build**: Jenkins builds a new Docker image for the application using the Dockerfile.
- **Docker Deployment**: Jenkins runs the Docker container on the EC2 instance, exposing the application on a specified port.

### Expected Outcome:
Every time a change is pushed to the GitHub repository, the Jenkins pipeline will automatically build a new Docker image and deploy the updated application on the EC2 instance. This setup ensures continuous integration and continuous deployment, streamlining the development process and reducing the risk of deployment issues. Users can access the application using a custom domain name managed by Route 53.

### Benefits:
- **Automation**: Reduces manual intervention in building and deploying the application. 
- **Consistency**: Docker ensures that the application runs consistently across different environments. 
- **Efficiency**: Quick and reliable deployment process, enhancing development and release cycles. 
- **User-Friendly Access**: Route 53 provides a custom domain name, making it easier for users to access the application. 



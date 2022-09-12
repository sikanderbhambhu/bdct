var mvn = require('node-maven-api').create('C:/Users/Sikander_Bhambhu/Downloads/Contract_Testing/EmployeeAPI/pom.xml');

mvn.clean();
mvn.install();
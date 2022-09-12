// var mvn = require('node-maven-api').create(  'C:/Users/Sikander_Bhambhu/Downloads/Contract_Testing/EmployeeAPI/pom.xml');

const path = require('path');
var mvn = require('node-maven-api').create(path.resolve(process.cwd(), 'EmployeeAPI/pom.xml'));

mvn.clean();
mvn.install();
mvn.test();
# CONTRACT TESTING


Description: This project aims at demonstrating the implementation of BI-DIRECTIONAL CONTRACT TESTING using PACTFLOW.


Steps To Follow:


    1. Clone the project on your local machine.


    2. Open the project it an IDE.
    
    
    3. Run: `npm i` to install all the dependencies.
    
    
    Consumer End:
    
    
        a. To run the 'CONSUMER' tests: `npm run consumerTest` (given in package.json).
        
        
        b. To publish 'CONSUMER' generated contract file to Pactflow: `npm run publish:consumer`.
    
    
    Provider End:
        
        
        a. To run the 'PROVIDER' tests: `npm run providerTest` (given in package.json).
        
        
        b. To check execution results, refer to results folder in Provider.
        
        
        c. To check the OAS document, refer to oas folder in Provider.
        
        
        d. To publish 'PROVIDER' generated contract file to Pactflow: `npm run publish:provider`.
        
        
        e. `dredd.yml` file is the heart of execution, please feel free to make changes in this file if you want to modify the test execution at Provider end.
        
        
        f. Dreed also maintains a hooks file where you could add your pre / post actions.



### NOTE:
1. In this repository, both Consumer and Provider ends are accommodated in the same code base but in real-time both these parties would maintain their separate code bases / projects. 


2. To dynamically create the expected body for contract generation, we must use "Pact JS V3 Matchers".


2. You need to install Pact-Ruby-Standalone if you want to publish provider result + OAS using publish command or you could make use of a PUT request on pactflow to publish the provider results and OAS document using axios. But limitation with this one is that we cannot update the tag and branch details.
So, better proceed with first option that is Pact-Ruby-Standalone (https://github.com/pact-foundation/pact-ruby-standalone/releases)


3. Pactflow is a paid tool but we can get started with the free / trial version that lets you publish 5 contracts (https://pactflow.io/try-for-free/?utm_source=homepage&utm_content=header).


4. Please ensure to change the paths in the scripts in package.json file accordingly.


5. To gain more understanding about Dredd, refer to https://dredd.org/en/latest/installation.html


6. When you run the command npm i and have the node_modules folder in your project structure, then please make sure to replace the files in node_modules -> dredd with the files provided in 'dredd_library_modified_for_reporting' folder. Files available in this folder have been modified for reporting purpose and should be updated.


7. Pact Server Error: A couple of times it has been observed that the Pact Server does not start at all and the your are unable to generate the Consumer contracts. It gives a weird error code and fails the execution, errors like below (generally observed in Pact JS).

    Pact Exited With Error Code 1 OR Error: the process 3748 not found (the process ID could vary). In order to resolve this error, please refer to this link

    https://stackoverflow.com/questions/45103155/pact-exited-with-code-1



### NOTE (IMPORTANT):


Some changes have been introduced in the DREDD library to accomodate CHAI ASSERTIONS so that data types of fields are validated because Dredd uses Gavel Assertions to check whether all fields are available in the API Response as per the OAS document but it does not validate the data type.

So, below dependency was added initially in the package.json but now it has been removed as it has been explicitly provided in the node_modules folder in the repository. This is done to avoid the overriding the changes made to dredd reporting on triggering the 'npm i' command.
    
    "dredd": "14.1.0",

Hence, CHAI Assertions are introduced to do that and the node_modules folder is included only with DREDD library, so when you take a clone of this repository, you still need to run npm i command to get other libraries / packages.

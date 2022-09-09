# CONTRACT TESTING


Description: This project aims at demonstrating the implementation of BI-DIRECTIONAL CONTRACT TESTING using PACTFLOW.


Steps To Follow:


    1. Clone the project on your local machine.


    2. Open the project it an IDE.
    
    
    3. Run: `npm install --omit=dev`
        Plese strictly use this command to install all the dependencies but not the dev dependencies.
    
        DREDD library has been used for test execution & reporting & it has been manually changed for some extra assertions (CHAI Assertions included explicitly).
        This is done because of the following reasons:
            i. DREDD only validates the presnce of all the fields in the API Response as per the OAS document.
            ii. CHAI Assertions validates the data types of all fields mentioned in OAS document against real-time response of the API.
    
        So, we don't want these manual changes to get overridden on executing npm i, hence --omit flag is being used.
        
    
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

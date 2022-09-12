# Dredd Tests
## Fail: GET (200) /v1/employee/getEmployee
### Message
```
CHAI Assertions (Validates fields in the response against the 'SCHEMA' section in OAS)::
CHAI Assertions Status -> PASS

GAVEL Assertions (Validates fields in the response against the 'EXAMPLE' section in OAS)::
body: At '/socialSecurityNumber' Missing required property: socialSecurityNumber

```

### Request
```
method: GET
uri: /v1/employee/getEmployee
headers: 
    Accept: application/json
    User-Agent: Dredd/14.1.0 (Windows_NT 10.0.19044; x64)

body: 


```

### Expected
```
headers: 
    Content-Type: application/json

body: 
{
  "empId": 0,
  "employeeName": "string",
  "phoneNumber": "string",
  "address": [
    {
      "addressLine1": "string",
      "city": "string",
      "state": "string",
      "pinCode": 0
    }
  ],
  "designation": "string",
  "reportingManager": "string",
  "shiftTimings": "string",
  "socialSecurityNumber": "string"
}
statusCode: 200

```

### Actual
```
statusCode: 200
headers: 
    content-type: application/json
    transfer-encoding: chunked
    date: Mon, 12 Sep 2022 11:55:34 GMT
    connection: close

bodyEncoding: utf-8
body: 
{
  "empId": 101007,
  "employeeName": "John Smart",
  "phoneNumber": "1624958216",
  "address": [
    {
      "addressLine1": "15 Foreshore Road",
      "city": "Philadelphia",
      "state": "PA",
      "pinCode": 19101
    }
  ],
  "designation": "QA Manager",
  "reportingManager": "Mike Nebula",
  "shiftTimings": "09:00 AM"
}

```

## Fail: GET (200) /v2/employee/getEmployee
### Message
```
CHAI Assertions (Validates fields in the response against the 'SCHEMA' section in OAS)::
expected res to satisfy API spec

expected res to satisfy the '200' response defined for endpoint 'GET /v2/employee/getEmployee' in your API spec

res did not satisfy it because: empId must be string

res contained: {
  body: {
    empId: 101007,
    employeeName: 'John Smart',
    phoneNumber: '1624958216',
    address: [
      {
        addressLine1: '15 Foreshore Road',
        city: 'Philadelphia',
        state: 'PA',
        pinCode: 19101
      }
    ],
    designation: 'QA Manager',
    reportingManager: 'Mike Nebula',
    shiftTimings: '09:00 AM',
    driverLicense: 'D1243879'
  }
}

The '200' response defined for endpoint 'GET /v2/employee/getEmployee' in API spec: {
  '200': {
    description: 'An employee object',
    content: {
      'application/json': {
        schema: { '$ref': '#/components/schemas/V2_EmployeeGetResponse200' },
        example: {
          empId: 0,
          employeeName: 'string',
          phoneNumber: 'string',
          address: [
            {
              addressLine1: 'string',
              city: 'string',
              state: 'string',
              pinCode: 0
            }
          ],
          designation: 'string',
          reportingManager: 'string',
          shiftTimings: 'string',
          driverLicense: 'string'
        }
      }
    }
  }
}

GAVEL Assertions (Validates fields in the response against the 'EXAMPLE' section in OAS)::
GAVEL Assertions Status -> PASS
```

### Request
```
method: GET
uri: /v2/employee/getEmployee
headers: 
    Accept: application/json
    User-Agent: Dredd/14.1.0 (Windows_NT 10.0.19044; x64)

body: 


```

### Expected
```
headers: 
    Content-Type: application/json

body: 
{
  "empId": 0,
  "employeeName": "string",
  "phoneNumber": "string",
  "address": [
    {
      "addressLine1": "string",
      "city": "string",
      "state": "string",
      "pinCode": 0
    }
  ],
  "designation": "string",
  "reportingManager": "string",
  "shiftTimings": "string",
  "driverLicense": "string"
}
statusCode: 200

```

### Actual
```
statusCode: 200
headers: 
    content-type: application/json
    transfer-encoding: chunked
    date: Mon, 12 Sep 2022 11:55:34 GMT
    connection: close

bodyEncoding: utf-8
body: 
{
  "empId": 101007,
  "employeeName": "John Smart",
  "phoneNumber": "1624958216",
  "address": [
    {
      "addressLine1": "15 Foreshore Road",
      "city": "Philadelphia",
      "state": "PA",
      "pinCode": 19101
    }
  ],
  "designation": "QA Manager",
  "reportingManager": "Mike Nebula",
  "shiftTimings": "09:00 AM",
  "driverLicense": "D1243879"
}

```


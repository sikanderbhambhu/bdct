# Dredd Tests
## Pass: GET (200) /v1/employee/getEmployee
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
  "shiftTimings": "string"
}
statusCode: 200

```

### Actual
```
statusCode: 200
headers: 
    content-type: application/json
    transfer-encoding: chunked
    date: Thu, 01 Sep 2022 07:29:53 GMT
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

## Pass: GET (200) /v2/employee/getEmployee
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
    date: Thu, 01 Sep 2022 07:29:53 GMT
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


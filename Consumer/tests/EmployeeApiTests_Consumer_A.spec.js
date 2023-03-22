const { Pact } = require('@pact-foundation/pact');
const { getEmployee } = require("../InteractWithMockServer/EmployeeApi_Consumer_A")
const path = require('path');
const { string, integer } = require('@pact-foundation/pact').Matchers;

const provider = new Pact({
    consumer: 'employee-api-consumer',
    provider: 'employee-api-provider',
    dir: path.resolve(process.cwd(), 'Consumer/contracts/post_request'),
    logLevel: 'INFO',
});

describe('Employee API', () => {
    describe('When a get request to employee api is made', () => {
        beforeAll(() =>
            provider.setup().then(() => {
                provider.addInteraction({
                    uponReceiving: "a get request",
                    withRequest: {
                        method: 'GET',
                        path: '/v1/employee/getEmployee',
                    },
                    willRespondWith: {
                        status: 200,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: {
                            "empId": integer(),
                            "employeeName": string(''),
                            "phoneNumber": string(''),
                            "address": [{
                                "addressLine1": string(''),
                                "city": string(''),
                                "state": string(''),
                                "pinCode": integer()
                            }
                            ],
                            "designation": string(''),
                            "reportingManager": string(''),
                            "shiftTimings": string(''),
                            "socialSecurityNumber": string('')
                        }
                    },
                });
            })
        );

        test('Employee API should return the expected response', async () => {
            await getEmployee(provider.mockService.baseUrl);
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});

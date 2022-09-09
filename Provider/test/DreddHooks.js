var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};

const configUtils = __importStar(require("C:/Users/Sikander_Bhambhu/Downloads/Contract_Testing/node_modules/dredd/build/configUtils.js"));
const hooks = require('hooks');
const chai = require('chai');
const expect = chai.expect;
const chaiResponseValidator = require('chai-openapi-response-validator').default;


// hooks.beforeAll(function (transaction) {
//     process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
// });

// hooks.beforeEach(function (transaction) {
//         transaction.request.headers['Ocp-Apim-Subscription-Key'] = '1fe6f718b6cd4b178e9f394055656daa'
//         transaction.request.headers['Cache-Control'] = 'no-cache'
// });

// hooks.before('/api/v1/product/products > GetProductsAsync > 400 > application/json', function (transaction) {
//     transaction.skip = true;
// });

// hooks.before('/api/v1/product/products > GetProductsAsync > 404 > application/json', function (transaction) {
//     transaction.skip = true;
// });


hooks.afterEach(function (transaction) {
    var projectPath = 'C:/Users/Sikander_Bhambhu/Downloads/Contract_Testing';
    var blueprintPathInDreddConfig = configUtils.fetchBlueprintDetails();

    var filePath;
    if(blueprintPathInDreddConfig.startsWith('.')) {
        filePath = projectPath + blueprintPathInDreddConfig.substring(1);
    }
    else if(blueprintPathInDreddConfig.startsWith('/')) {
        filePath = projectPath + blueprintPathInDreddConfig;
    }

    chai.use(chaiResponseValidator(filePath));

    var responseInAxiosFormat = {
        status: transaction.expected.statusCode,
        request: {
            method: transaction.request.method,
            path: transaction.request.uri,
            res: {
                statusCode: transaction.real.statusCode,
            },
        },
        data: JSON.parse(transaction.real.body)
    }

    try {
        expect(responseInAxiosFormat).to.satisfyApiSpec;
    }
    catch (err) {
        hooks.log(err.message);
    }
});
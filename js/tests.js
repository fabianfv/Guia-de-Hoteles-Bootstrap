const tests = [];

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#$%\/\(\)=¿?*+-])(?=(?:([\w\d])\1?(?!\1\1))).{8,16}$/;

const testReport = function (name, description, password, actualResult, expectedResult) {
  const message =
    `Test name: ${name}\n` +
    `Test description: ${description}\n` +
    `Password under test: ${password}\n` +
    `Result: Test ${actualResult === expectedResult ? "PASSED" : "FAILED"}\n`;
  return message;
};

const test1 = function () {
  const name = "This password is valid";
  const description = "This password has three characters per each valid group, so its length is 12";
  const password = "ABC/&%123abc";
  const actualResult = passwordRegex.test(password);
  const expectedResult = true;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test2 = function () {
  const name = "This password is invalid.";
  const description = "This password has less than 8 characters";
  const password = "A&1a";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test3 = function () {
  const name = "This password is invalid.";
  const description = "This password has more than 16 characters";
  const password = "ABCD&/%$1234abcdZ";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test4 = function () {
  const name = "This password is invalid.";
  const description = "The mandatory character set 'uppercase' is missing.";
  const password = "/&%123abc";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test5 = function () {
  const name = "This password is invalid.";
  const description = "The mandatory character set 'lowercase' is missing.";
  const password = "ABC/&%123";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test6 = function () {
  const name = "This password is invalid.";
  const description = "The mandatory character set 'number' is missing.";
  const password = "ABC/&%abc";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const test7 = function () {
  const name = "This password is invalid.";
  const description = "The mandatory character set 'symbol' is missing.";
  const password = "ABC123abc";
  const actualResult = passwordRegex.test(password);
  const expectedResult = false;
  return testReport(name, description, password, actualResult, expectedResult);
};

const testSuite = () => tests.push(test1, test2, test3, test4, test5, test6, test7);

const runTests = () => tests.forEach(test => console.log(test()));

testSuite();
runTests();

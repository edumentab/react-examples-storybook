const rule = require('./jsx-no-length-truthiness.rule')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  parser: require.resolve('babel-eslint'),
})

const expectedError = {
  message: "Don't check .length truthiness in JSX, might render 0",
}

ruleTester.run('jsx-no-length-truthiness', rule, {
  valid: [
    'arr.length > 0 && <Foo/>',
    'arr.length > 1 && <Foo />',
    'arr.length && "foobar"', // ok since we can't tell if this is a JSX expression at all
    'arr.longth && <Foo />',
    '(arr.length || flag) && <Foo />',
    '<Foo>Number of posts: {arr.length}</Foo>',
    '<Foo>Number of posts: {flag && arr.length}</Foo>',
    '<Foo>You have {arr.length || "no"} posts</Foo>',
  ],
  invalid: [
    {
      code: 'arr.length && <Foo />',
      errors: [expectedError],
      output: 'arr.length > 0 && <Foo />',
    },
    {
      code: 'arr.foo.length && <Foo />',
      errors: [expectedError],
      output: 'arr.foo.length > 0 && <Foo />',
    },
    {
      code: 'arr && arr.length && <Foo />',
      errors: [expectedError],
      output: 'arr && arr.length > 0 && <Foo />',
    },
    {
      code: 'arr && arr.length && somethingElse && <Foo />',
      errors: [expectedError],
      output: 'arr && arr.length > 0 && somethingElse && <Foo />',
    },
    {
      code: 'flag || arr.length && <Foo />',
      errors: [expectedError],
      output: 'flag || arr.length > 0 && <Foo />',
    },
    {
      code: '<Foo><Bar/>{arr.length && "you have posts!"}</Foo>',
      errors: [expectedError],
      output: '<Foo><Bar/>{arr.length > 0 && "you have posts!"}</Foo>',
    },
    {
      code: '<Foo><Bar/>{flag && arr.length && "you have posts!"}</Foo>',
      errors: [expectedError],
      output: '<Foo><Bar/>{flag && arr.length > 0 && "you have posts!"}</Foo>',
    },
  ],
})

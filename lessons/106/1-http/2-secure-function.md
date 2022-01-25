# Authenticate




Links
- [Securing Cloud Functions](https://cloud.google.com/functions/docs/securing)

The first step in the process is validating the credential to make sure that the requestor is who it says it is, that it presents the right name and secret combination. This step is called (Authentication).

Once the requestor's identity has been authenticated, its level of access, the permissions that the identity has been granted, can be evaluated. This step is called (Authorization).
Cloud Functions supports two different kinds of identities, which are also called principals:

There are two kinds of tokens used in Cloud Functions: access tokens and id tokens
you need `cloudfunctions.functions.invoke`

## Authenticating Developer Testing

- Create `secure-function` function with auth
- Update
```
Hello World!
Hello from Secure Function!
```
- Update entry point and exports
```
exports.helloWorld -> exports.helloSecureFunction
```

- Try to invoke it
```
curl https://us-central1-devopsbyexample-v1.cloudfunctions.net/secure-function
```

- Open user role from IAM section
- Go to `Roles` and search for `Owner`
- Click on `Owner` and search for `cloudfunctions.functions.invoke`
- Access it with token
```bash
curl  -H "Authorization: bearer $(gcloud auth print-identity-token)" \
  https://us-central1-devopsbyexample-v1.cloudfunctions.net/secure-function
```

- Delete the function


## Authenticating function to function calls

When building services that connect multiple functions, it's a good idea to ensure that each function can only send requests to a specific subset of your other functions. For instance, if you have a login function, it should be able to access the user profiles function, but it probably shouldn't be able to access the search function.
To configure the receiving function to accept requests from a specific calling function, you need to grant the Cloud Functions Invoker (roles/cloudfunctions.invoker) (Cloud Functions Invoker) role to the calling function's service account on the receiving function.


- Create 2 service accounts
  - `function-a` and `function-b`

- Create `function-a` and attach `function-a` service account
- Update `Hello World!` -> `Hello from Function A!`
- Create `function-b` with `function-b` service account

```
exports.helloWorld -> exports.invokeFuncA
```

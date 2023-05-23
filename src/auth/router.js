// TODO: Create a module to house all of routes for the authentication system.
// TODO: Create a POST route for /signup
    // Accepts either a JSON object or FORM Data with the keys “username” and “password”.
    // Creates a new user record in a Postgres database.
    // Returns a 201 with the created user record.
// TODO: Create a POST route for /signin.
    // Use your basic authentication middleware to perform the actual login task.
    // router.post('/signin', basicAuth, (req,res) => {});
    // When validated, send a JSON object as the response with the following properties:
    // user: The users’ database record

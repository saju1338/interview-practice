//How authentication works in javascript

Authentication is needed when content should be protected.

Its a two step process:

1. Get Access/Permission 
2. Send request to the protected resource. 

Get Access/Permission:

Client will send a request (with user credentials) to the server and server will send a response with yes or no.

While using Auth token approach, when client will send a request to the server then along with the credentials we need to pass the API-Key that is related to the server and then the server check the credentials in it's database and send the authentication token to the client.

Now, client sends token along with the request to the protected resources. 
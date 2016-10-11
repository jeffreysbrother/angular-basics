##Installing a Server

If using Node:

```bash
sudo npm install -g http-server
```

Move into the desired project directory and run:

```bash
http-server -c-1
```

This will spin up a nodejs htpd which does a dir listing of static files visible from `http://localhost:8080`.

##Angular

Controllers provide application logic that is typically confined to one piece of the app's user interface. All of the controller's functions and values are literally scoped to a limited piece of the application. So how do we pass data or methods to different parts of the application? This is what **services** are used for. Services can be used across your application through dependency injection, which is how Angular makes code available to multiple parts of the app. Multiple controllers can use the same service as long as they define the service as a dependency. They can provide REST API access methods to different pieces of the application or share data about the logged in user across the app. We will create a service that simulates interaction with a REST API.

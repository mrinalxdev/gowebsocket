# Simple Go Websocket Server to chat

The code is used to provide a map of websocket connections.

> Creates a new server object.

- The code starts by declaring a variable called s. It then declares the function handleWS which takes in a websocket connection and prints out information about it.
The code then starts to analyze the incoming websocket connection from client: fmt.Println("new incoming connection from client:", ws.RemoteAddr()) The code is printing out information about the new incoming websocket connection from client, but also has an additional line that says "new incoming connection from client".
This means that there are two connections coming into this server at once, one for each of these lines of code.
Then, after analyzing both connections, the program sets up a loop to read data off of them and print it on screen with fmt.Println().
The code is meant to handle incoming websocket connections.
It will initialize a new connection and set the conns[ws] variable as true.
The next step in the snippet is for the function to read from ws, which will then be handled by the loop that follows.
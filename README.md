# CS7319-Final-Project-Group-15-Maya-Alberhasky
# Pet Owner Chatbot

This is a chatbot built for a Pet Owner of a dog and cat. It's framework is built using [react-chatbot-kit](https://github.com/FredrikOseberg/react-chatbot-kit).

## Install Packages

Ensure that Node is installed, if not get it [here](https://nodejs.org/en)
1. install yarn with `npm install --global yarn`

## Running the Chatbot Application

1. Clone the repository
2. cd to chatbot/
3. Run yarn start
4. Open the browser to localhost:3000

## Evaluation of Architecture Styles

The two architecture styles considered for this software application was blackboard and interpreter. The most suitable and implemeneted style was the blackboard architecture.
From the presentations design and class diagrams for blackboard it is easy to see this is because the structure allows for integration of multiple knowledge sources together and modularize it for maintainability.
Blackboard style breaks down the processes for the application and makes the integration of the components easy to manage with the central blackboard component. 
Interpreter was a canidate for it easy customization of queries and support of end-user programability. From the design and class diagrams for, the interpreter style requires an additional component to do the interpreting of the command, making it more complex and slower to process requests.
However for the level of complexity that this Chatbot is at, blackboard fits the needs of this software application the best.

## Chabots Difference in Implementation from Architecture Design

This applications intended architecture was to have a database connected to store the chatbot reponses and requests but due to
compilation errors that could not solved in the time frame of this project. So that the project remains functioning as intended, implemeneted is a standalone node server on localhost:3000.
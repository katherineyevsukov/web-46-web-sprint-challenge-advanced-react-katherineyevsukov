# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components contain the state object and event handling functions. These stateful components are in charge of keeping track of data changes. Functional components are more simple and usually are in charge of doing one thing, like rendering text/data to the screen. They are really just javascript functions that take in props.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

A componentWillMount function is executed just before the component renders, while a componentDidMount function is executed after the component first renders. It is no longer recommended to use componentWillMount--componentDidMount is the safer choice recommended by the React team. In the same way, componentWillUpdate has been replaced by componentDidUpdate. The componentWillUpdate function is invoked just before rendering when new state or props are being received, while the componentDidUpdate function is invoked immediately are a change in state or props. 

3. Define stateful logic.

Stateful logic is any code that deals with or manipulates state. Click handling functions and change handling functions are both examples of stateful logic.
    
4. What are the three step of creating a successful test? What is done in each phase?
The three steps of creating a successful test are as follows:
Arrange - Setting ourself up for success--We structure the test and render the component, as well as the pieces of it we will need to use in our test.
Act- This is where we simulate a user action such as filling out a form and/or clicking a submit button, etc.
Assert- Now we verify that the user's actions resulted in our desired outcome. For example, after a form was submitted, was the appropriate success message displayed?
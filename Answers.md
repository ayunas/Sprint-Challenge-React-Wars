# Answers

1.  What is React JS and what problems does it try and solve?

ReactJS is a front end Javascript framework.  It is designed to address the issue of performance when dealing with high amounts of DOM manipulations with transaction heavy applications, such as facebook or twitter. Rather than making a change to the actual DOM, React generates a Virtual DOM that is changed first, and the differential modifications are what is rendered to the real DOM.  This is likewise the case for Events.  Synthetic events are generated as opposed to the Action Events.

1.  What does it mean to _think_ in react?
    Thinking in React is basically viewing a User Interface in terms of components.  Breaking up your UI into small components that accomplish a set of tasks allows you to use pieces of UI in different places rather than rewriting the UI code each time.  

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Class components can store the state, which is data.  This is done using classes because the constructor function has the ability to store object in specific properties.  Functional components are also known as presentational components because they are not able to store state.


1.  Describe state.
State is a Javascript object that is stored as a property of a React Component.  The state is immutable and dynamic, meaning that it is never manually altered.  It represents the data that an application is dealing with.  

1.  Describe props.
Props is a tool or vehicle by which state can be passed around to various React Components.  

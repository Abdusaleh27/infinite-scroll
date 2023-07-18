### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is an open source library developed by facebook. React is used for building
webpage with significantly less code due to the reusability of component and the 
component design aspect of the frame.

- What is Babel?
Babel is a transpiler that converts latest versions of JavaScript into the one that 
the browser understands.

- What is JSX?
JSX stands for JavaScriptXML. It was created primarly to allow the usage of HTML inside 
React components.

- How is a Component created in React?
A component in React is either a functional or class-based component. It is created simply by importing
the react library and writing react code inside a function.

- What are some difference between state and props?
A state is a owned by the component and can only changed by the component.
A prop is owned by the parent and passed down to the child. It can only be changed by the parent or by call back function passed by the parent.

- What does "downward data flow" refer to in React?
Passing of props from a parent component to a child component is a downward data flow.

- What is a controlled component?
A controlled component is managed by React state.  It is also controlled by it its parent instead of directly being controlled by the DOM.

- What is an uncontrolled component?
Uncontrolled component maintains its own internal states and directly controlled by the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
The key prop assigns a unique ID to each component in the component list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
The arry index is not reliable because the position of the component in the array might change which means its ID will keep changing. 

- Describe useEffect.  What use cases is it used for in React components?
useEffect is a react hook that maintains the same state of the data even when the component rerenders. 
The data of the state will only change if updated by the callback function provided by the useEffect hook.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef is a react hook that takes a value and returns a reference to that value. It presists through rerenders. and unlike the useEffect hook, updating the value of the referenced object does not cause a rerender of the component.

- When would you use a ref? When wouldn't you use one?
useRef hook can be used for localstorage, playback speed of a video. I would not use the useRef hook if I need the component to rerender when updating the value. 

- What is a custom hook in React? When would you want to write one?
A custom hook is a hook that can be created to do a specific task using the built in react hooks. The 
purpose of creating a custom hook is for reusabality. For example, maintaining a true or false state, dark and lightmode, authentication hooks, data fetching hooks, and animation hooks.
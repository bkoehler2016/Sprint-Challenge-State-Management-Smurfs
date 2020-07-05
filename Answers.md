1. What problem does the context API help solve?

Prop drilling so you don't have to keep going down and down with props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions hold the plan Javascript functions that dispatch the type (name) of which payloads of the information to send your application to the store,

Reducers hold the switch case statement that takes an actio's type and how the applications state changes.

The store is the global place that holds the state where every file in the app has access to the state.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

App state is global and Component is local. Component state is useful if you only need one instace where App state is needed when the whole application is going to be changing state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk is a middle ware that lets you call action creators that return a function instead of an action object. That function recieves the stores dispatch method which is then used to dispatch regular synchronus actions inside the body of the function once the asynchronous operations have completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

I like context api as that's where the industry is heading and it's easier to setup.

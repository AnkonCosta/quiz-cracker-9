import React from 'react';

const Blog = () => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            <div className='p-6 shadow shadow-xl my-6 border border-blue-50 border-l-8 border-l-blue-500'>
                <h1 className='text-2xl py-2 mb-2 font-semibold'>What is the purpose of react router?</h1>
                <p>React router is a tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform.</p>
            </div>

            <div className='p-6 shadow shadow-xl my-6 border border-blue-50 border-l-8 border-l-blue-500'>
                <h1 className='text-2xl py-2 mb-2 font-semibold'>How does context api works?
                </h1>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state. </p>
            </div>

            <div className='p-6 shadow shadow-xl my-6 border border-blue-50 border-l-8 border-l-blue-500'>
                <h1 className='text-2xl py-2 mb-2 font-semibold'>
                    What is useRef Hook?
                </h1>
                <p>Essentially, useRef is like a “box” that can hold a mutable value in its .current property.However, useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes. This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.</p>
            </div>

        </div>
    );
};

export default Blog;
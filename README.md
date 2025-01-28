# Uninitialized State Variable in React Native

This repository demonstrates a common error in React Native: attempting to access a state variable before it's been initialized.  The `bug.js` file shows the problematic code, and `bugSolution.js` provides a solution.

## Problem

In React Native, if you try to render a component that uses state before the state has been fully initialized, you will encounter an error or unexpected behavior.

## Solution

The key is to ensure your component only accesses state variables *after* the component has mounted and the state has been initialized. This can be done using the `useEffect` hook and checking if the state is initialized.
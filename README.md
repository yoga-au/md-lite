# Folder Structure

```
src
 ┣ components
 ┣ context
 ┣ screens
 ┣ types
 ┃ ┣ enums
 ┃ ┗ interfaces
 ┗ App.tsx
```

`components`: Holds a simple component, usually a component that handle view in the screen.
`context`: All `create context` goes here.
`screens`: Holds a component that handle entire screens, similiar to `pages` in next.js
`types`: Holds type defintion file/folder
`App.tsx`: App component that will be called in `index.ts`

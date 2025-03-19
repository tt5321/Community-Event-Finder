# References & AI Uses

## References
1. "Thinking in React": https://react.dev/learn/thinking-in-react
2. "Tutorial: Tic-Tac-Toe": https://react.dev/learn/tutorial-tic-tac-toe
3. "reactFirestore-project-analyzer " code: https://github.com/john-guerra/reactFirestore-project-analyzer

## AI Uses
1. Prompt: How to implement page navigation without openning a new tab in React app?
- Model: ChatGPT 4o
- AI Response: Provided instructions on how to use Link from "react-router-dom"
- Use: Used the provided method to nagivate among the three pages.

2. Prompt: How to have "year", "month", "day", "hr", "min" text boxes but combined all the values into a "2025/3/25 12:00" like string. The string needs to be used by parent component.
- Model: ChatGPT 4o & ChatGPT 4o-mini
- AI Response: Provided states and handler functions for this logic.
- Use: Refined the answer with a few more prompts. Learned about its logics and use its generated handler functions in the TimeTextBox.jsx with a few small modifications.

3. Prompt: How to delete a list of events (firestore collection datas) using foreach in React?
- Model: ChatGPT 4o
- AI Response: Said an aync function in React was not allowed in foreach. Provided the several methods, including Promise.all() to handle the deletion.
- Use: Used to Promise.all() method in handleDelete() function in DeleteEventPage.

4. Pompt: How to put two buttons in a row in React?
- Model: hatGPT 4o mini
- AI response: Provided the ButtonGroup & Button method
- Use: Used the ButtonGroup & Button component in the HeaderBar component.

5. Prompt: How to write the CSS to achieve the styles in my design snapshot? (provided with my design snapshot)
- Model: ChatGPT 4o mini & Claude 
- AI Response: 
- Use: Used AI responses for almost every CSS style and then I modified them based on the display.

6. Prompt: How to integrate Firebase Firestore with a React app for data storage?
- Model: ChatGPT 4o mini
- AI Response: Walked through the steps to set up Firestore with React, including initializing Firebase, reading from and writing to Firestore, and using Firestore data in React components.
- Use: I set up Firestore by following the class video record and course github code, then use AI's fetch, update, delete, create code examples and modified them based on my code.

7. Prompt: How to deploy a React project?
- Model: ChatGPT 4o mini
- AI Response: Provided different deployment methods for a React project, including the steps for platforms like Vercel, Netlify, GitHub Pages, etc. 
- Use: Use AI to learn how to deploy and follow its delopment method for GitHub Pages

8. Prompt: 
- Prompt: Does the following code has any problem? I want the result as list
```
   e.forEach((event) => {
        const eventTopics = event.topics.split(/[,\s]+/).filter(Boolean);
        eventTopics.forEach((t) => {
          if (!topics.includes(t)) {
            return ([...topics, t]);
          } else {
            return topics;
          }
        })
      });
```
- Model: ChatGPT 4o
- AI response: Explained the error (ForEach will not return array, should use reduce), and provide solutoin using Set and reduce.
- Use: I tried to write my own code but failed, refined AI's answer by appending details. Then I used it in  "topics" definition in FilterBar.jsx
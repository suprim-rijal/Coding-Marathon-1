# Self-Assessment: ContactListManager.jsx


## 1. Functionality
- **Does the component meet the requirements?**
  - [x] Does it handle all the specified features (e.g., adding, removing, or updating books)?
  - [x] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [x] There any no bugs or unexpected behaviors.

- **How well does the component integrate with other parts of the application?**
  - [x] Are props and state managed appropriately?


## 2. Code Quality
- **Readability**
  - [x] Is the code easy to understand for other developers?
  - [x] Are variable and function names descriptive and meaningful?

- **Reusability**
  - [x] Can the component or parts of it be reused in other parts of the application?

- **Comments and Documentation**
  - [x] Are there comments explaining complex logic?
  - [x] Is there documentation for how to use the component?

## 3. Performance
- **Efficiency**
  - [x] Are there any unnecessary re-renders or performance bottlenecks?
  - [x] Is the component optimized for large datasets (if applicable)?

- **State Management**
  - [x] Is state managed efficiently (e.g., minimal state, derived state)?
  - [x] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment
- **Strengths**
  - ContactListManager.jsx uses controlled input to render and manage all the 8 fields. It also handles Add and delete button logic
  - Individual Contact is extracted to contact.jsx.

- **Areas for Improvement**
  - Browser alert is used for the validation it can be replaced with form validation message within the page or field.

- **Action Plan**
  - Learn and practice the inline error feedback in future projects.

## 5. Additional Notes
- Add any other relevant observations or feedback about the component.

## Individual Score: 40/45
- **Correct use of useState and controlled forms (10/15)**:  Used a controlled form to manage all the 8 fields. However, handling the checkbox logic inside the 'handleChange' needed some research. Properly handled boolean input checkbox and other fields.
- **Clean, readable, and well-organized code: 15/15**
- **Self-assessment: 15/15**

## Group: 35/35
- Successfully did git branching merging and deployment.

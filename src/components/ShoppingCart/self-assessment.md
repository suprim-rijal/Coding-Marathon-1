# Self-Assessment: BookCollectionManager.jsx

## Individual Score

**Score: 42/45**

I implemented the required ShoppingCart functionality using React. The component uses `useState`, controlled form inputs, `.map()` for displaying items, and allows users to add and delete items.

I added an optional total calculation and required form fields to prevent empty submissions.

I gave myself 42/45 because the required functionality works correctly and the code is clear, but there are still areas where the design and validation could be improved.

## 1. Functionality

- **Does the component meet the requirements?**
  - [x] Does it handle all the specified features (e.g., adding, removing, or updating books)?
  - [x] Are edge cases handled (e.g., empty inputs, duplicate entries)?
  - [] Are there any bugs or unexpected behaviors?
    No bugs or any unexpected behaviors met during testing so i guess everything works.

- **How well does the component integrate with other parts of the application?**
  - [x] Are props and state managed appropriately?

## 2. Code Quality

- **Readability**
  - [x] Is the code easy to understand for other developers?
  - [x] Are variable and function names descriptive and meaningful?

- **Reusability**
  - [x] Can the component or parts of it be reused in other parts of the application?

- **Comments and Documentation**
  - [ ] Are there comments explaining complex logic? No, the code is at its base level and it is simple enough to be understood.
  - [ ] Is there documentation for how to use the component?

## 3. Performance

- **Efficiency**
  - [ ] Are there any unnecessary re-renders or performance bottlenecks? No performance problems.
  - [ ] Is the component optimized for large datasets (if applicable)? Yes, with improvents it could be.

- **State Management**
  - [x] Is state managed efficiently (e.g., minimal state, derived state)?
  - [x] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment

- **Strengths**
  - List the strengths of the component.
  * Correct use of `useState`.
  * Controlled form inputs.
  * Create, Read and Delete functionality works.
  * Props are used correctly.
  * Required fields are validated
  * `.map()` is used to display items.

- **Areas for Improvement**
  - List areas where the component could be improved.
  * Styling
  * Duplicates

- **Action Plan**
  - Outline specific steps to address the areas for improvement.
    Improving the styling and preventing duplicates.

## 5. Additional Notes

- Add any other relevant observations or feedback about the component.

I tested the ShoppingCart component in the browser and confirmed that items can be added, displayed, and deleted correctly. The form prevents required fields from being left empty, and the total calculation works as expected.

## Group Score

**Score: 30/35**

### Git Branching and Merging: 18/20

Each team member has been working on a separate Git branch for their own React component. This follows the required branching workflow and helps prevent conflicts on the main branch. The final pull requests and merging to the main branch had no problems and everything went on smoothly.

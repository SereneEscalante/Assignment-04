1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
- getElementById = It returns element from matching specific Id.
- getElementsByClassName = It returns HTMLCollection of all elements of a specific class
- querySelector / querySelectorAll = It finds element / elements using class or Id in a list.



2. How do you create and insert a new element into the DOM?
Answer:
- create a new element = document.createElement('tag').
- insert a new element = parentElement.appendChild(newNode).



3. What is Event Bubbling? And how does it work?
Answer:
- Event Bubbling = Event Bubbling is a DOM mechanism where if a child is clicked , the click travels up and triggers the same event on every parent element above it.
- Method of work = Clicking a child element automatically triggers the same click on parents by moving upward through the DOM tree. 



4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
- Event Delegation = Event Delegation is a DOM mechanism where child elements are handled by using an event handler on their parent element.
- Why useful = It is useful when there are many child elements and adding an individual event handler to each one is not possible.



5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
- preventDefault() = It stops the browser's automatic behaviour. Such as: preventing a link from opening or a form from refreshing the page.
- stopPropagation() = It stops the click from travelling up to parent elements, so their event handlers don't trigger.
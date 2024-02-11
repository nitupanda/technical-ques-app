
const Data = [
    {
      id: 0,
      subject: 'HTML',
      question: 'What does HTML stand for?',
      answer: ['HTML stands for HyperText Markup Language.']
      
    },
    {
      id: 1,
      subject: 'React.js',
      question: 'Reactjs v/s Vuejs v/s Angular',
      img:'https://s3.eu-central-1.amazonaws.com/pleo-digital/blog/2021-09-28_Angular-React-Vue_table_en.png',
      answer: ['Three new features in HTML5 are semantic elements, local storage, and canvas.']
    },
    {
      id: 2,
      subject: 'JavaScript',
      question: 'Solve the code',
      answer:[ 'Hello John Doe.'],
      img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tUnhFI18krVLXfmQKAWodMkNrC6Az0YAYw&usqp=CAU'
    },
    {
      id: 3,
      subject: 'HTML',
      question: ['How do you create a form in HTML?'],
      answer: ['Use the <form> element to create a form and include various form controls like input, select, textarea, etc.'],
      
    },
    {
      id: 4,
      subject: 'HTML',
      question: 'How can you improve accessibility in HTML?',
      answer: ['By using semantic elements, adding alt attributes to images, and ensuring proper heading structure.'],
    },
    {
      id: 5,
      subject: 'CSS',
      question: 'Explain the CSS Box Model.',
      answer: ['The CSS Box Model describes the design and layout of elements on a web page, comprising content, padding, border, and margin.']
    },
    {
      id: 6,
      subject: 'CSS',
      question: 'What is Flexbox and how does it work?',
      answer:[ 'Flexbox is a layout model in CSS that allows for flexible and efficient design of containers and their items in a one-dimensional layout.']
    },
    {
      id: 7,
      subject: 'CSS',
      question: 'What are the key concepts of CSS Grid Layout?',
      answer: ['CSS Grid Layout provides a two-dimensional layout system, defining rows and columns to arrange elements in a grid-like structure.']
    },
    {
      id: 8,
      subject: 'CSS',
      question: 'Explain CSS specificity.',
      answer: ['CSS specificity determines which style rules are applied to an element based on the specificity of selectors used in those rules.'],
    },
    {
      id: 9,
      subject: 'CSS',
      question: 'How do you create a responsive design in CSS?',
      answer: ['Use media queries, flexible layouts (e.g., Flexbox or Grid), and viewport meta tag to create responsive designs that adapt to different screen sizes.'],
    },
    {
      id: 10,
      subject: 'JavaScript',
      question: 'What are the different ways to declare variables in JavaScript?',
      answer: ['Variables can be declared using var, let, or const keywords.'],
    },
    {
      id: 11,
      subject: 'JavaScript',
      question: 'How do you define functions in JavaScript?',
      answer: ['Functions can be defined using the function keyword or arrow functions (=>).'],
    },
    {
      id: 12,
      subject: 'JavaScript',
      question: 'How do you manipulate the DOM in JavaScript?',
      answer:[ 'Use methods like getElementById, querySelector, createElement, appendChild, etc., to interact with the Document Object Model (DOM).']
    },
    {
      id: 13,
      subject: 'JavaScript',
      question: 'What are JavaScript events?',
      answer: ['JavaScript events are actions or occurrences that happen in the browser, such as clicks, mouse movements, keypresses, etc.']
    },
    {
      id: 14,
      subject: 'JavaScript',
      question: 'What is asynchronous JavaScript?',
      answer: ['Asynchronous JavaScript allows operations to be performed independently of the main execution thread, commonly used for tasks like fetching data from APIs or handling user interactions.'],
    },
    {
      id: 15,
      subject: 'React.js',
      question: 'How do you create components in React?',
      answer: ['Components can be created as functional components using arrow functions or as class components extending React.Component.'],
    },
    {
      id: 16,
      subject: 'React.js',
      question: 'What are props in React?',
      answer:[ 'Props (short for properties) are a way to pass data from parent to child components in React.'],
      type:'Featured questions'
    },
    {
      id: 17,
      subject: 'React.js',
      question: 'What is state in React?',
      answer: ['State is a JavaScript object used to store component-specific data that may change over time, triggering re-renders when updated.'],
      
    },
    {
      id: 18,
      subject: 'React.js',
      question: 'What are lifecycle methods in React?',
      answer: ['Lifecycle methods are special methods provided by React that allow you to hook into various stages of a component\'s lifecycle, such as mounting, updating, and unmounting.'],
      type:'Featured questions'
    },
    {
      id: 19,
      subject: 'React.js',
      question: 'What are React hooks?',
      answer: ['React hooks are functions that let you use state and other React features without writing a class component, introduced in React 16.8.'],
      
    },{
      id: 20,
      subject: 'Angular',
      question: 'What is Angular CLI?',
      answer: ['Angular CLI (Command Line Interface) is a powerful tool for initializing, developing, scaffolding, and maintaining Angular applications.']
    },
    {
      id: 21,
      subject: 'Angular',
      question: 'Explain Angular Modules.',
      answer: ['Angular Modules are containers for a cohesive block of code dedicated to an application domain, workflow, or closely related set of capabilities. They help organize the application into cohesive blocks of functionality.']
    },
    {
      id: 22,
      subject: 'Angular',
      question: 'What are Angular Components?',
      answer: ['Angular Components are the fundamental building blocks of Angular applications. They are responsible for handling data, rendering views, and responding to user input.']
    },
    {
      id: 23,
      subject: 'Angular',
      question: 'What is Dependency Injection in Angular?',
      answer: ['Dependency Injection (DI) is a design pattern in which a class requests dependencies from external sources rather than creating them itself. Angular uses DI to provide components with the services or other objects they need.']
    },
    {
      id: 24,
      subject: 'Angular',
      question: 'Explain Angular Directives.',
      answer: ['Angular Directives are markers on a DOM element that tell Angular to do something to that element or its children. They are a way to extend the functionality of HTML elements and attributes within Angular applications.']
    },{
      id: 25,
      subject: 'HTML',
      question: 'What are semantic elements in HTML?',
      answer: ['Semantic elements in HTML provide meaning to the content they enclose, making it easier for browsers and developers to understand the structure and purpose of the content. Examples include <header>, <footer>, <nav>, <article>, <section>, <aside>, and <main>.']
    },
    {
      id: 26,
      subject: 'HTML',
      question: 'Explain the purpose of the alt attribute in HTML.',
      answer: ['The alt attribute in HTML is used to provide alternative text for images in case the image cannot be displayed. It is important for accessibility and SEO, as it allows screen readers to describe the content of images to visually impaired users and helps search engines understand the context of images on a web page.']
    },{
      id: 27,
      subject: 'CSS',
      question: 'What is the difference between margin and padding in CSS?',
      answer: ['Margin is the space outside the border of an element, whereas padding is the space inside the border of an element. Margin creates space around an element, affecting its position relative to other elements, while padding creates space within an element, affecting its content area.']
    }
  ];

  export default Data;

 
  
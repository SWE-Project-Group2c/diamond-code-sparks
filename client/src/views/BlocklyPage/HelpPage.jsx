// HelpPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './HelpPage.css';

// Helper function to get language-specific content
const getLanguageContent = (language) => {
  const content = {
    JavaScript: {
      commonUses: 
      <div class="help-section">
        <h5>JavaScript is a versatile programming language primarily used for building interactive and dynamic web pages. It is a key component of web development, allowing developers to enhance user experience by creating responsive and engaging features. JavaScript finds application in various scenarios, including:</h5>
        <ul>
          <li>
              Web Development: Enhance the interactivity of websites by incorporating client-side scripting.
          </li>
        </ul> 
        <ul>
          <li>Single Page Applications (SPAs): Build efficient and responsive SPAs using frameworks like React, Angular, or Vue.js.</li>
        </ul>
        <ul>
          <li>Mobile App Development: Develop cross-platform mobile apps with frameworks like React Native.</li>
        </ul>
        <ul>
          <li>Server-Side Development: Use Node.js to leverage JavaScript for server-side scripting.</li>
        </ul>
        <ul>
          <li>Browser Extensions: Create extensions for browsers like Chrome and Firefox to customize the browsing experience.</li>
        </ul>
        <ul>
          <li>Game Development: Develop simple games using HTML5 canvas and JavaScript game development libraries.</li>
        </ul>
        <ul>
          <li>Data Visualization: Utilize libraries like D3.js to create interactive and visually appealing data visualizations.</li>
        </ul>
        <ul>
          <li>API Development: Build robust APIs using frameworks like Express.js.</li>
        </ul>
        <h5>Note: Not all of this cannot be done within CodeSparks, however as you learn and grow in your programming journey, you could one day do all of these things in your very own IDE! </h5>
      </div>
    ,
    sampleProjects: 
    <div class="help-section">
       <h5>To-Do List App</h5>
        <ul>
          <li>
          Create a dynamic to-do list application that allows users to add, edit, and delete tasks.
          </li>
        </ul> 
        <h5>Weather App</h5>
        <ul>
          <li>Build a simple weather app that allows users to input a city name and displays basic weather information, such as temperature and weather conditions.</li>
        </ul>
        <h5>Color Picker</h5>
        <ul>
          <li>Build a color picker tool that allows users to select a color from a predefined list. Change the background color of the page accordingly.</li>
        </ul>
        <h5>Interactive Quiz</h5>
        <ul>
          <li>Build an interactive quiz with multiple-choice questions. Display questions one at a time, and provide feedback on the user's answers.</li>
        </ul>
        <h5>Clock</h5>
        <ul>
          <li>Develop a digital clock that displays the current time. Update the time dynamically on the webpage.</li>
        </ul>
      </div>,
      faq: 
      <div class="help-section">
        <h5>Q: What is JavaScript used for?</h5>
        <ul>
          <li>A: JavaScript is primarily used for web development to create dynamic and interactive user interfaces. It can also be used for server-side development, mobile app development, and more.</li>
        </ul> 
        <h5>Q: How does JavaScript differ from Java?</h5>
        <ul>
          <li>A: Despite the similar names, JavaScript and Java are distinct, different languages. JavaScript is primarily used for client-side web development, while Java is a general-purpose programming language often used for server-side development.</li>
        </ul> 
        <h5>Q: What are some popular JavaScript frameworks?</h5>
        <ul>
          <li>A: Popular JavaScript frameworks include React, Angular, Vue.js for front-end development, and Node.js for server-side development.</li>
        </ul> 
    </div>,
    },
    Python: {
      commonUses: 
      <div class="help-section">
        <h5>Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms and has a vast standard library, making it suitable for various applications. Python is a versatile language used in various domains, including:</h5>
        <ul>
          <li>
          Web Development: Build dynamic web applications using frameworks like Flask or Django.
          </li>
        </ul> 
        <ul>
          <li>Data Science and Analytics: Analyze and visualize data using libraries like NumPy, Pandas, and Matplotlib.</li>
        </ul>
        <ul>
          <li>Machine Learning and AI: Develop machine learning models and implement artificial intelligence algorithms with tools like TensorFlow and PyTorch.</li>
        </ul>
        <ul>
          <li>Automation and Scripting: Automate repetitive tasks and write scripts for system administration using Python.</li>
        </ul>
        <ul>
          <li>Game Development: Create simple games using libraries such as Pygame.</li>
        </ul>
        <ul>
          <li>Network Programming: Build network applications and tools using Python's socket and networking libraries.</li>
        </ul>
        <ul>
          <li>Robotics and Hardware Programming: Control and program hardware devices using Python for IoT and robotics projects.</li>
        </ul>
        <h5>Note: Not all of this cannot be done within CodeSparks, however as you learn and grow in your programming journey, you could one day do all of these things in your very own IDE! </h5>
      </div>, 
    sampleProjects: 
    <div class="help-section">
       <h5>Calculator</h5>
        <ul>
          <li>
          Create a simple command-line calculator that can perform basic arithmetic operations (addition, subtraction, multiplication, division).
          </li>
        </ul> 
        <h5>Guess the Number Game</h5>
        <ul>
          <li>Develop a game where the computer randomly selects a number, and the player has to guess it. Provide hints if the guessed number is too high or too low.</li>
        </ul>
        <h5>Dice Rolling Simulator</h5>
        <ul>
          <li>Create a program that simulates rolling a dice. Prompt the user to roll the dice and display the result.</li>
        </ul>
        <h5>Currency Converter</h5>
        <ul>
          <li>Write a program that converts currency based on the user's input and current exchange rates.</li>
        </ul>
      </div>,
      faq: 
      <div class="help-section">
        <h5>Q: What is Python used for?</h5>
        <ul>
          <li>A: Python is used for web development, data science, machine learning, automation, scripting, game development, and more due to its versatility and readability.</li>
        </ul> 
        <h5>Q: How does Python differ from other programming languages?</h5>
        <ul>
          <li>A: Despite the similar names, JavaScript and Java are distinct, different languages. JavaScript is primarily used for client-side web development, while Java is a general-purpose programming language often used for server-side development.</li>
        </ul> 
        <h5>Q: What are some popular Python frameworks?</h5>
        <ul>
          <li>A: Popular Python frameworks include Flask and Django for web development, NumPy and Pandas for data science, TensorFlow and PyTorch for machine learning, and more.</li>
        </ul> 
    </div>
    },
    PHP: {
      commonUses: 
      <div class="help-section">
        <h5>PHP is a server-side scripting language designed for web development, but it is also used as a general-purpose programming language. PHP is commonly used for:</h5>
        <ul>
          <li>
          Web Development: Build dynamic and interactive websites by embedding PHP code within HTML.
          </li>
        </ul> 
        <ul>
          <li>Server-Side Scripting: Execute server-side scripts to generate dynamic web content and handle form submissions.</li>
        </ul>
        <ul>
          <li>Content Management Systems (CMS): Develop and customize CMS platforms like WordPress, Joomla, and Drupal.</li>
        </ul>
        <ul>
          <li>E-commerce Solutions: Create online shopping platforms and integrate payment gateways using PHP.</li>
        </ul>
        <ul>
          <li>RESTful API Development: Develop server-side APIs for communication between web applications and services.</li>
        </ul>
        <ul>
          <li>Command Line Scripting: Write scripts for automation and server-side tasks using PHP on the command line.</li>
        </ul>
        <h5>Note: Not all of this cannot be done within CodeSparks, however as you learn and grow in your programming journey, you could one day do all of these things in your very own IDE! </h5>
      </div>, 
    sampleProjects: 
    <div class="help-section">
       <h5>Basic Blog System</h5>
        <ul>
          <li>
          Create a simple blog system with features like post creation, editing, and commenting.
          </li>
        </ul> 
        <h5>User Registration and Authentication System</h5>
        <ul>
          <li>Build a user registration system with login/logout functionality and password hashing for security.</li>
        </ul>
        <h5>To-Do List Application</h5>
        <ul>
          <li>Develop a to-do list application with CRUD (Create, Read, Update, Delete) operations</li>
        </ul>
        <h5>Contact Form with Email Integration</h5>
        <ul>
          <li>Implement a contact form that sends emails to site administrators when users submit inquiries.</li>
        </ul>
      </div>,
      faq: 
      <div class="help-section">
        <h5>Q: What is PHP used for?</h5>
        <ul>
          <li>A: PHP is a server-side scripting language used for web development, including creating dynamic web pages, handling forms, and interacting with databases.</li>
        </ul> 
        <h5>Q: Is PHP suitable for large-scale applications?</h5>
        <ul>
          <li>A: Yes, PHP is suitable for large-scale applications. Many popular websites and content management systems, including Facebook and WordPress, are powered by PHP.</li>
        </ul> 
        <h5>Q: What are some popular PHP frameworks?</h5>
        <ul>
          <li>A: Popular PHP frameworks include Laravel, Symfony, and CodeIgniter, providing tools and structures to streamline the development of web applications.</li>
        </ul> 
    </div>
    },
    Lua: {
      commonUses: 
      <div class="help-section">
        <h5>Lua is a lightweight, high-level scripting language designed for embedded systems and general-purpose programming. Lua is commonly used for:</h5>
        <ul>
          <li>
          Embedded Systems: Lua is often embedded in applications and game engines to provide a flexible scripting language for customization.
          </li>
        </ul> 
        <ul>
          <li>Game Development: Lua is popular in the gaming industry for scripting game logic and behavior due to its simplicity and efficiency.</li>
        </ul>
        <ul>
          <li>Scripting in Software: Lua is used as a scripting language in various software applications to allow users to extend functionality.</li>
        </ul>
        <ul>
          <li>Configuration Files: Lua is employed for writing configuration files due to its easy syntax and readability.</li>
        </ul>
        <ul>
          <li>Network Programming: Lua is used for network programming, creating lightweight servers and clients.</li>
        </ul>
        <ul>
          <li>Automation and Scripting: Lua scripts can be used for automating tasks and scripting in various environments.</li>
        </ul>
        <h5>Note: Not all of this cannot be done within CodeSparks, however as you learn and grow in your programming journey, you could one day do all of these things in your very own IDE! </h5>
      </div>, 
    sampleProjects: 
    <div class="help-section">
       <h5>Text Adventure Game</h5>
        <ul>
          <li>
          Create a simple text-based adventure game using Lua, incorporating user input and decision-making.
          </li>
        </ul> 
        <h5>Guess the Word Game</h5>
        <ul>
          <li>Build a Lua-based word guessing game where the computer selects a word, and the player has to guess it.</li>
        </ul>
        <h5>Temperature Converter</h5>
        <ul>
          <li>Develop a Lua script that converts temperatures between Celsius and Fahrenheit based on user input.</li>
        </ul>
        <h5>Simple Timer</h5>
        <ul>
          <li>Build a simple timer program in Lua that takes user input for the duration and counts down.</li>
        </ul>
      </div>,
      faq: 
      <div class="help-section">
        <h5>Q: Can Lua be integrated with other programming languages?</h5>
        <ul>
          <li>A: Yes, Lua can be embedded in applications written in other languages, such as C and C++. This makes Lua a versatile choice for scripting in environments with existing codebases.</li>
        </ul> 
        <h5>Q: Is Lua suitable for large-scale software development?</h5>
        <ul>
          <li>A: Lua is often used for embedded systems and scripting rather than large-scale standalone applications. It excels in scenarios where a lightweight and efficient scripting language is required.</li>
        </ul> 
    </div>
    },
    Dart: {
      commonUses: 
      <div class="help-section">
        <h5>Dart is a client-optimized programming language for building web, mobile, and desktop applications. Dart is commonly used for:</h5>
        <ul>
          <li>
          Mobile App Development with Flutter: Build native mobile applications for iOS and Android using Flutter, a UI toolkit powered by Dart.
          </li>
        </ul> 
        <ul>
          <li>Web Development: Create interactive and dynamic web applications using Dart for both frontend and backend development.</li>
        </ul>
        <ul>
          <li>Desktop App Development: Develop cross-platform desktop applications using Flutter for Windows, macOS, and Linux.</li>
        </ul>
        <ul>
          <li>Server-Side Development: Use Dart for server-side scripting and building web servers.</li>
        </ul>
        <ul>
          <li>Game Development: Build simple games using the Flame game engine or other Dart-based game development libraries.</li>
        </ul>
        <ul>
          <li>Command Line Tools: Create command-line tools and scripts using Dart for automation and scripting tasks.</li>
        </ul>
        <h5>Note: Not all of this cannot be done within CodeSparks, however as you learn and grow in your programming journey, you could one day do all of these things in your very own IDE! </h5>
      </div>, 
    sampleProjects: 
    <div class="help-section">
       <h5>Task Tracker App with Flutter</h5>
        <ul>
          <li>
          Build a task tracker application using Flutter, allowing users to add, edit, and delete tasks.
          </li>
        </ul> 
        <h5>Interactive Story App</h5>
        <ul>
          <li>Create an interactive story app using Flutter where users can make choices that affect the storyline.</li>
        </ul>
        <h5>Expense Tracker</h5>
        <ul>
          <li>Build a simple expense tracker app using Flutter, allowing users to log and categorize their expenses.</li>
        </ul>
        <h5>Simple Timer</h5>
        <ul>
          <li>Build a simple timer program in Lua that takes user input for the duration and counts down.</li>
        </ul>
      </div>,
      faq: 
      <div class="help-section">
         <h5>Q: What is Flutter, and how does it relate to Dart?</h5>
        <ul>
          <li>A: Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase. Dart is the programming language used to write code for Flutter.</li>
        </ul>
        <h5>Q: Is Dart only for mobile app development?</h5>
        <ul>
          <li>A: No, Dart is a versatile language. While it gained popularity with Flutter for mobile app development, it is also used for web, desktop, and server-side development.</li>
        </ul> 
        <h5>Q: Can Dart be used for backend development?</h5>
        <ul>
          <li>A: Yes, Dart can be used for backend development with frameworks like Aqueduct and shelf, allowing developers to build server-side applications.</li>
        </ul> 
    </div>
    },
  };

  return content[language] || {}; // Return content for the selected language, or an empty object if not found
};


const HelpPage = () => {
  const [category, setCategory] = useState('blockly');
  const [language, setLanguage] = useState('JavaScript'); // Defaults to capitalized JavaScript since it's the first to show up
  const [languageContent, setLanguageContent] = useState({});

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleLanguageChange = (newLanguage) => {
    // Sets language name
    setLanguage(newLanguage);
  };

  // Get language-specific content
  const initialLanguage = 'JavaScript';

  useEffect(() => {
    // Set initial language content only when the component mounts
    handleLanguageChange(initialLanguage);
  }, []);

  useEffect(() => {
    // Update language content when language or category changes
    const content = getLanguageContent(language);
    setLanguageContent(content);
  }, [language, category]);
  

  return (
    <div className="help-page">
      <NavBar />

      <div className="help-header">
        <Link to="/workspace" className="back-button">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h2>Help</h2>
      </div>

      <div className="help-options">
        <div className={`help-option ${category === 'blockly' ? 'active' : ''}`} onClick={() => handleCategoryChange('blockly')}>
          Blockly
        </div>
        <div className={`help-option ${category === 'scratch' ? 'active' : ''}`} onClick={() => handleCategoryChange('scratch')}>
          Scratch
        </div>
      </div>

      {category === 'blockly' && (
        <div className="help-languages">
          <div className={`help-language ${language === 'javascript' ? 'active' : ''}`} onClick={() => handleLanguageChange('JavaScript')}>
            JavaScript
          </div>
          <div className={`help-language ${language === 'python' ? 'active' : ''}`} onClick={() => handleLanguageChange('Python')}>
            Python
          </div>
          <div className={`help-language ${language === 'php' ? 'active' : ''}`} onClick={() => handleLanguageChange('PHP')}>
            PHP
          </div>
          <div className={`help-language ${language === 'lua' ? 'active' : ''}`} onClick={() => handleLanguageChange('Lua')}>
            Lua
          </div>
          <div className={`help-language ${language === 'dart' ? 'active' : ''}`} onClick={() => handleLanguageChange('Dart')}>
            Dart
          </div>
        </div>
      )}

      {category === 'scratch' && (
        <div className="scratch-content">
          {/* Scratch-specific content here */}
          <h3>Scratch Documentation</h3>
           {/* Common Uses Section */}
           <div className="help-section">
            <h4>Common Uses</h4>
            <p>{languageContent.commonUses}</p>
          </div>
          {/* Sample Projects Section */}
          <div className="help-section">
            <h4>Sample Projects</h4>
            <p>{languageContent.sampleProjects}</p>
          </div>
          {/* FAQ Section */}
          <div className="help-section">
            <h4>FAQ</h4>
            <p>{languageContent.faq}</p>
          </div>
        </div>
      )}

      {category === 'blockly' && (
        <div className="help-content">
          <h3>{language} Documentation</h3>
          {/* Common Uses Section */}
          <div className="help-section">
            <h4>Common Uses</h4>
            <p>{languageContent.commonUses}</p>
          </div>
          {/* Sample Projects Section */}
          <div className="help-section">
            <h4>Sample Projects</h4>
            <p>{languageContent.sampleProjects}</p>
          </div>
          {/* FAQ Section */}
          <div className="help-section">
            <h4>FAQ</h4>
            <p>{languageContent.faq}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HelpPage;

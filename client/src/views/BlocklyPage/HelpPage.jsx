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
        <h5>To-Do List Application</h5>
        <ul>
          <li>Build a console-based to-do list application that allows users to add tasks, mark them as completed, and view the list.</li>
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
      commonUses: `
        PHP Common Uses goes here...
      `,
      sampleProjects: 'PHP Sample Projects goes here...',
      faq: 'PHP FAQ goes here...',
    },
    Lua: {
      commonUses: `
        Lua Common Uses goes here...
      `,
      sampleProjects: 'Lua Sample Projects goes here...',
      faq: 'Lua FAQ goes here...',
    },
    Dart: {
      commonUses: `
        Dart Common Uses goes here...
      `,
      sampleProjects: 'Dart Sample Projects goes here...',
      faq: 'Dart FAQ goes here...',
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

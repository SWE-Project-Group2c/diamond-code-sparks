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
          <li>Build a weather application that fetches real-time weather data using a public API.</li>
        </ul>
        <h5>Expense Tracker</h5>
        <ul>
          <li>Develop a simple expense tracker that helps users manage their financial transactions.</li>
        </ul>
        <h5>Quiz Game</h5>
        <ul>
          <li>Design a quiz game with a timer and score tracker, testing users on various topics.</li>
        </ul>
      </div>
  ,
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
        <h5>Q: What are some popular JavaScript frameworks?</h5>.
        <ul>
          <li>A: Popular JavaScript frameworks include React, Angular, Vue.js for front-end development, and Node.js for server-side development.</li>
        </ul> 
    </div>,
    },
    Python: {
      commonUses: `
        Python Common Uses goes here...
      `,
      sampleProjects: 'Python Sample Projects goes here...',
      faq: 'Python FAQ goes here...',
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

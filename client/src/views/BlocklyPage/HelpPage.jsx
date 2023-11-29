// HelpPage.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './HelpPage.css'; // Import the CSS file

// Helper function to get language-specific content
const getLanguageContent = (language) => {
  const content = {
    JavaScript: {
      commonUses: 'JavaScript Common Uses goes here...',
      sampleProjects: 'JavaScript Sample Projects goes here...',
      faq: 'JavaScript FAQ goes here...',
    },
    Python: {
      commonUses: 'Python Common Uses goes here...',
      sampleProjects: 'Python Sample Projects goes here...',
      faq: 'Python FAQ goes here...',
    },
    PHP: {
      commonUses: 'PHP Common Uses goes here...',
      sampleProjects: 'PHP Sample Projects goes here...',
      faq: 'PHP FAQ goes here...',
    },
    Lua: {
      commonUses: 'Lua Common Uses goes here...',
      sampleProjects: 'Lua Sample Projects goes here...',
      faq: 'Lua FAQ goes here...',
    },
    Dart: {
      commonUses: 'Dart Common Uses goes here...',
      sampleProjects: 'Dart Sample Projects goes here...',
      faq: 'Dart FAQ goes here...',
    },
  };

  return content[language] || {}; // Return content for the selected language, or an empty object if not found
};


const HelpPage = () => {
  const [category, setCategory] = useState('blockly');
  const [language, setLanguage] = useState('javascript');

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  // Get language-specific content
  const languageContent = getLanguageContent(language);

  useEffect(() => {
    // Set initial language content
    handleLanguageChange('JavaScript');
  }, []);

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
    </div>
  );
};

export default HelpPage;

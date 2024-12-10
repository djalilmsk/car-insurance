import helpQuestions from '../components/HelpQuestions'; // Import the array

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const filteredQuestions = searchQuery
    ? helpQuestions
        .flatMap((category) => category.questions)
        .filter((item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()),
        )
    : [];

  return (
    <div className="help-page mx-auto max-w-5xl px-4 py-8">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Welcome to Our Help Center</h1>
        <p className="mt-2 text-gray-600">
          Find answers to your questions or explore our resources.
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-bar mb-6">
        <input
          type="text"
          placeholder="Search for help..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Dynamic Search Results */}
      <AnimatePresence>
        {searchQuery && (
          <motion.div
            key="search-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-4 text-xl font-semibold">Search Results</h2>
            {filteredQuestions.length > 0 ? (
              <ul className="space-y-3">
                {filteredQuestions.map((item, index) => (
                  <li key={index} className="border-b pb-2">
                    <button
                      className="w-full text-left text-blue-600 hover:underline"
                      onClick={() => setExpandedQuestion(item)}
                    >
                      {item.question}
                    </button>
                    {expandedQuestion === item && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 text-gray-700"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No results found for "{searchQuery}"
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Categories Section */}
      {!searchQuery && (
        <AnimatePresence>
          {!selectedCategory && (
            <motion.div
              key="categories"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="categories mb-8 grid grid-cols-1 gap-4 md:grid-cols-2"
            >
              {helpQuestions.map((category, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setSelectedCategory(category)}

                  className="category-card rounded-lg border border-gray-200 p-4 text-center hover:shadow-sm hover:bg-[#e8e8e8] duration-300 transition-all"
                >
                  <h2 className="text-lg font-semibold">{category.category}</h2>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Selected Category */}
      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            key="selected-category"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-xl font-semibold">
              {selectedCategory.category}
            </h2>
            <ul className="space-y-3">
              {selectedCategory.questions.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  <button
                    className="w-full text-left text-blue-600 hover:underline"
                    onClick={() =>
                      setExpandedQuestion(
                        expandedQuestion === item ? null : item,
                      )
                    }
                  >
                    {item.question}
                  </button>
                  {expandedQuestion === item && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-700"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </li>
              ))}
            </ul>
            <motion.button
              className="mt-4 text-sm text-gray-500 hover:underline"
              onClick={() => setSelectedCategory(null)}
              whileHover={{ scale: 1.05 }}
            >
              Back to Categories
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HelpPage;

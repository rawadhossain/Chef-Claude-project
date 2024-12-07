import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Chef } from './icons/chef';

function App() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState<string>('');

    // Function to handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setIngredients([...ingredients, inputValue.trim()]);
            setInputValue(''); // Clear input after submission
        }
    };

    return (
        <>
            {/* ChefHeader Component */}
            <Navbar icon={<Chef />} title="Chef Claude" />

            {/* Main Content */}
            <div className="p-4">
                {/* Form Section */}
                <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
                    <form
                        className="flex gap-4 items-center"
                        onSubmit={handleSubmit}
                    >
                        {/* Input Field */}
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="e.g. oregano"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        {/* Add Ingredient Button */}
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
                        >
                            + Add Ingredient
                        </button>
                    </form>
                </div>

                {/* Ingredients List */}
                <div className="max-w-lg mx-auto mt-6 bg-white p-4 rounded-md shadow-md">
                    <h3 className="text-lg font-semibold mb-2">
                        Ingredients on hand:
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="text-gray-800">
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;

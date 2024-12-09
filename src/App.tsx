import { useState } from 'react';
import Navbar from './components/Navbar';
import { Chef } from './icons/chef';
import { Recipe } from './components/Recipe';
import { GetRecipeButton } from './components/getRecipeButton';
import { DisplayIngredientsList } from './components/IngredientsList';

function App() {
    const [ingredients, setIngredients] = useState<string[]>([
        'all the main spices',
        'pasta',
        'ground beef',
        'tomato paste',
    ]);
    const [inputValue, setInputValue] = useState<string>('');

    /*
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); //to prevent reloading the page after every input submission

        if (inputValue.trim()) {
            // setIngredients([...ingredients, inputValue.trim()]);
            setIngredients(() => [...ingredients, inputValue.trim()]);
            setInputValue(''); // Clear input after submission
        }
    };
*/
    const addIngredient = (FormData: any) => {
        const itemName = FormData.get('item');

        if (itemName.trim()) {
            // setIngredients([...ingredients, inputValue.trim()]);
            setIngredients(() => [...ingredients, itemName.trim()]);
            setInputValue(''); // Clear input after submission
        }
    };

    const ingredientsListItems = (
        <>
            {ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-800">
                    {ingredient}
                </li>
            ))}
        </>
    );

    const [recipeShown, setRecipeShown] = useState(false);

    function toggleRecipe() {
        setRecipeShown(() => !recipeShown);
    }

    return (
        <>
            {/* ChefHeader Component */}
            <Navbar icon={<Chef />} title="Chef Claude" />

            {/* Main Content */}
            <div className="p-4">
                {/* Form Section */}
                <div className="max-w-lg mx-auto bg-gray-100 p-6 rounded-md shadow-md">
                    <form
                        action={addIngredient}
                        className="flex gap-4 items-center"
                    >
                        <input
                            name="item"
                            type="text"
                            placeholder="e.g. chicken"
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-900 shadow-md"
                        >
                            + Add Ingredient
                        </button>
                    </form>
                </div>

                {/* Ingredients List */}
                <DisplayIngredientsList
                    ingredientsListItems={ingredientsListItems}
                />

                {/* Get Recipe Button */}
                {ingredients.length > 3 && (
                    <GetRecipeButton toggleRecipe={toggleRecipe} />
                )}

                {recipeShown && <Recipe />}
            </div>
        </>
    );
}

export default App;

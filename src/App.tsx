import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import { Chef } from './icons/chef';
import { AiRecipe } from './components/AiRecipe';
import { GetRecipeButton } from './components/getRecipeButton';
import { DisplayIngredientsList } from './components/IngredientsList';
import { getRecipeFromMistral } from './ai';

function App() {
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [, setInputValue] = useState<string>('');

    const recipeRef = useRef<HTMLDivElement>(null);

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

    const [recipe, setRecipe] = useState<string | undefined>('');

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(recipeMarkdown);

        // Scroll to the recipe section when the recipe is ready
        if (recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            {/* ChefHeader Component */}
            <Navbar icon={<Chef />} title="IngreBot" />

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
                    <GetRecipeButton toggleRecipe={getRecipe} />
                )}
                <div ref={recipeRef}>
                    {recipe && <AiRecipe recipe={recipe} />}
                </div>
            </div>
        </>
    );
}

export default App;

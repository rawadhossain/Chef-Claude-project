export function GetRecipeButton({
    toggleRecipe,
}: {
    toggleRecipe: () => void;
}) {
    return (
        <div className="max-w-lg mx-auto mt-6 bg-orange-50 p-4 rounded-md shadow-md">
            <p className="text-md font-semibold mb-1">Ready for recipe?</p>
            <div className="flex justify-between items-center">
                <p className="text-sm text-slate-600 mt-2">
                    Generate a recipe from your list of ingredients.
                </p>

                <button
                    onClick={toggleRecipe}
                    className="bg-orange-400 text-slate-50 px-4 py-1 rounded-md hover:bg-orange-700 mb-1 mr-3 shadow-md"
                >
                    Get recipe
                </button>
            </div>
        </div>
    );
}

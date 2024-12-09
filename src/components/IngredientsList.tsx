export function DisplayIngredientsList({ ingredientsListItems }: any) {
    return (
        <div className="max-w-lg mx-auto mt-6 bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Ingredients on hand:</h3>

            <ul className="list-disc pl-5 space-y-1">{ingredientsListItems}</ul>
        </div>
    );
}

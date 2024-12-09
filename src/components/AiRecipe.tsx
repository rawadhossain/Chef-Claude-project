import Markdown from 'react-markdown';

export function AiRecipe(recipeProps: { recipe: string }) {
    return (
        <div className="m-12" aria-live="polite">
            <Markdown>{recipeProps.recipe}</Markdown>
        </div>
    );
}

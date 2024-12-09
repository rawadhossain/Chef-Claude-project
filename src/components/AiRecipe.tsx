import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Adds support for tables, task lists, etc.
import rehypeRaw from 'rehype-raw'; // Allows rendering raw HTML in Markdown

export function AiRecipe(recipeProps: { recipe: string }) {
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-orange-600 mb-4">
                Chef Claude Recommends:
            </h2>
            <div className="prose prose-lg max-w-none">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                >
                    {recipeProps.recipe}
                </Markdown>
            </div>
        </div>
    );
}

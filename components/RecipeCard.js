import React from 'react';

export default function RecipeCard() {
    const exampleRecipe = {
        title: 'Avocado and Egg Breakfast Bowl',
        ingredients: [
            { name: '1 ripe avocado', image: 'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            { name: '2 large eggs', image: 'https://images.pexels.com/photos/162712/egg-white-food-protein-162712.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { name: '1/2 cup cherry tomatoes, halved', image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { name: '1/4 cup red onion, diced', image: 'https://images.pexels.com/photos/144206/pexels-photo-144206.jpeg?auto=compress&cs=tinysrgb&w=800' },
            { name: '1 tablespoon olive oil', image: 'https://images.pexels.com/photos/1022385/pexels-photo-1022385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
            { name: 'Salt and pepper to taste', image: 'https://images.pexels.com/photos/971077/pexels-photo-971077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }
        ],
        instructions: [
            'Mash Avocado: Halve and mash the avocado, season with salt and pepper.',
            'Cook Eggs: Heat olive oil, cook eggs until whites are set, season.',
            'Assemble Bowl: Place mashed avocado in bowl, top with eggs, cherry tomatoes, and red onion.'
        ],
        nutritionalInfo: [
            'Carbs: 12g',
            'Protein: 14g',
            'Fat: 28g'
        ],
        diabetesTips: [
            'Low Carb: Easier blood sugar management.',
            'Healthy Fats & Protein: Stable glucose levels.',
            'Fiber: Helps prevent spikes.'
        ]
    };

    const createdAt = "2024-07-21T11:33:00Z";
    const topic = "Healthcare";

    // Format the date
    const formattedDate = new Date(createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        timeZoneName: 'short'
    });

    return (
        <div className="max-w-3xl mx-auto my-12 bg-white bg-opacity-50 shadow-md p-8 border border-gray-200 relative hover:scale-105 transform duration-500 hover:shadow-xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            <h1 className="text-3xl font-serif mb-6 text-gray-800">{exampleRecipe.title}</h1>

            <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Ingredients</h2>
                <ul className="flex flex-wrap space-x-4 text-gray-600 leading-relaxed text-left">
                    {exampleRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center space-x-2">
                            <img src={ingredient.image} alt={ingredient.name} className="w-12 h-12 rounded-full" />
                            <span>{ingredient.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Instructions</h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-600 leading-relaxed text-left">
                    {exampleRecipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ol>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Nutritional Info (Per Serving)</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed text-left">
                    {exampleRecipe.nutritionalInfo.map((info, index) => (
                        <li key={index}>{info}</li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <h2 className="text-xl font-serif mb-3 text-gray-700">Diabetes Tips</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed text-left">
                    {exampleRecipe.diabetesTips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500">
                <p><span className="font-semibold">Topic:</span> {topic}</p>
                <p><span className="font-semibold">Date:</span> {formattedDate}</p>
            </div>
        </div>
    );
}

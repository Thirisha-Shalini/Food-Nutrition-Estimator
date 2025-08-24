// Comprehensive nutrition database (per 100g)
const nutritionDB = {
    // Grains & Starches
    'rice': { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    'brown rice': { calories: 123, protein: 2.6, carbs: 23, fat: 0.9 },
    'white rice': { calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    'quinoa': { calories: 120, protein: 4.4, carbs: 22, fat: 1.9 },
    'pasta': { calories: 131, protein: 5, carbs: 25, fat: 1.1 },
    'bread': { calories: 265, protein: 9, carbs: 49, fat: 3.2 },
    'wheat bread': { calories: 247, protein: 13, carbs: 41, fat: 4.2 },
    'oats': { calories: 389, protein: 16.9, carbs: 66, fat: 6.9 },
    'potato': { calories: 77, protein: 2, carbs: 17, fat: 0.1 },
    'sweet potato': { calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },

    // Proteins
    'chicken': { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    'chicken breast': { calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    'chicken thigh': { calories: 209, protein: 26, carbs: 0, fat: 10.9 },
    'beef': { calories: 250, protein: 26, carbs: 0, fat: 15 },
    'ground beef': { calories: 254, protein: 26, carbs: 0, fat: 16 },
    'pork': { calories: 242, protein: 27, carbs: 0, fat: 14 },
    'fish': { calories: 206, protein: 22, carbs: 0, fat: 12 },
    'salmon': { calories: 208, protein: 20, carbs: 0, fat: 13 },
    'tuna': { calories: 144, protein: 30, carbs: 0, fat: 1 },
    'cod': { calories: 82, protein: 18, carbs: 0, fat: 0.7 },
    'shrimp': { calories: 99, protein: 18, carbs: 0.2, fat: 1.4 },
    'eggs': { calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    'tofu': { calories: 76, protein: 8, carbs: 1.9, fat: 4.8 },

    // Dairy
    'milk': { calories: 42, protein: 3.4, carbs: 5, fat: 1 },
    'cheese': { calories: 113, protein: 7, carbs: 1, fat: 9 },
    'yogurt': { calories: 59, protein: 10, carbs: 3.6, fat: 0.4 },
    'butter': { calories: 717, protein: 0.9, carbs: 0.1, fat: 81 },

    // Vegetables
    'broccoli': { calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    'spinach': { calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4 },
    'carrots': { calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    'tomato': { calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    'onion': { calories: 40, protein: 1.1, carbs: 9.3, fat: 0.1 },
    'garlic': { calories: 149, protein: 6.4, carbs: 33, fat: 0.5 },
    'bell pepper': { calories: 31, protein: 1, carbs: 7, fat: 0.3 },
    'cucumber': { calories: 16, protein: 0.7, carbs: 4, fat: 0.1 },
    'lettuce': { calories: 15, protein: 1.4, carbs: 2.9, fat: 0.2 },
    'kale': { calories: 49, protein: 4.3, carbs: 9, fat: 0.9 },

    // Fruits
    'apple': { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    'banana': { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    'orange': { calories: 47, protein: 0.9, carbs: 12, fat: 0.1 },
    'berries': { calories: 57, protein: 0.7, carbs: 14, fat: 0.3 },
    'strawberry': { calories: 32, protein: 0.7, carbs: 8, fat: 0.3 },
    'avocado': { calories: 160, protein: 2, carbs: 9, fat: 15 },

    // Oils & Fats
    'oil': { calories: 884, protein: 0, carbs: 0, fat: 100 },
    'olive oil': { calories: 884, protein: 0, carbs: 0, fat: 100 },
    'coconut oil': { calories: 862, protein: 0, carbs: 0, fat: 100 },
    'nuts': { calories: 607, protein: 15, carbs: 7, fat: 54 },
    'almonds': { calories: 579, protein: 21, carbs: 22, fat: 50 },
    'peanuts': { calories: 567, protein: 26, carbs: 16, fat: 49 },

    // Legumes
    'beans': { calories: 127, protein: 9, carbs: 23, fat: 0.5 },
    'lentils': { calories: 116, protein: 9, carbs: 20, fat: 0.4 },
    'chickpeas': { calories: 164, protein: 8, carbs: 27, fat: 2.6 },

    // Condiments & Others
    'sugar': { calories: 387, protein: 0, carbs: 100, fat: 0 },
    'honey': { calories: 304, protein: 0.3, carbs: 82, fat: 0 },
    'salt': { calories: 0, protein: 0, carbs: 0, fat: 0 }
};

// --- Helper Functions ---

function findIngredient(input) {
    const normalized = input.toLowerCase().trim();
    if (nutritionDB[normalized]) return { name: normalized, data: nutritionDB[normalized] };

    for (const key in nutritionDB) {
        if (key.includes(normalized) || normalized.includes(key)) {
            return { name: key, data: nutritionDB[key] };
        }
    }
    return null;
}

function getDefaultPortionSize(ingredient) {
    const portions = {
        'rice': 75, 'pasta': 75, 'quinoa': 75,
        'chicken': 150, 'beef': 150, 'pork': 150, 'fish': 150,
        'oil': 10, 'olive oil': 10, 'butter': 10,
        'nuts': 30, 'cheese': 30,
        'bread': 50, 'eggs': 60,
        'vegetables': 100, 'fruits': 150
    };
    for (const key in portions) if (ingredient.includes(key)) return portions[key];

    if (nutritionDB[ingredient]) {
        const data = nutritionDB[ingredient];
        if (data.calories > 500) return 20;
        if (data.protein > 20) return 120;
        if (data.carbs > 50) return 75;
        return 100;
    }
    return 100;
}

function analyzeMeal() {
    const input = document.getElementById('ingredients').value;
    if (!input.trim()) { alert('Please enter some ingredients!'); return; }

    const ingredients = input.split(',').map(i => i.trim()).filter(i => i);
    let totalCalories = 0, totalProtein = 0, totalCarbs = 0, totalFat = 0;
    const foundIngredients = [], notFoundIngredients = [];

    ingredients.forEach(ingredient => {
        const found = findIngredient(ingredient);
        if (found) {
            const portionSize = getDefaultPortionSize(found.name);
            const factor = portionSize / 100;

            const calories = Math.round(found.data.calories * factor);
            const protein = Math.round(found.data.protein * factor * 10) / 10;
            const carbs = Math.round(found.data.carbs * factor * 10) / 10;
            const fat = Math.round(found.data.fat * factor * 10) / 10;

            totalCalories += calories;
            totalProtein += protein;
            totalCarbs += carbs;
            totalFat += fat;

            foundIngredients.push({
                original: ingredient,
                matched: found.name,
                portion: portionSize,
                calories,
                protein,
                carbs,
                fat
            });
        } else {
            notFoundIngredients.push(ingredient);
        }
    });

    displayResults(foundIngredients, notFoundIngredients, totalCalories, totalProtein, totalCarbs, totalFat);
}

// --- Display Results ---
function displayResults(found, notFound, calories, protein, carbs, fat) {
    let ingredientHTML = '<h3>Ingredient Breakdown:</h3>';
    found.forEach(ing => {
        ingredientHTML += `
            <div class="ingredient-item">
                <span class="ingredient-name">${ing.original} (${ing.portion}g)</span>
                <span class="ingredient-cals">${ing.calories} cal</span>
            </div>
        `;
    });

    if (notFound.length > 0) {
        ingredientHTML += `<p style="color: #e53e3e; margin-top: 10px;"><strong>Not found:</strong> ${notFound.join(', ')}</p>`;
    }

    document.getElementById('ingredientList').innerHTML = ingredientHTML;

    document.getElementById('totalCalories').textContent = Math.round(calories);
    document.getElementById('totalProtein').textContent = Math.round(protein * 10) / 10 + 'g';
    document.getElementById('totalCarbs').textContent = Math.round(carbs * 10) / 10 + 'g';
    document.getElementById('totalFat').textContent = Math.round(fat * 10) / 10 + 'g';

    const analysis = analyzeMealBalance(calories, protein, carbs, fat);
    document.getElementById('mealAnalysis').innerHTML = `
        <div class="meal-type" style="color: ${analysis.color};">
            ${analysis.type}
        </div>
        <div class="meal-description">
            ${analysis.description}
        </div>
        <div class="recommendations">
            <h4>💡 Recommendations:</h4>
            <ul>
                ${analysis.recommendations.map(rec => `<li>${rec}</li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('results').classList.add('show');
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// --- Analyze Meal Balance ---
function analyzeMealBalance(calories, protein, carbs, fat) {
    const totalMacros = protein + carbs + fat;
    const proteinPct = (protein / totalMacros) * 100;
    const carbsPct = (carbs / totalMacros) * 100;
    const fatPct = (fat / totalMacros) * 100;

    if (proteinPct < 15) {
        return {
            type: "🍞 Low Protein Meal",
            color: "#e53e3e",
            description: `This meal is low in protein (${Math.round(proteinPct)}%). Your body needs protein for muscle maintenance and satiety.`,
            recommendations: [
                "Add more protein sources like chicken, fish, eggs, or legumes",
                "Consider Greek yogurt or protein powder as additions",
                "Aim for 20-30% of calories from protein"
            ]
        };
    }

    if (carbsPct > 60) {
        return {
            type: "🍚 High-Carb Meal",
            color: "#ed8936",
            description: `This meal is carb-heavy (${Math.round(carbsPct)}%). Great for energy, but balance with protein and healthy fats.`,
            recommendations: [
                "Add more protein to help with blood sugar stability",
                "Include healthy fats like avocado or nuts",
                "Choose complex carbs over simple sugars when possible"
            ]
        };
    }

    if (fatPct > 50) {
        return {
            type: "🥑 High-Fat Meal",
            color: "#9f7aea",
            description: `This meal is fat-heavy (${Math.round(fatPct)}%). Healthy fats are important, but balance is key.`,
            recommendations: [
                "Ensure you're including enough protein and vegetables",
                "Focus on healthy fats from nuts, seeds, and olive oil",
                "Consider portion sizes for high-fat foods"
            ]
        };
    }

    if (proteinPct >= 20 && carbsPct <= 50 && fatPct <= 35) {
        return {
            type: "✅ Balanced Meal",
            color: "#38a169",
            description: `Great balance! Protein: ${Math.round(proteinPct)}%, Carbs: ${Math.round(carbsPct)}%, Fat: ${Math.round(fatPct)}%`,
            recommendations: [
                "This meal has a good macronutrient balance",
                "Make sure to include a variety of colorful vegetables",
                "Stay hydrated and enjoy your nutritious meal!"
            ]
        };
    }

    return {
        type: "🍽️ Moderate Meal",
        color: "#4299e1",
        description: `A decent meal balance with room for optimization. Protein: ${Math.round(proteinPct)}%, Carbs: ${Math.round(carbsPct)}%, Fat: ${Math.round(fatPct)}%`,
        recommendations: [
            "Try to include more variety in your ingredients",
            "Add some vegetables for vitamins and minerals",
            "Consider your activity level when planning portions"
        ]
    };
}

// --- Event Listeners ---
document.getElementById('ingredients').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') analyzeMeal();
});

window.addEventListener('load', function() {
    document.getElementById('ingredients').placeholder = "Try: chicken breast, brown rice, broccoli, olive oil";
});

🥗 Food Nutrition Estimator
A simple web application that allows users to input ingredients and instantly get a nutritional analysis of their meal. It calculates calories, protein, carbs, and fats, and provides feedback on meal balance with recommendations.
Features
•	Input ingredients separated by commas.
•	Provides nutritional breakdown per ingredient.
•	Calculates total Calories, Protein, Carbs, and Fat.
•	Analyzes meal balance (Low Protein, High-Carb, High-Fat, Balanced).
•	Provides personalized recommendations to improve nutrition.
•	Lightweight, fast, and runs entirely in the browser.
•	Mobile responsive design.
Demo Screenshot
 
Technologies Used
•	Frontend: HTML, CSS, JavaScript
•	Backend (optional): Python Flask for a server version
•	IDE: VS Code
How to Run Locally
Option 1: HTML + JS Only
1.	Clone the repo:
git clone <your-repo-url>
2.	Open index.html in your browser or use VS Code Live Server.
Option 2: With Python Flask
1.	Create a virtual environment:
python -m venv venv
source venv/bin/activate   # Mac/Linux
venv\Scripts\activate      # Windows
2.	Install requirements:
pip install -r requirements.txt
3.	Run the server:
python app.py
4.	Open http://localhost:8000 in your browser.

File Structure
nutrition-estimator/
│
├─ venv/                   # Virtual environment
├─ index.html              # Main HTML file
├─ style.css               # CSS styling
├─ script.js               # JavaScript logic
├─ app.py                  # Optional Python backend server
├─ requirements.txt        # Python dependencies
├─ README.md               # This file
└─ screenshot.png          # Demo screenshot

How It Works
1.	User inputs ingredients in the input box.
2.	JS checks the ingredient against the built-in nutrition database.
3.	Nutritional info per ingredient is calculated based on standard portion sizes.
4.	Total meal macros are summed and analyzed.
5.	Feedback and recommendations are displayed.

Future Enhancements
•	Add support for more ingredients and regional foods.
•	Integrate with an external nutrition API for real-time data.
•	Allow users to save meal logs.
•	Add ML-based meal suggestions for specific diets (keto, vegan, etc.)

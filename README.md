# Destiny Fitness Meal Prep Library

A static, mobile-first meal prep library for Destiny Fitness that can be uploaded to GitHub, deployed on Cloudflare Pages, and embedded inside Whop using the Website Embed app.

## Included

- 135 structured meal prep recipes
- Recipe search, category filters, macro filters, and sorting
- Favorites saved to localStorage
- 7-day weekly menu builder saved to localStorage
- Structured weekly menus
- Grocery list generated from the weekly menu
- Master grocery list by nutritional component
- Browser-side PDF downloads using jsPDF
- Individual recipe PDFs
- Weekly menu PDF
- Grocery list PDF
- Replaceable local image fields for every recipe
- Fallback image support
- Destiny Fitness brand colors and logo

## File Structure

```text
index.html
styles.css
app.js
meals.js
assets/
  logo.png
  meals/
    fallback.svg
    meal-001.svg
    meal-002.svg
    ...
README.md
```

## Meal Data Schema

Each meal inside `meals.js` follows this schema:

```js
{
  id: "meal-001",
  title: "Chicken Fajita Bowl",
  category: "Weight Loss & Shred",
  goalType: "Weight loss",
  calories: 405,
  protein: 42,
  carbs: 36,
  fats: 10,
  fiber: 7,
  prepTime: 15,
  cookTime: 20,
  servings: 4,
  image: "assets/meals/meal-001.svg",
  tags: ["High protein", "Weight loss"],
  ingredients: [],
  instructions: [],
  portionBreakdown: [],
  components: {
    "Protein source": "chicken breast",
    "Carb source": "brown rice",
    "Fat source": "measured oil or natural fats from protein",
    "Vegetable/fiber source": "bell peppers and onions",
    "Sauce/flavor source": "avocado salsa"
  },
  storage: "...",
  reheating: "...",
  bestUsedFor: [],
  grocery: {
    "Proteins": [],
    "Carbs": []
  }
}
```

## How to Replace Meal Images

Each recipe already points to a local image path like:

```text
assets/meals/meal-001.svg
```

To use real food photos:

1. Export your meal photo as JPG, PNG, WebP, or SVG.
2. Name it the same as the recipe ID, for example `meal-001.jpg`.
3. Upload it into `assets/meals/`.
4. Open `meals.js` and update the recipe image field:

```js
image: "assets/meals/meal-001.jpg"
```

The app will not break if an image is missing because it uses `assets/meals/fallback.svg`.

## Cloudflare Pages Deployment

### Static HTML setup

1. Create a new GitHub repository.
2. Upload all files from this project into the repository root.
3. Go to Cloudflare Pages.
4. Choose **Create a project**.
5. Connect your GitHub repository.
6. Use these build settings:

```text
Framework preset: None
Build command: None
Output directory: /
```

7. Deploy the project.
8. Copy your Cloudflare Pages domain.
9. Open your Whop dashboard.
10. Add or edit the Website Embed app.
11. Paste your Cloudflare Pages domain into the embed URL field.
12. Test it on desktop and iPhone.

## Local Testing

Because this project uses plain static files, you can open `index.html` directly in your browser.

For a more accurate test, run a local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Important Nutrition Disclaimer

Nutrition information is an estimate and may vary based on brands, portions, and preparation methods. Destiny Fitness provides general fitness and nutrition education only. This is not medical advice. Always consult a qualified professional for personalized nutrition guidance, especially if you have allergies, medical conditions, or dietary restrictions.

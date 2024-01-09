import React, { useState } from 'react';

function Moltenlava() {
  const [showRecipe, setShowRecipe] = useState(false);

  const toggleRecipe = () => {
    setShowRecipe(!showRecipe);
  };

  return (
    <>
      <div id='whole-things'>
        {/* Image in the background */}
        <img
          className='side-image'
          src="https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
          alt="Molten Lava"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Molten Lava</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              The United States-based chef Jean-Georges Vongerichten claims to have invented molten chocolate cake in New York City in 1987, but the French chef and chocolatier Jacques Torres disputes this, arguing that such a dish already existed in France. According to Vongerichten, he pulled a chocolate sponge cake from the oven before it was done and found that the center was still runny, but was warm and had both a good taste and texture. Regardless of who invented the dish, Vongerichten has been credited with popularizing it in the United States, and it became almost a very popular dessert at high-end restaurant menus.
              <p> <strong>For Recipe: Click button</strong> </p>
  </p>

              {/*Recipe Button*/}

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={toggleRecipe}
                >
                  Recipe
                </button>
              </div>
            </>
          )}
          {showRecipe && <Recipieml toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function Recipieml({ toggleRecipe }) {
  const goBack = () => {
    toggleRecipe(); 
  };

  return (
    <div id='ing'>
      
      {/*Recipe and Instructions of the food */}

      <h3>Recipe</h3>
      <ul>
<li>1 cup Sugar </li>
<li>3 Green Cardamom pods </li>
<li>1½ cups Water</li>
<li>1-2 drops of Lemon Juice</li>
<li>1/4 cup Milk Powder</li>
<li>1/4 cup Maida</li>
<li>1/8 teaspoon (a small pinch) Baking Soda</li>
<li>1 tablespoon Ghee</li>
<li>2-3 tablespoons Milk</li>
<li>Oil or Ghee, for deep frying</li>
</ul>

<h3> Instructions:</h3>
   
<ul>
  <li>MAKE THE DOUGH</li>
  <li>FORM BALLS</li>
  <li>FRY THE GULAB JAMUN</li>
  <li>MAKE THE SUGAR SYRUP</li>
  <li>SOAK THE GULAB JAMUN</li>
  <li>SERVE & ENJOY!</li>
</ul>

   {/*Back button */}
   
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={goBack} 
        >
          Back
        </button>
      </div>
    </div>
  );
}
export default Moltenlava
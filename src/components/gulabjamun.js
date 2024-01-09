import React, { useState } from 'react';

function Gulabjamun() {
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
          src="https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988.jpeg"
          alt="GulabJamun"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Gulab Jamun</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              The origin of gulab jamun lay in Persia and the Mediterranean and, thanks to the introduction of white wheat flour from Central Asia, could now also be made in India. Indian chefs used khoya, a solid milk 'paste' that was the result of milk simmering for hours on a low heat.
              Gulab Jamun emerged in medieval India under Islamic period, blending Persianate influence and local influences that eventually became gulab jamun. 
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
          {showRecipe && <Recipiegj toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function Recipiegj({ toggleRecipe }) {
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
export default Gulabjamun
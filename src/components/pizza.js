import React, { useState } from 'react';

function Pizza() {
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
          src="https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA"
          alt="Yakhni Biryani"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Pizza</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              Pizza dates back thousands of years, believe it or not, tracing its roots back to the flatbreads with toppings that were popular with ancient Egyptians, Greeks, and Romans. But modern pizza, the flatbreads with tomato sauce, cheese, and toppings, was born along the western coast of Italy, in the city of Naples. Pizza has a long history. Flatbreads with toppings were consumed by the ancient Egyptians, Romans and Greeks.
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
          {showRecipe && <IngrPizza toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function IngrPizza({ toggleRecipe }) {
  const goBack = () => {
    toggleRecipe(); 
  };

  return (
    <div id='ing'>
      
      {/*Recipe and Instructions of the food */}

      <h3>Recipe</h3>
      <ul>
<li>2 cup all purpose flour </li>
<li>100 ml tomato ketchup </li>
<li>1 tomato</li>
<li>2 onion</li>
<li>1 teaspoon chilli flakes</li>
<li>1 teaspoon baking powder</li>
<li>1 teaspoon sugar</li>
<li>2 teaspoon virgin olive oil</li>
<li>100 gm processed cheese</li>
<li>4 mushroom</li>
<li>1/2 capsicum (green pepper)</li>
<li>1 teaspoon oregano</li>
<li>1/2 cup mozzarella</li>
<li>1 tablespoon dry yeast</li>
<li>water as required</li>
</ul>

<h3> Instructions:</h3>
   
<ul>
  <li>Prepare the pizza dough</li>
  <li>Prepare the pizza base</li>
  <li>Chop all the vegetables for the pizza</li>
  <li>Spread the sauce and veggies on the base</li>
  <li>Bake the pizza at 250 degree Celsius for 10 minutes</li>
  <li>Serve and Enjoy!</li>
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
export default Pizza
import React, { useState } from 'react';

function ClamDam() {
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
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/10/24/FNK_CLAM_DIP_H_f.jpg.rend.hgtvcom.791.633.suffix/1666710963839.jpeg"
          alt="Clam Dip"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Clam Dip</h1>
          </div>
          {!showRecipe && (
            <>
            
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              In the early 1950s in the United States, the first televised recipe for clam dip appeared on the Kraft Music Hall show, a radio and television variety program broadcast on NBC from 1933 to 1971. After the recipe segment aired, canned clams in New York City reportedly sold out within 24 hours.
              Jean Anderson of The American Century Cookbook traced the first print of the dip through some amazing sleuthing to the 28th President
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
          {showRecipe && <Ingredients toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function Ingredients({ toggleRecipe }) {
  const goBack = () => {
    toggleRecipe(); 
  };

  return (
    <div id='ing'>
      
      {/*Recipe and Instructions of the food */}

      <h3>Recipe</h3>
  <ul>
    <li> Minced meat/ground meat</li>
    <li> Onions</li>
    <li> Tomatoes</li>
    <li> Garlic, ginger, green chillies</li>
    <li> Wheat flour (atta) or gram flour (besan)</li>
    <li> Eggs </li>
    <li> Dried pomegranate seeds</li>
    <li> Coriander seeds</li>
    <li> Cumin seeds</li>   
</ul>

      <h3>Instructions</h3>

<ul>
<li>In a mixing bowl, combine the minced meat, chopped onion, tomatoes, green chilies, coriander leaves, ginger-garlic paste, spices, and salt.</li>
<li>Mix the ingredients thoroughly by hand, ensuring they are well combined.</li>
<li>If the mixture feels too loose, you can add an egg to help bind it together.</li>
<li>Take a portion of the mixture and shape it into a flat, round kebab.</li>
<li>Heat oil in a pan on medium heat for shallow frying.</li>
<li>Carefully place the shaped kebabs into the hot oil and fry them until they turn golden brown on both sides, ensuring they are cooked through.</li>
<li>Once cooked, remove the kebabs from the oil and place them on paper towels to drain excess oil. </li>
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
export default ClamDam
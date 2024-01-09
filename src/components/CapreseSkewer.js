import React, { useState } from 'react';

function CapreseSkewers() {
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
          src="https://www.missioneurovision.co.uk/wp-content/uploads/2023/03/italy-caprese-skewers-2.jpg.webp"
          alt="Caprese Skewers"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Caprese Skewers</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

        <h3 id='bruschist'>History</h3>
        
        <p id='brhist_p'>
            The origin of the Caprese salad is somewhat unclear, but it is believed to have originated on the island of Capri, which is located off the coast of Naples. It’s now an iconic part of Italian cuisine!
            We love these little Caprese skewers for our parties. You could also opt to make a fresh plate of Caprese salad too – the more, the merrier. 
            Caprese salad skewers are a perfect party treat that combine the fresh and vibrant flavors of cherry tomatoes, mozzarella pearls, and basil. This is a mouth-watering and iconic combination that’s hard to resist!
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
          {showRecipe && <Recipe toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function Recipe({ toggleRecipe }) {
  const goBack = () => {
    toggleRecipe(); 
  };

  return (
    <div id='ing'>
      
      {/*Recipe and Instructions of the food */}

      <h3>Recipe</h3>
      
      <ul>
        <li>Cherry tomatoes</li>
        <li>Mozzarella pearls</li>
        <li>Fresh basil</li>
        <li>Olive oil</li>
        <li>Balsamic vinegar</li>
        <li>Dried oregano</li>
     </ul>

   <h3> Instructions:</h3>
   
   <ul>
        <li>Place the ingredients onto little wooden skewers.</li>
        <li>Drizzle with olive oil. Optional: sprinkle dried oregano and/or drizzle with balsamic vinegar. </li>
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
export default CapreseSkewers
import React, { useState } from 'react';

function Bruschetta() {
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
          src="https://preppykitchen.com/wp-content/uploads/2023/04/Bruschetta-Recipe-Recipe-Card.jpg"
          alt="Bruschetta"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Bruschetta</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              Bruschetta was first documented in English by Elizabeth David in 1954. David observed in Italian Food that "bruschetta are eaten with the newly made oil" in the olive oil-producing districts of Tuscany and Umbria. Waverley Root and Marcella Hazan trace the origins of bruschetta to ancient Rome.
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
          {showRecipe && <IngBruschetta toggleRecipe={toggleRecipe} />}
        </div>
      </div>
    </>
  );
}

function IngBruschetta({ toggleRecipe }) {
  const goBack = () => {
    toggleRecipe(); 
  };

  return (
    <div id='ing'>
      
      {/*Recipe and Instructions of the food */}

      <h3>Recipe</h3>
      <ul>
 <li>1/4 c. extra-virgin olive oil</li>
<li>2 cloves garlic, thinly sliced</li>
<li>2 cloves garlic, thinly sliced</li>
<li>1 tsp. kosher salt, divided</li>
<li>1/4 c. thinly sliced fresh basil</li>
<li>2 tbsp. balsamic vinegar </li>
<li>Pinch of crushed red pepper flakes</li>
</ul>

   <h3> Instructions:</h3>
   <h5>TOMATOES</h5>
<p><strong>Step 1</strong></p>
In a medium skillet over medium-low heat, heat oil. Add garlic and cook, stirring occasionally, until lightly golden, 2 to 4 minutes. Let cool.
<p><strong>Step 2</strong></p>
Meanwhile, set a large strainer or colander over a bowl. Add tomatoes and toss with 1/2 teaspoon salt. Let sit 5 minutes, then transfer tomatoes to a large bowl.
<p><strong>Step 3</strong></p>
Add basil, vinegar, red pepper, and remaining 1/2 teaspoon salt to bowl with tomatoes and toss to combine. Add garlic and oil from skillet and toss again to combine. Let marinate at least 30 minutes or up to 2 days.
<h5>BREAD & ASSEMBLing</h5>
<p><strong>Step 1</strong></p>
Preheat oven to 400°. Brush bread on both sides with oil and arrange on large baking sheet. 
<p><strong>Step 2</strong></p>
Toast bread, turning halfway through, until dried and golden brown, 10 to 15 minutes. Let cool 5 minutes, then rub one side of bread with halved garlic cloves.
<p><strong>Step 3</strong></p>
Arrange bread on a platter. Spoon tomatoes on top of bread just before serving.
   
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

export default Bruschetta;
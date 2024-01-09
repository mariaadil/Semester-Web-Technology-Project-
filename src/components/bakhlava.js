import React, { useState } from 'react';

function Bakhlava() {
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
          src="https://kfoods.com/images1/newrecipeicon/baklava-sweets_12382.jpg" 
          alt="Bakhlava"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Bakhlava</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              Baklava has a rich and layered history, much like its own intricate layers of phyllo dough and nuts! Its origins trace back to the imperial kitchens of the ancient Middle East. While there isn't a definitive pinpoint on its exact birthplace, it's widely believed that baklava has roots in the Assyrian civilization around the 8th century B.C.

Over time, the recipe evolved as different cultures and empires adopted and adapted it to their tastes. The Assyrians, Greeks, Romans, and eventually the Ottomans all had their versions of this delightful dessert.
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
    
    <h4>  For the baklava: </h4>

<li>1 pound chopped nuts </li>
<li>1 pound phyllo dough, thawed </li>
<li>1 cup butter, melted</li>
<li>1/3 cup sugar </li>
<li>1 teaspoon ground cinnamon</li>
<li>1/3 teaspoon ground cloves</li>

<h4>For the syrup:</h4>

<li>1 cup water</li>
<li>1 cup sugar</li>
<li>1/2 cup honey</li>
<li>2 tablespoons lemon juice</li>
<li>1 cinnamon stick</li>
<li>Finely ground pistachios for garnish, optional</li>
</ul>

   <h3> Instructions:</h3>
   <h4>Thaw the dough:</h4>
Thaw the phyllo dough according to manufacturer's directions (this may take overnight).

Phyllo Dough Thawed in a Baking Pan Covered with a Wet Kitchen Towel

<h4>Preheat the oven and prep the pan:</h4>
Preheat the oven to 350°F. Lightly grease a 9x13-inch pan.

Make the filling, melt the butter, and prep the dough:
In a food processor, pulse the nuts until they are finely chopped. 
<h4>Assemble the first layer:</h4>
Place a sheet of phyllo dough into the pan. Using a pastry brush, brush the phyllo sheet with melted butter. 
Simply Recipes / Michelle Becker
<h4>Add the filling and continue layering:</h4>
Spoon on a thin layer of the nut mixture. Cover with two more sheets of phyllo, brushing each one with butter. 

<h4>Score, then bake:</h4>

Spoon the syrup over the hot bakalava
Spoon the cooled syrup over the hot baklava and let cool, uncovered, for at least 4 hours.

Garnish with some finely crushed pistachios of desired.
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
export default Bakhlava
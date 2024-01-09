import React, { useState } from 'react';

function Yakhnibiryani() {
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
          src="https://i.ytimg.com/vi/Y05X62tEpN4/maxresdefault.jpg"
          alt="Yakhni Biryani"
        />

        {/*Name of the food*/}

        <div id='brhist'>
          <div id='title-left'>
            <h1>Yakhni Biryani</h1>
          </div>
          {!showRecipe && (
            <>
            {/*History of the food*/}

              <h3 id='bruschist'>History</h3>
              <p id='brhist_p'>
              The word “biryani” comes from the Persian word “birian” which means “fried before cooking.” One could conclude that the biryani originated in Iran (previously known as Persia). Another interesting story traces the origins of the dish to Mumtaz Mahal (1593-1631), Shah Jahan’s queen who inspired the Taj Mahal. It is said that she once visited army barracks and found the army personnel under-nourished. She asked the chef to prepare a special dish that provided balanced nutrition, and thus the biryani was created.              </p>

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
<li>25g butter </li>
<li>300g Basmati rice </li>
<li>1 onion</li>
<li>2 bayleaf</li>
<li>3 cardamom pods</li>
<li>4 tbsp balti curry paste</li>
<li>85g raisins</li>
<li>2 teaspoon virgin olive oil</li>
<li>850ml chicken stock</li>
<li>30g coriander, ½ chopped, ½ leaves picked and 2 tbsp toasted flaked almonds, to serve</li>
<li>water as required</li>
</ul>

<h3> Instructions:</h3>
   
<ul>
  <li>Soak 300g basmati rice in warm water, then wash in cold until the water runs clear.</li>
  <li>Heat 25g butter in a saucepan and cook 1 finely sliced large onion with 1 bay leaf, 3 cardamom pods and 1 small cinnamon stick for 10 mins.</li>
  <li>Sprinkle in 1 tsp turmeric, then add 4 chicken breasts, cut into large chunks, and 4 tbsp curry paste. Cook until aromatic.</li>
  <li>Stir the rice into the pan with 85g raisins, then pour over 850ml chicken stock.</li>
  <li>Place a tight-fitting lid on the pan and bring to a hard boil, then lower the heat to a minimum and cook the rice for another 5 mins.</li>
  <li>Turn off the heat and leave for 10 mins. Stir well, mixing through 15g chopped coriander. To serve, scatter over the leaves of the remaining 15g coriander and 2 tbsp toasted almonds.</li>
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
export default Yakhnibiryani
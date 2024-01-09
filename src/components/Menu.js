import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function Menu() {
  return (
    <div className='Mnu'>
    
  <h3 className='menu'>Find Best Recipies For <i className='italic'>Healthy, Yummy, Srumptious Food</i></h3>

<hr/>

  <h2 className='menus'>Meal</h2>

  <div className='meal'>

  <Link to="/chaplikebab">
        <img
          className='ck'
          src="https://hamariweb.com/recipes/images/recipeimages/10136.jpg"
          alt="Chapli Kebab"
        />
      </Link>

     <Link to="/yakhnibiryani">
        <img
          className='yb'
          src="https://i.ytimg.com/vi/Y05X62tEpN4/maxresdefault.jpg"
          alt="Yakhni Biryani"
        />
      </Link>

      

      <Link to="/pizza">
        <img
          className='pza'
          src="https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8aGNlL2hmZC8xNTk2ODYyNTc4NjkxMC5qcGd8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA"
          alt="Yakhni Biryani"
        />
      </Link>
      
</div>



  <h2 className='menus'>Dessert</h2>
  
  <div className='dessert'>

  <Link to="/moltenlava">
        <img
          className='ml'
          src="https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg"
          alt="Molten Lava"
        />
      </Link> 
      
       
      <Link to="/bakhlava">
        <img
          className='bl'
          src="https://kfoods.com/images1/newrecipeicon/baklava-sweets_12382.jpg" 
          alt="Bakhlava"
        />
      </Link> 

      <Link to="/gulabjamun">
        <img
          className='gj'
          src="https://recipes.net/wp-content/uploads/2023/05/gulab-jamun-recipe_9fb159dc2674f395436a64666227c988.jpeg"
          alt="GulabJamun"
        />
      </Link> 
</div>

      <h2 className='menus'>Appetizers</h2>
      
      <div className='appetizer'>

      <Link to="/bruschetta">
        <img
          className='br'
          src="https://preppykitchen.com/wp-content/uploads/2023/04/Bruschetta-Recipe-Recipe-Card.jpg"
          alt="Bruschetta"
        />
      </Link> 

      <Link to="/capreseskewers">
        <img
          className='csk'
          src="https://www.missioneurovision.co.uk/wp-content/uploads/2023/03/italy-caprese-skewers-2.jpg.webp"
          alt="Caprese Skewers"
        />
      </Link> 

      <Link to="/clamdam">
        <img
          className='cld'
          src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/10/24/FNK_CLAM_DIP_H_f.jpg.rend.hgtvcom.791.633.suffix/1666710963839.jpeg"
          alt="Clam Dam"
        />
      </Link> 

      </div>
<br/>
</div>
  )
}

export default Menu
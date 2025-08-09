import { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/Context';
import './details.css'

function Details(){

    const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoritesList,
    handleAddToFavorite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();

      console.log(data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }

    getRecipeDetails();
  }, []);

    return(
        <>
        <div className='details-section'>
            <div className='details-subsection'>
                <div className='details-recipe-image'>
                    <img src={recipeDetailsData?.recipe?.image_url} alt="recipeDataImg" className='details-recipe-img'/>
                </div>
            </div>
            <div className='recipe-publisher'>
                <span className="recipe-publisher-text">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="recipe-publisher-title">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
            className="recipe-btn"
          >
            {favoritesList && favoritesList.length > 0 && favoritesList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </button>
        </div>
        <div>
          <span className="ingredients">
            Ingredients:
          </span>
          <ul className="ingredients-items">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient) => (
              <li>
                <span className="ingredients-quantity">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="ingredients-description">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        </div>
        </>
    )
}

export default Details
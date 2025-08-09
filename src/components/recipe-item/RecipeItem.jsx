import './recipeitem.css'
import { Link } from 'react-router-dom'

function RecipeItem({item}){

    return(
        <>
        <div className="recipe-header">
            <div className="recipe-subheader">
                <img src={item?.image_url} alt="recipe-item" className="recipe-img"/>
            </div>
            <span className='recipe-publisher'>
                {item?.publisher}
            </span>
            <h3 className='recipe-title'>{item?.title}</h3>
            <Link to={`/recipe-items/${item?.id}`} 
            className='recipe-item'>
            Recipe details
            </Link>
        </div>
        </>
    )
}

export default RecipeItem
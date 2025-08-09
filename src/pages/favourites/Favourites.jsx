import { useContext } from "react";
import RecipeItem from '../../components/recipe-item/RecipeItem'
import { GlobalContext } from "../../context/Context";
import './favourites.css'

function Favourites(){

     const { favoritesList } = useContext(GlobalContext);

    return(
        <>
         <div className="favouritelist">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="favouritelistsection">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
        </>
    )
}

export default Favourites
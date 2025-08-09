import { useContext } from "react"
import { GlobalContext } from "../../context/Context"
import RecipeItem from "../../components/recipe-item/RecipeItem"
import './home.css'

function Home(){

        const {recipeList, loading} = useContext(GlobalContext)

        if(loading) return(
            <div>
                Loading...Please wait!
            </div>
        )

    return(
        <>
        <div className="home-section">
            {recipeList && recipeList.length > 0 ? 
        recipeList.map((item) => <RecipeItem item={item}/>)
       : 
        <div>
          <p className="home-text">
            Nothing to show. Please search something
          </p>
        </div>
}
        </div>
        </>
    )
}

export default Home
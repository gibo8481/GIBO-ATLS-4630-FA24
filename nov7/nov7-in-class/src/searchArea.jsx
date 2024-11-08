import searchBar from "./searchBar"
import checkBox from "./checkBox"

export default function searchArea (){
    return(
        <div className="search-area">
            <searchBar/>
            <checkBox />
        </div>
    )
}
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


interface SearchBarPlaceholder {
    placeholder: string;
  }
const SearchBar:React.FC<SearchBarPlaceholder> =({placeholder})=>{
    return(
        <div>
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}

export default SearchBar
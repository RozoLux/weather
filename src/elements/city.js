import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';*/

const SearchBar = ({keyword, onChange}) => {
    
    return (   
        <div className="searchbar">
            <input 
            key="search-bar"
            value={keyword}
            placeholder={"Please enter location"}
            onChange={(e) => onChange(e.target.value)}
            />
        
                        
        </div>     
            
    )
}

export default SearchBar;



/*The component is defined using an arrow function syntax: const SearchBar = ({keyword, onChange}) => { ... }. This syntax allows the component to receive its props as arguments.

Inside the component function, a constant variable BarStyle is declared. It is an object that defines styles for the search bar. The styles include a width of "20rem", a transparent background, no border, and a padding of "0.5rem".

The component returns a JSX element, which represents the structure and content of the search bar. It consists of a <div> wrapper and an <input> element.

The <input> element has several attributes:

style={BarStyle}: This assigns the BarStyle object to the style attribute of the input element, applying the defined styles to the search bar.
key="search-bar": This sets the key attribute of the input element to "search-bar". The key attribute is used for efficient updating of components in a list.
value={keyword}: This sets the value attribute of the input element to the value of the keyword prop. It allows the input field to display the current value of the keyword.
placeholder={"Please enter location"}: This sets the placeholder attribute of the input element to the specified text. The placeholder text appears in the input field when it is empty.
onChange={(e) => onChange(e.target.value)}: This sets the onChange event handler for the input element. When the user types or changes the input value, the onChange function (provided as a prop) is called with the new value as an argument.
The JSX code is wrapped in a <div> element for grouping and rendering purposes.

In summary, this component renders a search bar with specified styles and functionality. The keyword prop represents the current value of the search bar, and the onChange prop is a function that gets called when the input value changes, passing the new value as an argument.*/
const Select = ({selectSortValue, sortVal}) => {
    return(
        <select id="selectSort" onChange={e => selectSortValue(e.target.value)} value={sortVal}>
            <option value="default">Default</option>
            <option value="alphabetic">Alphabetic (A-Z)</option>
            <option value="releaseDate">Release Date (new-old)</option>
            <option value="rating">Rating (high-low)</option>
          </select>
    );
};
export default Select;
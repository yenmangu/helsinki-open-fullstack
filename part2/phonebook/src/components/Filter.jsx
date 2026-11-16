const Filter = ({ searchValue, onSearchChange }) => {
	return (
		<div>
			Search Phonebook
			<input type="search" onChange={onSearchChange} value={searchValue} />
		</div>
	);
};

export default Filter;

const Filter = ({ searchValue, onSearchChange }) => {
	const handleSearchChange = event => {
		const valueToSet = event.target.value;
		onSearchChange(valueToSet);
	};

	return (
		<div>
			Search Phonebook
			<input type="search" onChange={handleSearchChange} value={searchValue} />
		</div>
	);
};

export default Filter;

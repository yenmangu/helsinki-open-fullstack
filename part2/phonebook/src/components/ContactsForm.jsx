const ContactForm = ({
	newContact,
	onNameChange,
	onNumberChange,
	onSubmit
}) => {
	const handleNameChange = event => {
		const name = event.target.value;
		onNameChange(name);
	};

	const handleNumberChange = event => {
		const number = event.target.value;
		onNumberChange(number);
	};

	const handleSubmit = event => {
		event.preventDefault();
		onSubmit();
	};

	const { name, number } = newContact;
	return (
		<form onSubmit={handleSubmit}>
			<div>
				name:
				<input type="text" value={name} onChange={handleNameChange} />
			</div>
			<div>
				number:
				<input type="tel" value={number} onChange={handleNumberChange} />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
};

export default ContactForm;

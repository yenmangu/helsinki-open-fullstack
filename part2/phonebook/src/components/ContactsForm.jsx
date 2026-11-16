const ContactForm = ({
	newContact,
	onNameChange,
	onNumberChange,
	onSubmit
}) => {
	const { name, number } = newContact;
	return (
		<form onSubmit={onSubmit}>
			<div>
				name:
				<input type="text" value={name} onChange={onNameChange} />
			</div>
			<div>
				number:
				<input type="tel" value={number} onChange={onNumberChange} />
			</div>
			<div>
				<button type="submit">Add</button>
			</div>
		</form>
	);
};

export default ContactForm;

const Contact = ({ name, number }) => {
	return (
		<p style={{ marginBlock: '0' }}>
			<span>{name}</span>
			&nbsp;
			<span>{number}</span>
		</p>
	);
};

const Contacts = ({ contacts }) => {
	return (
		<>
			<h2>Numbers</h2>
			{contacts.map(person => (
				<Contact key={person.id} name={person.name} number={person.number} />
			))}
		</>
	);
};

export default Contacts;

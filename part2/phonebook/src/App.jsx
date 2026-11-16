import { useState } from 'react';
import Filter from './components/Filter.jsx';
import ContactForm from './components/ContactsForm.jsx';
import Contacts from './components/Contacts.jsx';
const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
	]);
	const [newContact, setNewContact] = useState({
		name: '',
		number: ''
	});

	const [searchValue, setSearchValue] = useState('');

	const addPerson = () => {
		const contactObject = {
			name: newContact.name,
			number: newContact.number,
			id: persons.length + 1
		};

		if (nameAlreadyExists(newContact.name)) {
			alert(`${newContact.name} already in phonebook`);
			return;
		}

		setPersons(previous => previous.concat(contactObject));
		setNewContact({ name: '', number: '' });
	};

	const handleNameChange = name => {
		setNewContact(previousContact => ({
			...previousContact,
			name
		}));
	};

	const handleNumberChange = number => {
		setNewContact(previousContact => ({
			...previousContact,
			number
		}));
	};

	const nameAlreadyExists = newName =>
		persons.some(person => {
			return person.name === newName;
		});

	const searchTerm = searchValue.toLowerCase().trim();

	const filteredContacts = persons.filter(person => {
		const nameMatches = person.name.toLowerCase().trim().includes(searchTerm);
		const numberMatches = person.number.includes(searchTerm);
		return nameMatches || numberMatches;
	});

	return (
		<div>
			<h1>Phonebook</h1>
			<Filter searchValue={searchValue} onSearchChange={setSearchValue} />
			<h2>Add New Contact</h2>
			<ContactForm
				newContact={newContact}
				onNameChange={handleNameChange}
				onNumberChange={handleNumberChange}
				onSubmit={addPerson}
			/>
			<Contacts contacts={filteredContacts} />
		</div>
	);
};

export default App;

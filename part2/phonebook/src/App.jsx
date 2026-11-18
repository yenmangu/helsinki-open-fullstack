import { useEffect, useState } from 'react';
import Filter from './components/Filter.jsx';
import ContactForm from './components/ContactsForm.jsx';
import Contacts from './components/Contacts.jsx';
import axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newContact, setNewContact] = useState({
		name: '',
		number: ''
	});

	const hook = () => {
		console.log('effect');

		axios.get('http://localhost:3001/persons').then(response => {
			console.log('promise fullfilled');

			setPersons(response.data);
		});
	};

	useEffect(hook, []);
	console.log('render', persons.length, 'persons');

	const [searchValue, setSearchValue] = useState('');

	const handleSearchChange = event => {
		const searchTerm = event.target.value;
		setSearchValue(searchTerm);
	};

	const addPerson = event => {
		event.preventDefault();
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

	const handleNameChange = event => {
		const name = event.target.value;
		setNewContact(previousContact => ({
			...previousContact,
			name
		}));
	};

	const handleNumberChange = event => {
		const number = event.target.value;
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
			<Filter searchValue={searchValue} onSearchChange={handleSearchChange} />
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

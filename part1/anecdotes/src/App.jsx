import { useState } from 'react';

const Anecdote = ({ text, votes }) => {
	return (
		<>
			<p>{text}</p>
			<p>has {votes} votes</p>
		</>
	);
};

const App = () => {
	const anecdotes = [
		'If it hurts, do it more often.',
		'Adding manpower to a late software project makes it later!',
		'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
		'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
		'Premature optimization is the root of all evil.',
		'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
		'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
		'The only way to go fast, is to go well.'
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const randomNumInRange = () => {
		const max = anecdotes.length;
		const min = 0;
		return Math.floor(Math.random() * (max - min));
	};

	const handleClick = () => {
		const anecdoteIndex = randomNumInRange();
		setCurrentIndex(anecdoteIndex);
	};

	const emptyVoteArray = Array(anecdotes.length).fill(0);

	const [voteArray, castVote] = useState(emptyVoteArray);

	const incrementVote = (prevVotes, index) => {
		const updatedVotes = [...prevVotes];
		updatedVotes[index] += 1;
		return updatedVotes;
	};

	const handleVoteCast = () => {
		castVote(previousVotes => incrementVote(previousVotes, currentIndex));
	};

	const getAnecdoteValues = id => {
		return {
			anecdote: anecdotes[id],
			votes: voteArray[id]
		};
	};

	const getMostVotedAnecdote = () => {
		const mostVotedId = voteArray.reduce(
			(prev, curr, currIndex, arr) => (curr > arr[prev] ? currIndex : prev),
			0
		);
		return getAnecdoteValues(mostVotedId);
	};

	const currentAnecdote = getAnecdoteValues(currentIndex);
	const mostVotedAnecdote = getMostVotedAnecdote();

	return (
		<div>
			<h2>Anecdote of the day</h2>
			<Anecdote
				text={currentAnecdote.anecdote}
				votes={currentAnecdote.votes}
			></Anecdote>
			<button onClick={handleVoteCast}>Vote</button>
			<button onClick={handleClick}>Randomize</button>
			<h2>Anecdote with the most votes</h2>
			<Anecdote
				text={mostVotedAnecdote.anecdote}
				votes={mostVotedAnecdote.votes}
			/>
		</div>
	);
};

export default App;

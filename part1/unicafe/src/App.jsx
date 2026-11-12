import { useState } from 'react';

const Statistics = ({ good, neutral, bad, all }) => {
	const voteMap = new Map([
		[1, good],
		[0, neutral],
		[-1, bad]
	]);

	/**
	 *
	 * @param {number} vote
	 * @returns
	 */
	const getTotalValues = vote => {
		return voteMap.get(vote) * vote;
	};

	const getAvg = () => {
		const voteArray = [];
		const keys = voteMap.keys();
		for (const key of keys) {
			voteArray.push(getTotalValues(key));
		}
		const sum = voteArray.reduce((prev, curr) => prev + curr, 0);
		return sum / all || 0;
	};

	const getPositive = () => (100 * good) / all || 0;
	return (
		<>
			{all > 0 ? (
				<table>
					<tbody>
						<TableRow text="good" value={good} />
						<TableRow text="neutral" value={neutral} />
						<TableRow text="bad" value={bad} />
						<TableRow text="all" value={all} />
						<TableRow text="average" value={getAvg().toFixed(1)} />
						<TableRow
							text="positive"
							value={getPositive().toFixed(1)}
							usePct={true}
						/>
					</tbody>
				</table>
			) : (
				<p>No feedback given</p>
			)}
		</>
	);
};

const TableRow = ({ text, value, usePct = false }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
			<td>{usePct ? '%' : ''}</td>
		</tr>
	);
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [allVotes, setAll] = useState(0);

	const castVote = voteValue => () => {
		console.log('Casting vote with: ', voteValue);
		console.log(typeof voteValue);
		setAll(n => n + 1);

		if (voteValue === 1) {
			setGood(n => n + 1);
		} else if (voteValue === 0) {
			// neutral path
			setNeutral(n => n + 1);
		} else if (voteValue === -1) {
			// bad path
			setBad(n => n + 1);
		}
	};

	return (
		//
		<div>
			<h1>give feedback</h1>
			<button onClick={castVote(1)}>good</button>
			<button onClick={castVote(0)}>neutral</button>
			<button onClick={castVote(-1)}>bad</button>
			<h1>Statistics</h1>
			<Statistics good={good} neutral={neutral} bad={bad} all={allVotes} />
		</div>
	);
};

export default App;

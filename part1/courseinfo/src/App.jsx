const Header = props => {
	const course = props.course;
	return <h1>{course}</h1>;
};

const Part = props => {
	const { part, exercises } = props.partObj;
	return (
		<p>
			{part} {exercises}
		</p>
	);
};

const Content = props => {
	const parts = props.parts;
	return parts.map(partObj => <Part key={partObj.id} partObj={partObj} />);
};

const Total = props => {
	const total = props.total;

	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = 'Half Stack application development';

	const part1 = 'Fundamentals of React';
	const exercises1 = 10;
	const part2 = 'Using props to pass data';
	const exercises2 = 7;
	const part3 = 'State of a component';
	const exercises3 = 14;

	const part1Obj = { id: 0, part: part1, exercises: exercises1 };
	const part2Obj = { id: 1, part: part2, exercises: exercises2 };
	const part3Obj = { id: 2, part: part3, exercises: exercises3 };

	const parts = [part1Obj, part2Obj, part3Obj];

	const total = parts.reduce((acc, curr) => {
		return acc + curr.exercises;
	}, 0);

	console.log('Total: ', total);

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />

			<Total total={total} />
		</div>
	);
};

export default App;

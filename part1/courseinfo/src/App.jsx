const Header = props => {
	console.log('props: ', props);
	const course = props.course;
	return <h1>{course}</h1>;
};

const Part = props => {
	const { name, exercises } = props.partObj;
	return (
		<p>
			{name} {exercises}
		</p>
	);
};

const Content = props => {
	const parts = props.parts;
	return parts.map(partObj => {
		return <Part key={partObj.name} partObj={partObj} />;
	});
};

const Total = props => {
	const parts = props.parts;
	const total = parts.reduce((prev, curr) => {
		return prev + curr.exercises;
	}, 0);

	return <p>Number of exercises {total}</p>;
};

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />

			<Total parts={course.parts} />
		</div>
	);
};

export default App;

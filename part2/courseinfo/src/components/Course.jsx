const Header = ({ course }) => {
	return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
	return (
		<p>
			{name} {exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return parts.map(part => {
		return <Part key={part.id} name={part.name} exercises={part.exercises} />;
	});
};

const Total = ({ parts }) => {
	const total = parts.reduce((prev, curr) => {
		return prev + curr.exercises;
	}, 0);

	return (
		<p>
			<strong>total of {total} exercises</strong>
		</p>
	);
};

const Course = ({ course }) => {
	return (
		<>
			<Header course={course.name} />
			<Content parts={course.parts} />

			<Total parts={course.parts} />
		</>
	);
};

export default Course;

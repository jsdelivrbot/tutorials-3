-- Relies on student data

-- Print name, title, grade
SELECT first_name, title, grade
FROM students
INNER JOIN papers ON students.id=papers.student_id
ORDER BY first_name;

-- Print name, title, grade, including those without papers
SELECT first_name, title, grade FROM students
LEFT JOIN papers ON students.id=papers.student_id;

-- Same, but give default values for the null
SELECT
	first_name,
	IFNULL(title, 'MISSING') AS title,
	IFNULL(grade, 0) AS grade
FROM students
LEFT JOIN papers ON students.id=papers.student_id;

-- Print student name and their grade avg
SELECT
	first_name,
	IFNULL(AVG(grade), 0) AS average
FROM students
LEFT JOIN papers ON students.id=papers.student_id
GROUP BY first_name
ORDER BY average DESC;

-- Print name and grade, as well as passing status (75 or higher)
SELECT
	first_name,
	IFNULL(AVG(grade), 0) AS average,
	CASE WHEN AVG(grade) >= 75 THEN 'PASSING' ELSE 'FAILING' END AS passing_status
FROM students
LEFT JOIN papers ON students.id=papers.student_id
GROUP BY first_name
ORDER BY average DESC;

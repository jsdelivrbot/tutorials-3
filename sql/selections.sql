-- Select all story collections
SELECT title FROM books WHERE title LIKE '%stories%';

-- Longest books
SELECT title, pages FROM books ORDER BY pages DESC LIMIT 1;

-- Summary for 3 most recent books
SELECT CONCAT(title, ' - ', released_year) AS summary FROM books ORDER BY released_year DESC LIMIT 3;

-- Author lname has a space
SELECT title, author_lname FROM books WHERE author_lname LIKE '% %';

-- 3 Lowest stock
SELECT title, released_year, stock_quantity FROM books ORDER BY stock_quantity, title LIMIT 3;

-- Title and lname, sorted by lname then title
SELECT title, author_lname FROM books ORDER BY author_lname, title;

-- YELL THE AUTHOR sorted by last name
SELECT UPPER(
	CONCAT(
		'my favorite author is ',
		author_fname,
		' ',
		author_lname,
		'!')
	) AS yell
FROM books ORDER BY author_lname;

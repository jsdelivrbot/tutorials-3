-- All books written before 1980
SELECT * FROM books WHERE released_year < 1980;

-- Select All Books by Eggers or Chabon
SELECT * FROM books WHERE author_lname IN ('Eggers', 'Chabon')
ORDER BY author_lname;

-- Books by Lahiri, after 2000
SELECT * FROM books WHERE author_lname = 'lahiri' AND released_year > 2000;

-- Page length between 100 and 200
SELECT * FROM books WHERE pages BETWEEN 100 AND 200;

-- Last name begins with C or S
SELECT * FROM books WHERE author_lname LIKE 'C%' OR author_lname LIKE 'S%'
ORDER BY author_lname;

-- Smaller version of above
SELECT * FROM books WHERE SUBSTR(author_lname,1,1) IN ('C', 'S');

-- Genre maker
-- title has 'stories' -> short stories
-- Just Kids or A Heartbreaking Work of Staggering Genius -> memoir
-- else -> novel
SELECT
	title,
	author_lname,
	CASE
 		WHEN title LIKE '%stories%' THEN 'Short Stories'
		WHEN title = 'Just Kids' OR title = 'A Heartbreaking Work of Staggering Genius' THEN 'Memoir'
		ELSE 'Novel'
	END AS Genre
FROM books;

-- Author, and count of how many books the author wrote
SELECT author_fname, author_lname,
	CASE
		WHEN COUNT(*) > 1 THEN CONCAT(COUNT(*), ' books')
		ELSE '1 book'
	END AS book_count
FROM books
GROUP BY author_lname, author_fname
ORDER BY author_lname

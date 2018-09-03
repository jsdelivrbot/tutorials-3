-- relies on book data

-- Print # of books in DB
SELECT COUNT(*) FROM books;

-- Print out how many books were released each year
SELECT
  released_year,
  COUNT(*)
FROM books
GROUP BY released_year
ORDER BY released_year DESC;

-- Print out total number of books in stock
SELECT SUM(stock_quantity) AS 'total stock' FROM books;

-- Average release year for each author
SELECT
	CONCAT(author_fname, ' ', author_lname) AS author,
	AVG(released_year) AS avg_release_year
FROM books
GROUP BY author_lname, author_fname;

-- Full name of the author who wrote the longest book
-- Bad Way:
SELECT CONCAT(author_fname, ' ', author_lname) AS author
FROM books
WHERE pages=(SELECT MAX(pages) FROM books);

-- Good way:
SELECT CONCAT(author_fname, ' ', author_lname) AS author
FROM books
ORDER BY pages DESC LIMIT 1;

-- Year, books released that year, avg pages for books that year
SELECT
	released_year AS year,
	COUNT(*) AS '# books',
	AVG(pages) AS 'avg pages'
FROM books
GROUP BY released_year
ORDER BY released_year;

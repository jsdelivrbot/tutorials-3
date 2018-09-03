-- FULL NAME
SELECT
	UPPER(
		CONCAT(author_fname, ' ', author_lname)
	)
	AS 'full name in caps'
FROM books;

-- Blurb
SELECT
	CONCAT(title, ' was released in ', released_year)
	AS blurb
FROM books;

-- Character length ength of book titles
SELECT
	title, CHAR_LENGTH(title) AS 'character count'
FROM books;

-- Short title, Last name first name, quantity
SELECT
	CONCAT(SUBSTR(title, 1, 10), '...') AS 'short title',
	CONCAT(author_lname, ',', author_fname) AS author,
	CONCAT(stock_quantity, ' in stock') AS quantity
FROM books;

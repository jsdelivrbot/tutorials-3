-- Relies on book reviews

-- Gets series and each rating from a review for it
SELECT title, rating FROM series
INNER JOIN reviews ON series.id = reviews.series_id;

-- Title and average rating
SELECT
	title,
	AVG(rating) AS avg_rating
FROM series
INNER JOIN reviews
	ON series.id = reviews.series_id
GROUP BY series.id
ORDER BY avg_rating;

-- Reviewer first and last, as well as any ratings they've given
SELECT first_name, last_name, rating
FROM reviewers
INNER JOIN reviews ON reviewers.id = reviews.reviewer_id;

-- List all unreviewed series's
SELECT title AS unreviewed_series
FROM series
LEFT JOIN reviews
	ON series.id = reviews.series_id
WHERE rating IS NULL;

-- Get avg rating for each genre
SELECT
	genre,
	Round(AVG(rating), 2) AS avg_rating
FROM series
INNER JOIN reviews
	ON series.id = reviews.series_id
GROUP BY genre
ORDER BY avg_rating;

-- GET names, and stats (count, min, max, avg, status) for their reviews
SELECT
	first_name,
	last_name,
	COUNT(rating) AS count,
	IFNULL(MIN(rating), 0.0) AS min,
	IFNULL(MAX(rating), 0.0) AS max,
	IFNULL(AVG(rating), 0.0000) as avg,
	IF(COUNT(rating) = 0, 'INACTIVE', 'ACTIVE') AS STATUS
FROM reviewers
LEFT JOIN reviews
	ON reviewers.id = reviews.reviewer_id
GROUP BY reviewers.id;

-- Title, rating, reviewer
SELECT
	title,
	rating,
	CONCAT(first_name, ' ', last_name) as reviewer
FROM reviewers
INNER JOIN reviews
	ON reviewers.id = reviews.reviewer_id
INNER JOIN series
	ON series.id = reviews.series_id
ORDER BY title;

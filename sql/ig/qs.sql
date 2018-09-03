-- Oldest Users
SELECT *
FROM users
ORDER BY created_at
LIMIT 5;

-- Which day of the week do most users register on
SELECT
	DAYNAME(created_at) AS day,
	COUNT(*) AS total_signups
FROM users
GROUP BY day
ORDER BY total_signups DESC;

-- Users who have never posted a photo
SELECT username
FROM users
LEFT JOIN photos
	ON users.id = photos.user_id
	WHERE photos.id IS NULL;

-- Most liked photo and user
SELECT
	username,
	photos.id AS most_liked_photo_id,
	photos.image_url,
	COUNT(*) as total_likes
FROM photos
INNER JOIN likes
	ON likes.photo_id = photos.id
INNER JOIN users
	ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY total_likes DESC
LIMIT 1;

-- Avg photos per user
SELECT
(SELECT COUNT(*) FROM photos) /
(SELECT COUNT(*) FROM users) AS avg_posts_per_user;

-- 5 Most used hashtags
SELECT
	tag_name,
	COUNT(*) as total_uses
FROM tags
JOIN photo_tags
	ON photo_tags.tag_id = tags.id
GROUP BY tags.id
ORDER BY total_uses DESC
LIMIT 5;

-- 5 most used hashtags alternate
SELECT
	tags.tag_name,
	COUNT(*) as total
FROM photo_tags
JOIN tags
	ON photo_tags.tag_id = tags.id
GROUP BY tags.id
ORDER BY total DESC
LIMIT 5;

-- Find users who have liked every photo
SELECT
	username,
	COUNT(*) AS num_likes
FROM users
INNER JOIN likes
	ON users.id = likes.user_id
GROUP BY likes.user_id
HAVING num_likes = (SELECT COUNT(*) FROM photos);

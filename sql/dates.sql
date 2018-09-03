-- print current time and date
SELECT CURDATE() AS date, CURTIME() AS time;

-- Print day of the week (number and name)
SELECT DAYOFWEEK(NOW()) as number, DATE_FORMAT(NOW(), '%W') as name;

-- Current time in MM/DD/YYYY
SELECT DATE_FORMAT(NOW(), '%m/%d/%Y');

-- Current time as: January Xnd at X:XX
SELECT DATE_FORMAT(NOW(), '%M %D at %l:%i');

-- Create tweets table with:
-- tweet content
-- username
-- time created
CREATE TABLE tweets(
	content VARCHAR(244),
	username VARCHAR(16),
	time_created DATETIME DEFAULT NOW()
);

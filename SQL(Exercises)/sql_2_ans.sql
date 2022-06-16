Q.1 : Find the movie with a row id of 6.
Ans.   select title from movies where id=6

Q.2 : Find the movies released in the years between 2000 and 2010
Ans :  select title from movies where year between 2000 and 2010

Q.3 :  Find the movies not released in the years between 2000 and 2010
Ans.   select title from movies where year not between 2000 and 2010

Q.4 : Find the first 5 Pixar movies and their release year
Ans. : select title,year from movies limit 5

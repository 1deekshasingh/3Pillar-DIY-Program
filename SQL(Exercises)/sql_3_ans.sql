Q.1:  Find all the Toy Story movies
Ans.  select * from movies where title like 'Toy Story%'

Q.2 : Find all the movies directed by John Lasseter
Ans. :  select * from movies where director = 'John Lasseter'

Q.3 : Find all the movies (and director) not directed by John Lasseter
Ans. : select * from movies where director<>'John Lasseter'

Q.4 : Find all the WALL-* movies
Ans. : select * from movies where title like 'WALL%'

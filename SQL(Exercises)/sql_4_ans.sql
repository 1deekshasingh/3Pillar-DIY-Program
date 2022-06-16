Q.1 :  List all directors of Pixar movies (alphabetically), without duplicates
Ans :  select distinct director from movies order by director asc

Q.2 : List the last four Pixar movies released (ordered from most recent to least)
Ans :  select * from movies order by year desc limit 4 

Q.3 :  List the first five Pixar movies sorted alphabetically
Ans:  select * from movies order by title limit 5

Q.4 : List the next five Pixar movies sorted alphabetically
Ans:  select * from movies order by title limit 5 offset 5

Q.1 :  Find the domestic and international sales for each movie 
Ans :  select title,domestic_sales,international_sales from movies inner join boxoffice on movies.id = boxoffice.movie_id


Q.2 : Show the sales numbers for each movie that did better internationally rather than domestically
Ans.  
select title, domestic_sales, international_sales
FROM movies
inner join boxoffice
    on movies.id = boxoffice.movie_id
where international_sales > domestic_sales;


Q.3 :  List all the movies by their ratings in descending order.
Ans.  :  select title from movies inner join boxoffice on movies.id=boxoffice.movie_id
order by rating desc

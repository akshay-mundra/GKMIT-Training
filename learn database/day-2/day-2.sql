

-- get palylist name and track name associated to that playlist (3 table operation)

SELECT
	"Playlist"."Name" AS "Playlist", 
  "Track"."Name" AS "Track"
FROM "Playlist"
INNER JOIN "PlaylistTrack" 
ON "Playlist"."PlaylistId" = "PlaylistTrack"."PlaylistId"
INNER JOIN "Track"
ON "Track"."TrackId" = "PlaylistTrack"."TrackId";



-- count number of tracks for each playlist

SELECT 
	"Playlist"."Name" as "Playlist Name",
  COUNT("PlaylistTrack"."TrackId") as "Track Count"
FROM "Playlist"
INNER JOIN "PlaylistTrack"
	ON	"Playlist"."PlaylistId" = "PlaylistTrack"."PlaylistId"
GROUP BY "Playlist"."Name"
ORDER BY "Track Count" DESC;


-- using table alias name

SELECT 
	p."Name" as "Playlist Name",
  COUNT(pt."TrackId") as "Track Count"
FROM "Playlist" as p
INNER JOIN "PlaylistTrack" as pt
	ON	p."PlaylistId" = pt."PlaylistId"
GROUP BY p."Name"
ORDER BY "Track Count" DESC;


-- using having with agreegate functions
SELECT 
	p."Name" as "Playlist Name",
  COUNT(pt."TrackId") as "Track Count"
FROM "Playlist" as p
INNER JOIN "PlaylistTrack" as pt
	ON	p."PlaylistId" = pt."PlaylistId"
GROUP BY p."Name"
HAVING (COUNT(pt."TrackId") > 100)
ORDER BY "Track Count" DESC;


--- sub query 

SELECT 
	"Name",
  (
		SELECT 
    	COUNT("TrackId")
    FROM
    	"PlaylistTrack" AS p
    WHERE p."PlaylistId" = "Playlist"."PlaylistId"
  ) AS "Play Count"
FROM "Playlist"
ORDER BY "Play Count" desc;





-- question from pgexercises.com 

-- TOPIC : inner joins and sub query 

-- 1.
select 
	bks.starttime 
from cd.bookings bks
where bks.memid = (
	select 
  		mem.memid
  	from cd.members mem
  	where mem.firstname='David' and mem.surname='Farrell'
);

-- using inner joins 
select 
	bks.starttime
from cd.bookings as bks
inner join cd.members as mem
on bks.memid = mem.memid and mem.firstname='David' and mem.surname='Farrell';



-- 2.

-- using inner join 

select
	bks.starttime as start,
	fac.name as name
from cd.facilities as fac
inner join cd.bookings as bks
on fac.facid=bks.facid
where 
	fac.name in ('Tennis Court 1', 'Tennis Court 2')
	and 
	bks.starttime >= '2012-09-21' 
	and
	bks.starttime < '2012-09-22'
order by start;

-- using sub query
select 
	bks.starttime as start,
	n.name as name
from cd.bookings as bks
inner join (
		select 
	  		fac.facid,
	  		fac.name
	  	from cd.facilities as fac
		where fac.name in ('Tennis Court 1', 'Tennis Court 2')
	) n on n.facid = bks.facid
	where
	bks.starttime>='2012-09-21'
	and
	bks.starttime<'2012-09-22'
order by start;




-- 3.

-- using inner joins 
select distinct
	mem.firstname as firstname,
	mem.surname as surname
from cd.members as m
join cd.members as mem
on m.recommendedby=mem.memid
order by surname, firstname;


-- using sub query

select distinct
	rec.firstname,
	rec.surname
from cd.members as mem
inner join (
  	select 
  		cd.members.firstname,
  		cd.members.surname,
  		cd.members.memid
  	from cd.members
  ) as rec
 on rec.memid = mem.recommendedby
 order by surname, firstname;



-- 4.


-- using inner joins 
select 
	mem.firstname as memfname,
	mem.surname as memsname,
	rec.firstname as recfname,
	rec.surname as recsname
	
from cd.members as mem
left join cd.members as rec
on rec.memid = mem.recommendedby
order by memsname, memfname;


-- using sub query




















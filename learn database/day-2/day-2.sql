

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




























// task - 1-10-24


// Q1. Write a query to find all movies that share at least one cast member with "Blacksmith Scene."

const cast =  db.movies.findOne({ title: "Blacksmith Scene" }).cast
db.movies.find({cast: {$in: cast}})



// Q2. Write a query to find the top 5 movies with the highest IMDb ratings that were released before the year 1900.

db.movies.aggregate([
		{
			$match: {'year': {$lt: 1900}}
		},
		{
			$sort: {'imdb.rating': -1}
		},
		{
			$limit: 5
		}
	])


// Q3. Write a query to find all movies directed by "William K.L. Dickson." Return the titles, release years, and IMDb ratings of the movies.

db.movies.aggregate([
		{
			$match:  {directors: "William K.L. Dickson"}
		},
		{
			$project: {
				title: 1,
				year: 1,
				imdb: 1
			}
		}
	])


// Q4. Write an aggregation query to find the top 3 directors who have directed the most movies in the "Short" genre. Return the directors' names and the number of movies.

db.movies.aggregate([
		{
			$match: {
				genres: "Short"
			}
		},
		{
			$unwind: "$directors"
		},
		{
			$group: {
				_id: "$directors",
				count: {$count: {}}
			}
		},
		{
			$sort: {count: -1}
		},
		{
			$limit: 3
		}
	])


// Q5. Write a query to find movies where the number of reviews in `tomatoes.viewer.numReviews` has increased by at least 10% over the past year. Return the titles and the number of reviews.

// Data is insufficient to solve this problem 


// Q6. Write an aggregation query to find the pair of actors who have appeared together in the most number of movies. Return their names and the number of movies they've co-starred in.

// sol - 1 --> group by cast and creating array of movies for each cast which could be further processed in code level to solve this problem 
db.movies.aggregate([
		{
			$unwind: "$cast"
		},
		{
			$group: {
				_id: "$cast",
				movies: {$push: "$title"}
			}
		},

	])      



// full solution in the query only. 

db.movies.aggregate([    
    {
	    $match: {
	      "cast": {
	      $exists: true
	    }

    }
    },

    {
      $project: {
      	// this project is creating castPairs, its a 2d array that contains array which contains the pairs. ex [[a,b], [a,c], [b,c]]
        castPairs: {
          $reduce: {
            input: { $range: [0, { $subtract: [{ $size: "$cast" }, 1] }] },
            initialValue: [],
            in: {
              $concatArrays: [
                "$$value",
                {
                  $map: {
                    input: { $slice: ["$cast", { $add: ["$$this", 1] }, { $size: "$cast" }] },
                    as: "pairActor",
                    in: [{ $arrayElemAt: ["$cast", "$$this"] }, "$$pairActor"]
                  }
                }
              ]
            }
          }
        }
      }
    },
    // unwind the 2d array to single array creating a doc for each pair
    {
      $unwind: "$castPairs"
    },
    // sort the pairs for correct grouping
    {
      $project: {
        actorPair: {
          $let: {
            vars: {
              first: { $arrayElemAt: ["$castPairs", 0] },
              second: { $arrayElemAt: ["$castPairs", 1] }
            },
            in: {
              $cond: { if: { $lt: ["$$first", "$$second"] }, then: ["$$first", "$$second"], else: ["$$second", "$$first"] }
            }
          }
        }
      }
    },
    // group by pair to count all the movies for that pair.
    {
      $group: {
        _id: "$actorPair",
        count: { $sum: 1 }
      }
    },
    {
      $sort: { count: -1 }
    }
  ])

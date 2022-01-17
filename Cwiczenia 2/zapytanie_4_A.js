db.people.aggregate(
    [
        {$match:{}},
        {
          $group:{ _id: "$nationality",
          avgBmi : {$avg : {$divide: [{$toDecimal: "$weight"},{$pow : [{$toDecimal:"$height"},2]}]}},
          minBmi : {$min : {$divide: [{$toDecimal: "$weight"},{$pow : [{$toDecimal:"$height"},2]}]}},
          maxBmi : {$max : {$divide: [{$toDecimal: "$weight"},{$pow : [{$toDecimal:"$height"},2]}]}}
          }

        }
    ]
)

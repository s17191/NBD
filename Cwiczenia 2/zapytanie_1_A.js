db.people.aggregate(
    [
        {$match:{}},
        {
            $group:{ _id: "$sex",
            height: { $avg : {$toDecimal:"$height"}},
            weight: { $avg : {$toDecimal:"$weight"}}
            }
        }
    ]
)
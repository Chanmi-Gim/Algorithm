with FV AS (
    select FOOD_TYPE, MAX(FAVORITES) as MAX_FV
    from REST_INFO
    group by FOOD_TYPE
)

select fv.FOOD_TYPE, REST_ID, REST_NAME, fv.MAX_FV 
from FV fv
inner join REST_INFO ri
on fv.FOOD_TYPE = ri.FOOD_TYPE and fv.MAX_FV = ri.FAVORITES
order by FOOD_TYPE desc;

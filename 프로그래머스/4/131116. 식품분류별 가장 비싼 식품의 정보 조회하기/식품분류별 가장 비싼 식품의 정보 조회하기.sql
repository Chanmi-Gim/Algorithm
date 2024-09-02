with MP as (
    select CATEGORY, max(PRICE) as MAX_PRICE
    from FOOD_PRODUCT
    where CATEGORY in ('과자', '국', '김치', '식용유')
    group by CATEGORY
)

select MP.CATEGORY, MP.MAX_PRICE, FP.PRODUCT_NAME
from MP 
inner join FOOD_PRODUCT FP
on MP.CATEGORY = FP.CATEGORY and MP.MAX_PRICE = FP.PRICE
order by MAX_PRICE desc;

select p.PRODUCT_ID, p.PRODUCT_NAME, p.PRICE * SUM(o.AMOUNT)
from FOOD_ORDER o
left join FOOD_PRODUCT p
on o.PRODUCT_ID = p.PRODUCT_ID
where o.PRODUCE_DATE like('2022-05%')
group by o.PRODUCT_ID
order by p.PRICE * SUM(o.AMOUNT) desc, p.PRODUCT_ID asc;
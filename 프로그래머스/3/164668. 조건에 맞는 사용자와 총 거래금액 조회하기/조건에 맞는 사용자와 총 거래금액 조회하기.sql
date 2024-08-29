with pricesum as (
    select b.WRITER_ID, u.NICKNAME, SUM(b.price) as TOTAL_SALES
    from USED_GOODS_BOARD b
    left join USED_GOODS_USER u
    on b.WRITER_ID = u.USER_ID
    where b.STATUS = 'DONE'
    group by b.WRITER_ID having SUM(b.price) >= 700000
)
select *
from pricesum
order by TOTAL_SALES asc;
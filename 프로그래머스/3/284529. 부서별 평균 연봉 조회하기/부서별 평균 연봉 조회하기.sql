with av_sal as (
    select DEPT_ID, ROUND(AVG(SAL),0) as AVG_SAL
    from HR_EMPLOYEES
    group by DEPT_ID
)
select hd.DEPT_ID, hd.DEPT_NAME_EN, avs.AVG_SAL
from HR_DEPARTMENT hd
inner join av_sal avs
on hd.DEPT_ID = avs.DEPT_ID
order by avs.AVG_SAL desc;


select distinct d.ID, d.EMAIL, d.FIRST_NAME, d.LAST_NAME
from DEVELOPERS d
cross join SKILLCODES s
on d.SKILL_CODE & s.CODE
where CATEGORY = 'Front End'
order by ID;
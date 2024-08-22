select A.BOOK_ID, B.AUTHOR_NAME, DATE_FORMAT(A.PUBLISHED_DATE, "%Y-%m-%d") 
from BOOK A 
left join AUTHOR B 
on A.AUTHOR_ID = B.AUTHOR_ID
where A.CATEGORY = '경제'
order by A.PUBLISHED_DATE asc;
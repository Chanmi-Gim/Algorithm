with VALID_APPOINTMENT as (
    select a.APNT_NO, p.PT_NAME, p.PT_NO, a.MCDP_CD, a.APNT_YMD, a.MDDR_ID
    from APPOINTMENT a
    left join PATIENT p
    on a.PT_NO = p.PT_NO
    where a.APNT_YMD like('2022-04-13%') AND a.APNT_CNCL_YN = 'N' AND a.MCDP_CD = 'CS'
)
select a.APNT_NO, a.PT_NAME, a.PT_NO, a.MCDP_CD, d.DR_NAME, a.APNT_YMD
from VALID_APPOINTMENT a
left join DOCTOR d
on a.MDDR_ID = d.DR_ID
order by a.APNT_YMD asc;
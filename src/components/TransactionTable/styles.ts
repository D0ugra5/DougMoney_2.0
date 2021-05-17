import styled from "styled-components";

export const Container = styled.div`

margin-top:4rem;

table{
    width:100%;
    border-spacing:0 0.5rem;


    th{
        color: var(--text-body);
        font-weight:400;
        padding:1rem 2rem ;
        text-align:left;
        line-height:1.5rem
    }


    td{
        padding: 1rem 2rem;
        border:0;
        background:var(--shape);
        color:var(--text-body);
        border-radius:0.25rem;
   
   
   
         &:first-child{
              color:var(--text-title);
            }


                &.Entrada{
                 color:var(--green);
                }
             &.Saida{
             color:var(--red);
          }

      

    }



}

`


export const  BtnIconSearch = styled.button`

width:6.5rem;
margin-top:10px;
height:2rem;
border-radius:0.25rem;
margin-left:3rem;
background:#C8C8C8;
transition:background 0.2s;
transition: color 0.2s;
font-weight:400;

text-align:center;
border: none;
&:hover{
    background:var(--black);
    color:var(--shape);
}
/* background:var(--green); */

`


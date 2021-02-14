import styled from 'styled-components'

export const CanvasBack=styled.div`
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
canvas{
  position:absolute;
  display:block;
  top:50%;
  left:50%;
  height:100%;
  width:100%;
  transform:translate(-50%,-50%);
}
`
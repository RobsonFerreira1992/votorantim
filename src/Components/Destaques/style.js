import styled from "styled-components"
import arrowLeft from "../../imagens/seta-esquerda.svg"
import arrowRight from "../../imagens/seta-direita.svg"
export const StyleArrow = styled.div`
  .slick-arrow{
    display: none;
  }
.slick-prev,.slick-next{
  width: 30px;
  height: 30px;
}
.slick-prev::before{
  content: url(${arrowLeft});
  width: 30px;
  height: 30px;
  display: block
}
.slick-next::before{
  content: url(${arrowRight});
  width: 30px;
  height: 30px;
  display: block;
}
.slick-dots li.slick-active button:before {
    opacity: .75;
    color: blue;
}

`;
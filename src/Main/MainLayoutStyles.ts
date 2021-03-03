import styled from 'styled-components'

export const Main = styled.div`
  .LLLL {
    border: 1px solid;
    margin-top: 50px;
    justify-content: center;
    background-color: #94a2b3;
    align-items: center !important;
  }

  .placeholder {
    margin-top: 50px;
  }

  .text {
    background-color: #e57059;
    padding: 20px;
  }

  .ui.grid > .row > .column.image {
    padding-left: 0;
    padding-right: 0;
  }

  .triple {
    justify-content: center;
    align-items: center !important;
  }

  @media only screen and (max-width: 600px) {
    .ui.stackable.grid > .row > .column.image {
      padding-bottom: 0 !important;
      padding-left: 0 !important;
      padding-right: 0 !important;
      padding-top: 20px;
    }
  }
`

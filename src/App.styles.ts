import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
  margin: 0;
`

export const StyledButton = styled(IconButton)`
position: fixed
z-index: 100;
right: 20px;
top: 20px;

.drawer {
  width: 400px;
}

.button {
  border-radius: 10px;
  color: red;
}
`

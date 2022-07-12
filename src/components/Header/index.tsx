
import styled from "@emotion/styled";


const HeaderFrame = styled.div<{ showBackground: boolean }>`
display: grid;
grid-template-columns: 120px 1fr 120px;
align-items: center;
justify-content: space-between;
align-items: center;
flex-direction: row;
width: 100%;
top: 0;
position: relative;
padding: 1rem;
z-index: 21;
position: relative;
/* Background slide effect on scroll. */
background-image: ${({ theme }) => `linear-gradient(to bottom, transparent 50%, ${theme.bg0} 50% )}}`};
background-position: ${({ showBackground }) => (showBackground ? '0 -100%' : '0 0')};
background-size: 100% 200%;
box-shadow: 0px 0px 0px 1px ${({ theme, showBackground }) => (showBackground ? theme.bg2 : 'transparent;')};
transition: background-position 0.1s, box-shadow 0.1s;
background-blend-mode: hard-light;
${({ theme }) => theme.mediaWidth.upToLarge`
  grid-template-columns: 48px 1fr 1fr;
`};
${({ theme }) => theme.mediaWidth.upToMedium`
  padding:  1rem;
  grid-template-columns: 1fr 1fr;
`};
${({ theme }) => theme.mediaWidth.upToSmall`
  padding:  1rem;
  grid-template-columns: 36px 1fr;
`};
`

export default function Header() {

  return (
    
  )
}
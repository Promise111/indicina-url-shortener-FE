import { keyframes, styled } from "@mui/material/styles";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  minHeight: '200px',
});

const LoaderSpinner = styled('div')(({ theme }) => ({
  width: '48px',
  height: '48px',
  border: '5px solid #fff',
  borderBottomColor: 'rgb(13, 14, 13)',
  borderRadius: '50%',
  display: 'inline-block',
  boxSizing: 'border-box',
  animation: `${rotate} 1s linear infinite`,
  
  [theme.breakpoints.down('sm')]: {
    width: '36px',
    height: '36px',
    borderWidth: '4px',
  }
}));

export function Loader() {
  return (
    <LoaderContainer>
      <LoaderSpinner />
    </LoaderContainer>
  );
}
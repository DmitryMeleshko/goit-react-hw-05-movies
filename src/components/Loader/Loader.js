import { GridLoader } from 'react-spinners';

import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <GridLoader color="#000000" size="20px" />
    </Wrapper>
  );
}
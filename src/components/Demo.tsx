import React, { useState } from "react";
import styled from "styled-components";

import Button from "./Button";

const Demo: React.FunctionComponent = () => {
  const [myNum, setMyNum] = useState(0);
  return (
    <Wrapper>
      <PrettyText>{myNum}</PrettyText>
      <PrettyButton buttonType="primary" onClick={() => setMyNum(myNum + 1)}>
        CLICK ME FOR +1
      </PrettyButton>
      <Button buttonType="secondary" onClick={() => setMyNum(myNum - 1)}>
        CLICK ME FOR -1
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PrettyText = styled.div(
  ({ theme }) => `
  color: ${theme.colors.body};
  font-size: ${theme.fontSizes.body};
`
);

const PrettyButton = styled(Button)(
  ({ theme }) => `
  margin: ${theme.spacings[0]} ${theme.spacings[3]};
`
);

export default Demo;

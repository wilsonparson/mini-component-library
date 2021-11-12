/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper value={value} style={STYLES_BY_SIZE[size]}>
      <BarWrapper>
        <Bar value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}</VisuallyHidden>
    </Wrapper>
  );
};

const STYLES_BY_SIZE = {
  small: {
    "--wrapper-border-radius": "4px",
    "--bar-height": "8px",
  },
  medium: {
    "--wrapper-border-radius": "4px",
    "--bar-height": "12px",
  },
  large: {
    "--wrapper-border-radius": "8px",
    "--bar-border-radius": "4px",
    "--bar-height": "16px",
    "--padding": "4px",
  },
};

const Wrapper = styled.div.attrs((props) => ({
  role: "progressbar",
  "aria-valuenow": props.value,
  "aria-valuemin": 0,
  "aria-valuemax": 100,
}))`
  width: 370px;
  background: ${COLORS.transparentGray15};
  border-radius: var(--wrapper-border-radius);
  overflow: hidden;
  padding: var(--padding);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Bar = styled.div`
  background: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: var(--bar-height);
`;

const BarWrapper = styled.div`
  border-radius: var(--bar-border-radius);
  overflow: hidden;
`;

export default ProgressBar;

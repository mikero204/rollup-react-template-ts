import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
type HoverImageProps = {
  src?: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
};

const DivContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: pink;
  .hello {
    color: red;
  }
`;

const AppContainer = styled.div`
  .hello {
    color: blue;
  }
`;

export default function Text({ src, alt, style, className }: HoverImageProps) {
  const [value, setValue] = useState(0);
  return (
    <div>
      {" "}
      <DivContainer>
        {dayjs().format("YYYY/MM/DD")}
        {value}
        <div className="test">
          <button onClick={() => setValue(value + 1)}>add</button>
        </div>
        <span className="hello">hello world</span>
      </DivContainer>
      <AppContainer>
        <span className="hello">hello world</span>
      </AppContainer>
    </div>
  );
}

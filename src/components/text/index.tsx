import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";
type TextProps = {
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

export default function Text(props: TextProps) {
  const [value, setValue] = useState(0);

  return (
    <DivContainer>
      {dayjs().format("YYYY/MM/DD")}
      {value}
      <div className="test">
        <button onClick={() => setValue(value + 1)}>add</button>
      </div>
      <span className="hello">hello world4</span>
    </DivContainer>
  );
}

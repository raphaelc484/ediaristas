import React from "react";
import {
  PageTitleContainer,
  PageTitleStyles,
  PageSubtitleStyles,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <>
      <PageTitleContainer>
        <PageTitleStyles>{props.title}</PageTitleStyles>
        <PageSubtitleStyles>{props.subtitle}</PageSubtitleStyles>
      </PageTitleContainer>
    </>
  );
};

export default PageTitle;

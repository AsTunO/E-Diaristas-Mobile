import React from 'react';
import {
    PageTitleContainer,
    PageTitleStyled,
    PageSubtitleStyled,
} from './PageTitle.style';

export interface PageTitleProps {
    title: string;
    subtitle?: string | JSX.Element;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
    return (
        <PageTitleContainer>
            <PageTitleStyled>{title}</PageTitleStyled>
            <PageSubtitleStyled>{subtitle}</PageSubtitleStyled>
        </PageTitleContainer>
    );
};

export default PageTitle;

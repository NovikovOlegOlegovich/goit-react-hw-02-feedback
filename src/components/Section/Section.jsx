import { SectionWrapper, Title, Wrapper } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionWrapper>
      <Title>{title}</Title>
      <Wrapper>{children} </Wrapper>
    </SectionWrapper>
  );
}

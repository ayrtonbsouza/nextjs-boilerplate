import { Wrapper, Logo, Title, Description, Illustration } from './styles';

const Main = ({
  title = 'React Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS and Styled Components boilerplate',
}) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um atómo e React Avançado escrito ao lado"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um desenvolvedor frente a uma tela com código"
    />
  </Wrapper>
);

export default Main;

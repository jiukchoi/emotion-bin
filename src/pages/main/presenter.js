import { Bottom, Title, Button, Field, Header, Word, Wrapper } from "./styles";

const MainPageUI = () => {
  return (
    <Wrapper>
      <Header>
        <Title>감정 수거함 🗑</Title>
        <Word>예시</Word>
      </Header>
      <Field>
      </Field>
      <Bottom>
        <Button>
          <i class="fas fa-recycle"></i>
        </Button>
        <Button>
          <i class="fas fa-plus"></i>
        </Button>
      </Bottom>
    </Wrapper>
  )
};

export default MainPageUI;

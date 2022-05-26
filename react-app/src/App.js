import Button from './Button';
import Container from './Container';
import Input from './Input';
import Link from './Link';

const App = () => {
  return (
    <>
      <Link href='https://react-tutorial.app'>Shop online</Link>
      <Button type='button' disabled={false}>
        Button
      </Button>
      <Button type='button' disabled={true}>
        Button
      </Button>
      <Container>
        <p>Content</p>
      </Container>
      <Input placeholder='ID' name='id' />
      <Input type='email' placeholder='E-MAIL' name='email' />
    </>
  );
};

export default App;

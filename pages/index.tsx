import { Button } from '../components';
import { Htag } from '../components/Htag/Htag';

export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1"> Text </Htag>
      <Button appearance='primary'> Button1 </Button>
      <Button appearance='ghost' arrow='right'> Button2 </Button>
    </div>
  );
}

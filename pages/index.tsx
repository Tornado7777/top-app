import { Button, Htag, Tag, P } from '../components';


export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1"> Text </Htag>
      <Button appearance='primary'> Button1 </Button>
      <Button appearance='ghost' arrow='right'> Button2 </Button>
      <P size='small'> Маленький Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae recusandae officia cumque minima impedit error, quidem amet tenetur iste beatae quia architecto adipisci. Ipsa a recusandae cupiditate pariatur, expedita amet.</P>
      <P size='large'> Большой Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aut sapiente ad repellendus explicabo unde, asperiores quisquam itaque deserunt laboriosam odit ipsum excepturi eligendi quod? Nisi ex doloremque ab corrupti.
        Quas doloremque aliquam quod dolores minima, necessitatibus est maiores amet aut praesentium vitae repudiandae itaque neque vel delectus? Neque quos repellendus exercitationem sed obcaecati nisi delectus excepturi vel quisquam praesentium!
        ex excepturi sapiente, delectus commodi repellat, facere, repellendus hic impedit facilis culpa illo. Officiis quam iste impedit rerum pariatur? Voluptas vero nobis eius reprehenderit eum et. Ex, sint?</P>
      <P> Средний Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus doloribus magni ratione voluptates, facilis non esse recusandae facere nobis asperiores repudiandae in voluptatibus enim ullam corporis ipsa quod culpa.
        facilis, voluptatibus nesciunt labore rerum quasi magni consequuntur obcaecati iste quod aut veritatis, error tempora ipsam, provident natus dolorem totam? Ullam, sequi quia! Corporis cum obcaecati quibusdam dignissimos ut?</P>
      <Tag size='small'>Маленький тэг</Tag>
      <Tag size='middle'>Средний тэг</Tag>
      <Tag size='small' color='red'>Маленький тэг</Tag>
      <Tag size='middle' color='green'>Средний тэг</Tag>
      <Tag size='middle' color='grey'>Средний тэг</Tag>
      <Tag size='middle' color='primary'>Средний тэг</Tag>
      <Tag color='grey'>10</Tag>
    </div>
  );
}

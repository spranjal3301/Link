import Container from '@/components/global/container';
import Loader from '@/components/global/loader';
import { NextPage } from 'next'

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <Container>
        <Loader color='#004E8F'/>   
    </Container>
  );
}

export default Loading;
import Container from '@/components/global/container';
import Loader from '@/components/global/loader';
import LoaderOne from '@/components/ui/loader-one';

import { NextPage } from 'next'

interface Props {}

const Loading: NextPage<Props> = ({}) => {
  return (
    <Container className='w-full'>
         <LoaderOne />
    </Container>
  );
}

export default Loading;
import { cn } from '@/lib/utils';
import { NextPage } from 'next'

interface Props {
    className?:string;
    children:React.ReactNode;
}

const Container: NextPage<Props> = ({className,children}) => {
  return <div className={cn("container min-h-screen flex justify-center items-center",className)}>{children}</div>
}

export default Container;
import { cn } from '@/lib/utils';
import { NextPage } from 'next'

interface Props {
    className?:string;
    children:React.ReactNode;
}

const Container: NextPage<Props> = ({className,children}) => {
  return <div className={cn("min-[100dvh] flex justify-center items-center",className)}>{children}</div>
}

export default Container;
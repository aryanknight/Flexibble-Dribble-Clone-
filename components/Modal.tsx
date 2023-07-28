"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {useCallback,useRef,ReactNode} from 'react'

export default function Modal({children}:{children:ReactNode}) {
    const overlay=useRef<HTMLDivElement>(null);
    const wrapper=useRef<HTMLDivElement>(null);    
    const router=useRouter();
    const onDismiss=useCallback(()=>{
        router.push('/');
    },[router]);
    const handleClick=useCallback((e:React.MouseEvent)=>{
        if((e.target==overlay.current) && onDismiss){
            onDismiss();
        }
    },[onDismiss,overlay])

    return (
    <div ref={overlay} className="modal" onClick={handleClick}>
        <button type='button' onClick={onDismiss} className='absolute top-4 right-8'>
            <Image src={"/close.svg"} width={17} height={17} alt="close" />
        </button>
        <div ref={wrapper} className="modal_wrapper">
            {children}
        </div>
    </div>
  )
}
 
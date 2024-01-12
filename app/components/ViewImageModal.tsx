"use client"
import React, { useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogFooter
} from "@/app/components/ui/dialog";
import { Button } from './ui/button';
import { FaEye } from "react-icons/fa6";
import Image from 'next/image';

const ViewImageModal = () => {
    
    return (
        <Dialog>
            <DialogTrigger asChild className='text-black bg-transparent'>
                <Button className='mt-[-5px] hover:bg-transparent text-black'>
                    <FaEye size={30} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogFooter>
                    <Image 
                        src="" 
                        alt='user iamge' 
                        width={500}
                        height={500}
                        className='w-[25rem] h-auto'
                    />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ViewImageModal;
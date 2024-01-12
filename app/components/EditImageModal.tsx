"use client"
import React, { useEffect, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/app/components/ui/dialog";
import { Button } from './ui/button';
import { MdModeEdit } from "react-icons/md";
import Image from 'next/image';

const EditImageModal = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64Image = reader.result as string;
            setImage(base64Image);
            localStorage.setItem('uploadedImage', base64Image);
          };
    
          reader.readAsDataURL(file);
        }
    };
    
    return (
        <Dialog>
            <DialogTrigger asChild className='text-black bg-transparent'>
                <Button className='mt-[-5px] hover:bg-transparent text-black'>
                    <MdModeEdit size={30} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit user image</DialogTitle>
                    <DialogDescription>
                        <input 
                            type='file' 
                            accept="image/*" 
                            onChange={handleImageChange} 
                            placeholder='image' 
                        />
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className=''>
                    <div className='w-full flex items-center justify-center'>
                        {image && <Image src={image} alt="Uploaded" className='w-full' width={500} height={500} />}
                    </div>
                </DialogFooter>
                <Button type="submit">Save changes</Button>
            </DialogContent>
        </Dialog>
    )
}

export default EditImageModal
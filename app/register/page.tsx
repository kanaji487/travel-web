"use client"
import { useEffect, useState } from 'react';
import EditImageModal from '../components/EditImageModal';
import Image from 'next/image';
import ViewImageModal from '../components/ViewImageModal';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface AvatarProps {
    imageUrl: string | null | StaticImport;
}

const Page = ({ imageUrl }: AvatarProps) => {
    const [userImage, setUserImage] = useState<string | null>('');
    // const userAvatar = localStorage.getItem('uploadedImage');

    useEffect(() => {
        // ดึงข้อมูลรูปภาพจาก LocalStorage เมื่อโปรแกรมรีโหลด
        const storedImage = localStorage.getItem('uploadedImage');
        setUserImage(storedImage);
    }, []);

    return (
        <div>
            {/* Register form */}
            <div>
                <div className="flex flex-col items-center">
                    <div className="p-8 w-md space-y-3 bg-white rounded-lg shadow-md my-[129px] border-2 border-slate-500 drop-shadow-md">
                        <div className="flex items-center justify-center group">
                            <div className="rounded-full h-40 w-40 group-hover:opacity-50 group-hover:bg-slate-500">
                                {/* <Image
                                    src="/images/user.png"
                                    alt='user image'
                                    width={500}
                                    height={500}
                                    className='w-full h-auto rounded-full border-2 border-black'
                                /> */}
                                {imageUrl ? (
                                    <Image src={userImage!} alt="User Avatar" className="w-full h-auto rounded-full border-2 border-black" />
                                ) : (
                                    <Image
                                        src="/images/user.png"
                                        alt='user image'
                                        width={500}
                                        height={500}
                                        className='w-full h-auto rounded-full border-2 border-black'
                                    />
                                )}
                            </div>
                            <div className="hidden absolute transform group-hover:flex space-x-1">
                                <div className="text-black cursor-pointer ml-4">
                                    <ViewImageModal />
                                </div>
                                <div className="text-black cursor-pointer ml-4">
                                    <EditImageModal />
                                </div>
                            </div>
                        </div>
                        <form
                            className="flex flex-col mt-8"
                        // onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-4">
                                    <label className="text-black flex flex-col relative">
                                        Email
                                        <input
                                            type="text"
                                            // value={email}
                                            // onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Email"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Password
                                        <input
                                            type="password"
                                            // value={password}
                                            // onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Enter Password"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Confirm Password
                                        <input
                                            type="password"
                                            placeholder="Enter Confirm Password"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                </div>
                            </div>
                            <hr className="border border-black my-4" />
                            <h3 className="text-xl font-bold text-cyan-400">Infomation</h3>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-4">
                                    <label className="text-black flex flex-col">
                                        Company Name
                                        <input
                                            type="text"
                                            placeholder="Enter company name"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Tax ID
                                        <input
                                            type="text"
                                            placeholder="Enter Tax ID"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Full Name
                                        <input
                                            type="text"
                                            // value={fullName}
                                            // onChange={(e) => setFullName(e.target.value)}
                                            placeholder="Enter Full name"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <label className="text-black flex flex-col">
                                        Country
                                        <select className="border border-black w-[15rem]">
                                            <option value="thailand">Thailand</option>
                                        </select>
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Phone Number
                                        <div className="flex flex-row gap-2">
                                            <select className="border border-black w-16">
                                                <option value="66">+66</option>
                                                <option value="11">+11</option>
                                            </select>
                                            <input
                                                type="number"
                                                placeholder="Enter Phone number"
                                                className="border border-black px-2 w-[165px]"
                                            />
                                        </div>
                                    </label>
                                    <br />
                                    <label className="text-black flex flex-col">
                                        Website
                                        <input
                                            type="text"
                                            placeholder="Enter website"
                                            className="border border-black px-2"
                                        />
                                    </label>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <label className="text-black flex flex-col">
                                        Address
                                        <textarea
                                            placeholder="Enter Address"
                                            className="border border-black px-2 w-[15rem] h-full"
                                        />
                                    </label>
                                    <br />
                                    <div>
                                        <label className="text-black flex flex-col">
                                            State/Province
                                            <select className="border border-black w-[15rem]">
                                                <option>Choose Province</option>
                                            </select>
                                        </label>
                                        <br />
                                        <label className="text-black flex flex-col">
                                            Sub-District
                                            <select className="border border-black w-[235px]">
                                                <option>Choose Sub-District</option>
                                            </select>
                                        </label>
                                    </div>
                                    <br />
                                    <div className="flex flex-col">
                                        <label className="text-black flex flex-col">
                                            City/District
                                            <select className="border border-black w-[15rem]">
                                                <option>Choose District</option>
                                            </select>
                                        </label>
                                        <br />
                                        <label className="text-black flex flex-col">
                                            Zip Code
                                            <input
                                                type="number"
                                                placeholder="Enter Zip Code"
                                                className="border border-black px-2 w-[235px]"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-row justify-between">
                            <button className="bg-[#021E42] text-white rounded-full p-2 w-32">Cancle</button>
                            {/* <Link href="/tour">
              <button className="bg-[#5FC198] text-white rounded-full p-2 w-32">Submit</button>
            </Link> */}
                            <button className="bg-[#5FC198] text-white rounded-full p-2 w-32">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
import React from 'react'

type Props = {}

const Menulist = () => {
    return (
        <div>
            <div className="flex flex-wrap justify-center bg-white">
                <h2 className="w-full text-center text-2xl p-4">Lorem ipsum</h2>
                {/* Card 1 start */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src="/images/seaone.jpg" alt="Scenic view" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center text-black mb-2">Lorem ipsum</div>
                        <p className="text-gray-700 text-base text-center">
                            One-stop Platform community for<br />Agents and Operator in Thailand
                        </p>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                        <button className="bg-[#2A4B6A] text-white font-bold py-2 px-4 rounded-full">
                            Buy package
                        </button>
                    </div>
                </div>
                {/* Card 1 end */}
                {/* Card 2 start */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src="/images/seatwo.jpg" alt="Scenic view" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center text-black mb-2">Lorem ipsum</div>
                        <p className="text-gray-700 text-base text-center">
                            One-stop Platform community for<br />Agents and Operator in Thailand
                        </p>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                        <button className="bg-[#2A4B6A] text-white font-bold py-2 px-4 rounded-full">
                            Buy package
                        </button>
                    </div>
                </div>
                {/* Card 2 end */}
                {/* Card 3 start */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src="/images/seathree.jpg" alt="Scenic view" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center text-black mb-2">Lorem ipsum</div>
                        <p className="text-gray-700 text-base text-center">
                            One-stop Platform community for<br />Agents and Operator in Thailand
                        </p>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                        <button className="bg-[#2A4B6A] text-white font-bold py-2 px-4 rounded-full">
                            Buy package
                        </button>
                    </div>
                </div>
                {/* Card 3 end */}
                {/* Card 4 start */}
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
                    <img className="w-full" src="/images/seafour.jpg" alt="Scenic view" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl text-center text-black mb-2">Lorem ipsum</div>
                        <p className="text-gray-700 text-base text-center">
                            One-stop Platform community for<br />Agents and Operator in Thailand
                        </p>
                    </div>
                    <div className="px-6 py-4 flex justify-center">
                        <button className="bg-[#2A4B6A] text-white font-bold py-2 px-4 rounded-full">
                            Buy package
                        </button>
                    </div>
                </div>
                {/* Card 4 end */}
            </div>
        </div>
    )
}

export default Menulist;
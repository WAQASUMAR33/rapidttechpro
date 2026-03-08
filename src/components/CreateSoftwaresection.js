'use client'
import { useDispatch } from "react-redux";
import { openPopup } from "@/store/popupSlice";
export default function CreateSoftwareSection(){
    const dispatch = useDispatch();
    return(
        <>
        <div className="w-full bg-black text-white md:h-[300px] h-[200px] border flex flex-col justify-center items-center ">
            <div className="md:max-w-8xl rounded-full md:border-2 md:gap-4 flex md:flex-row flex-col justify-center items-center md:p-6 gap-2 py-4 px-2">
                <h1 className="md:text-4xl text-2xl">
                    Create Software with Us.
                </h1>
                <button onClick={() => dispatch(openPopup())} className="bg-white text-black rounded-full md:px-4 md:py-2 md:text-lg text-sm px-4 py-2 ">
                    Book Free Consultancy
                </button>
            </div>

        </div>
        
        </>
    )
}
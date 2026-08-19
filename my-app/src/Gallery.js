import children from "./assets/children.jpg"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import wave from "./assets/wave.svg"
import NavBar1 from "./NavBar1";
import Footer from "./Footer"

const data = Array.from({ length: 8 }, (_, i) => ({ id: i + 1, imgSrc: children }));

const Gallery = () => {
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState("");

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className={`fixed inset-0 z-[999] flex items-center justify-center bg-black transition-all duration-300 ${model ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"}`}>
                <img src={tempImgSrc} alt="children" className="max-h-full max-w-full py-5" />
                {model && <CloseIcon onClick={() => setModel(false)} className="fixed right-3 top-3 h-8 w-8 cursor-pointer bg-black/40 p-1 text-white" />}
            </div>
            <div className="grid w-full justify-items-center gap-10">
                <div className="w-full">
                    <NavBar1></NavBar1>
                    <img src={wave} alt="wave" className="-mt-px block w-full"/>
                </div>
                <div className="grid w-full max-w-5xl justify-items-center gap-8 px-6">
                    <p className="font-display text-5xl text-primary lg:text-7xl">Gallerie</p>
                    <div className="columns-1 gap-3 sm:columns-2 md:columns-3">
                        {data.map((item, index) => (
                            <div className="mb-3 cursor-pointer break-inside-avoid transition hover:opacity-80" key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} alt={`img${index}`} className="w-full rounded-lg" />
                            </div>
                        ))}
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Gallery;

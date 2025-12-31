import Image from "next/image";

function IconImage(path: string) {
    return (
        <>
            <Image src={path} alt="image" ></Image>
        </>
    );
}

export default IconImage;
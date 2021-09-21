import Image from "next/image";

function Header() {
    return (
        <div>
            {/* left */}
            <div>
                <Image 
                    src="https://linkspapareactcom/5me"
                    width={40}
                    height={40}
                    layout="fixed"
                 />
            </div>

            {/* center */}

            {/* right */}
        </div>
    )
}

export default Header

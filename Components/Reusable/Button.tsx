import Link from "next/link"

interface ButtonProps {
    buttonText: string;
    buttonLink: string;
    buttonTextSize: "text-sm" | "text-base";
}

const Button = ({ buttonText, buttonLink, buttonTextSize }: ButtonProps) => {
  return (
    <>
        <Link href={buttonLink}>
            <button className={`helvetica py-2 px-5 bg-[#070707] text-[#A3A3A3] ${buttonTextSize}`}>{buttonText}</button>
        </Link>
    </>
  )
}

export default Button
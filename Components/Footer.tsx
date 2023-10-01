import Button from "./Reusable/Button"

const Footer = () => {
  return (
    <footer className="flex items-center justify-start bg-[#D80101] pt-6 pb-12 mt-6 px-[1.25%]">
        <div>
            <h6 className="text-5xl xs:text-[3.25rem] leading-[1] lg:text-7xl xl:text-8xl 2xl:text-9xl mb-6">Let's work together.</h6>
            <div className="flex items-center gap-3">
                <Button buttonLink="/?target=none" buttonText="Message me on LinkedIn" buttonTextSize="text-base"/>
                <p className="helvetica">or</p>
                <Button buttonLink="/?target=none" buttonText="Fill out the form" buttonTextSize="text-base"/>
            </div>
        </div>
    </footer>
  )
}

export default Footer
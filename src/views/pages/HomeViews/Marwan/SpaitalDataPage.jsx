import Button from "../../../components/Button";

function SpaitalDataPage() {
    return (
        <div className="relative flex flex-col bg-[#031125] items-center justify-center overflow-hidden h-screen gap-8">
            <div className="relative flex flex-col items-center w-full max-w-[1552px] px-10 ">
                <p className="font-Roboto text-[50px] font-[900] leading-[90px] text-center justify-center capitalize text-white">
                    Ready to transform your spatial data?
                </p>

                <h3 className="font-Roboto text-[26px] font-[500] leading-[50px] text-center justify-center capitalize text-white">
                    Start your free trial today and experience the power of location intelligence
                </h3>
            </div>
            <div className="flex items-center gap-4">
                <Button 
                    text="Contact Us" 
                    variant="white"
                    className="py-4 md:py-5 px-10 md:px-16 text-lg md:text-2xl"
                    onClick={() => { }} 
                />
                <Button 
                    text="Request Demo" 
                    variant="primary"
                    className="py-4 md:py-5 px-10 md:px-16 text-lg md:text-2xl"
                    onClick={() => { }} 
                />
            </div>
        </div>
    );
}

export default SpaitalDataPage;
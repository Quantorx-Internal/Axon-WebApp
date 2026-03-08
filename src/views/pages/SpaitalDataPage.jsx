import Button from "../components/Button";

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
                    <Button text="Contact Us" bgColor="#FFFFFF" textColor="#026FE3" onClick={() => {}} />
                    <Button text="Request Demo" bgColor="#026FE3" textColor="#FFFFFF" onClick={() => {}} />
                </div>
        </div>
    );
}

export default SpaitalDataPage;
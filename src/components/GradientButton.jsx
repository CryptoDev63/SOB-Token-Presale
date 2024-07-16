const GradientButton = ({name, action}) => {
    return (
        <div className="flex justify-items-start mt-3 w-fit bg-gradient-to-r from-[#3C79D4] to-[#FFA6FA] p-[2px] rounded-sm">
            <button className="w-40 bg-gradient-to-r from-[#FF56F6] to-[#406AFF] text-sm text-white p-2 rounded-sm">{name}</button>
        </div>
    )
}

export default GradientButton
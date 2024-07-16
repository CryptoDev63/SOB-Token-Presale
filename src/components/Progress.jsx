const Progress = ({value}) => {
    const percent = 320 * value / 100 + 'px'
    const style = `text-xs text-[#FF8DF9] ml-[` + percent + `]`
    console.log("pooh, percent = ", `text-xs text-[#FF8DF9] m-[${percent}] mt-0 mb-0 mr-0`)

    return (
        <div className="mt-1">
            <div className="w-80 h-3 bg-[#E30E60] rounded-full">
                <div className="w-40 h-3 bg-[rgb(255,86,246)] rounded-full"/>
            </div>
            <div className={style}>{`%${value}`}</div>
        </div>
    )
}

export default Progress
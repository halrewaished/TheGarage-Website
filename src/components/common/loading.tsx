function Loading() {
    let circleCommonClasses = 'h-[15px] w-[15px] bg-yellow rounded-full';

    return (
        <div className='flex justify-center items-center pt-[400px]'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
}
export default Loading;
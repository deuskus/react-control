export const Preloader = () => {
    return (
        <div className='w-full h-[90dvh] flex justify-center items-center'>
            <div
                className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-success motion-reduce:animate-[spin_1.5s_linear_infinite]'>
            </div>
        </div>
    );
};
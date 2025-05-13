import {FC} from "react";

type PageProps = {
    page: number,
}

export const PageIndicator: FC<PageProps> = ({page}) => {
    return (
        <div className='flex justify-end items-center gap-4 mb-6 px-4'>
            <p className='text-xl font-semibold'>Page {page}</p>
        </div>
    );
};
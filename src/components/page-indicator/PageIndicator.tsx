import {FC} from "react";

type PageProps = {
    page: number,
}

export const PageIndicator: FC<PageProps> = ({page}) => {
    return (
        <div className='flex justify-center items-center gap-4 mb-6'>
            <p>Page {page}</p>
        </div>
    );
};
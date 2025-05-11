import {Link} from "react-router-dom";
import {FC} from "react";

export const HeaderLogo: FC<{title?: string}> = ({title = "NETFilms"}) => {
    return (
        <Link to='/'>
            <h3 className='font-bold text-white text-3xl tracking-wide'>
                {title}
            </h3>
        </Link>
    );
};
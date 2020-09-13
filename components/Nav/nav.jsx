import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";


const useNav = () => {
    const navState = useSelector((state) => state.isNavOpen)
    const dispatch = useDispatch()
    const isNavOpen = () =>
        dispatch({
            type: 'IS_NAV_OPEN',
        })

    return { navState, isNavOpen }
}


const Nav = () => {
    const { navState, isNavOpen } = useNav()
    return (
        <nav>
            <Link href="/">
                <a
                    onClick={isNavOpen}
                    style={{color : navState ? 'red' : 'aqua'}}
                >
                    Index
                </a>
            </Link>
        </nav>
    )
}

export default Nav
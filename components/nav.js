import navs from '../styles/nav.module.scss';

const Nav = (props) => {
    return (
        <div className={`${navs.container} flex justSpaced alignCenter`} >
            <div className={`flex alignCenter`} >
                <span className={`flex`} >
                    <svg width="32" height="28" viewBox="0 0 32 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.88492 26.1182L15.7077 2.17652L29.5304 26.1182H1.88492Z" fill="#161616" stroke="#F2F2F2" strokeWidth="2.17652"/>
                    </svg>
                </span>
                <span className={`${navs.name} mons`} >Design rade</span>
            </div>
            <div className={`${navs.links} roboto`}>
                <ul className={`${navs.linkList} flex`} >
                    <li className={`${props.no==1 && navs.active}`} >Home</li>
                    <li className={`${props.no==2 && navs.active}`}>Work</li>
                    <li className={`${props.no==3 && navs.active}`}>About</li>
                    <li className={`${navs.contact}`} >Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
import React, { useEffect, useState } from 'react'
import Footer from '../Footer-Header/Footer'
import Header from '../Header'

function Layout({ children }) {

    const [loginuser, setloginuser] = useState();

    useEffect(() => {
        const loginuserss = localStorage.getItem('token');
        setloginuser(loginuserss);
        console.log(loginuser?.length);
    }, []);
    return (<>
        <Header className="header-main" loginuser={loginuser} />
        <div className='' style={{ paddingBottom: "150px", paddingTop: "80px" }} >
            {children}
            <Footer />
        </div>
    </>
    )
}

export default Layout
import { Outlet } from "react-router-dom"



const Monitorings = ()=>{

    return (

        <>
            <h2>Monitorings</h2>
            <div className="container">
                <aside className="country-aside">
                    <ul>

                    </ul>
                </aside>
                <section className="country-section"> 
                    <Outlet />
                </section>
            </div>
        </>
    )

}


export default Monitorings
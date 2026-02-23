import SideNavbar from "@/components/Base/SideNavbar"
import Footer from "@/components/Base/Footer"
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";

export default function Labs(){
    return (
        <>
            <AnimatedBackground/>
            <main className={""}>
                <SideNavbar/>
            </main>
            <Footer/>
        </>
    )
}
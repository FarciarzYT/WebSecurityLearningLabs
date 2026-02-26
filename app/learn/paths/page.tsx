
import {AnimatedBackground} from "@/components/Base/AnimatedBackground";
import AltNavbar from "@/components/Base/AltNavbar";
import ModulesBoxOfModules from "@/components/learnDashBoardComponents/modules/ModulesBoxOfModules"
import Footer from "@/components/Base/Footer";



export default function modules(){
    return (
        <>
            <AnimatedBackground/>
            <main className={"flex flex-row justify-center mt-16"}>
                <aside>
                    <AltNavbar/>
                </aside>
                <section className={"flex flex-col"}>
                    <ModulesBoxOfModules />
                </section>
            </main>
            <Footer/>
        </>
    )
}
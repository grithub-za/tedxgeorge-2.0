import Footer from "@/components/nav/Footer";
import Header from "@/components/nav/Header";

function PageLayout({ children }){
    return(
        <>		
            <Header />

            <main className="w-100 mt-5 pt-5">
                {children}
            </main>

            <Footer />
        </>
    )
}

export default PageLayout;
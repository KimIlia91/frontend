import Header from "@/components/ui/headre";

export default function AdminLayout({
    children
}: Readonly<{
  children: React.ReactNode;
}>) {
    return(
        <main>
            {/* <Header /> */}
            {children}
        </main>
    )
}
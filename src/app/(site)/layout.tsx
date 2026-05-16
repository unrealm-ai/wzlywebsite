import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// 站点路由组布局：包裹所有公开页面，提供统一的 Header/Footer
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

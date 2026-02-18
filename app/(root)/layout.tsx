import Header from "@/components/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-h-screen">
      <Header
        user={{ id: "1", name: "John Doe", email: "john.doe@example.com" }}
      />
      <div className="container py-10">{children}</div>
    </main>
  );
};
export default Layout;

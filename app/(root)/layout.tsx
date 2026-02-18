const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="main-h-screen">
      <div className="container py-10">{children}</div>
    </main>
  );
};
export default Layout;

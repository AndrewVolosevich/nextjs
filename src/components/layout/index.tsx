import NavBar from "../navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />

      <main style={{ paddingTop: "40px" }}>{children}</main>
    </>
  );
}

export default Layout;

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <>
      <title>제목-about</title>

      {/* <header>
          <div className="flex items-center justify-between max-w-4xl px-4 py-8 mx-auto space-x-4">
            This is Header
          </div>
        </header> */}
      {children}
      {/* <footer>
          <div className="flex items-center justify-between max-w-4xl px-4 py-8 mx-auto space-x-4">
            This is Footer
          </div>
        </footer> */}
    </>
  );
}
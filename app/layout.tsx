import '@/styles/globals.css';

export const metadata = {
  title: '',
  description: '',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

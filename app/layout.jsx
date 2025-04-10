export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          Coverai
        </header>
        {children}
      </body>
    </html>
  )
}

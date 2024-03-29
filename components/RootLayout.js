export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js'
}

const RootLayout = ({ children }) => {
  return (
    <div className="flex h-screen justify-center items-center max-w-2xl mx-auto mt-3">
      {children}
    </div>
  )
}

export default RootLayout

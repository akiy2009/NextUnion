import Head from 'next/head';
export const metadata = {
  title: 'NextUnion - 技術で未来をつなぐ団体',
  description: 'NextUnionは技術提供を通じて未来を支える任意団体です。',
  openGraph: {
    title: 'NextUnion - 技術で未来をつなぐ団体',
    description: 'NextUnionは技術提供を通じて未来を支える任意団体です。',
    url: 'https://nextunion.jp/',
    images: ['https://nextunion.jp/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextUnion - 技術で未来をつなぐ団体',
    description: 'NextUnionは技術提供を通じて未来を支える任意団体です。',
    images: ['https://nextunion.jp/og-image.jpg'],
  },
};
export default function Home() {
    return (
      <>
        <Head>
        <title>NextUnion - 技術で未来をつなぐ団体</title>
        <meta name="description" content="NextUnionは技術提供を通じて未来を支える任意団体です。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="NextUnion - 技術で未来をつなぐ団体" />
        <meta property="og:description" content="NextUnionは技術提供を通じて未来を支える任意団体です。" />
        <meta property="og:image" content="https://nextunion.jp/og-image.jpg" />
        <meta property="og:url" content="https://nextunion.jp/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NextUnion - 技術で未来をつなぐ団体" />
        <meta name="twitter:description" content="NextUnionは技術提供を通じて未来を支える任意団体です。" />
        <meta name="twitter:image" content="https://nextunion.jp/og-image.jpg" />
      </Head>

      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
        <header className="bg-white shadow-md p-4 sticky top-0 z-20">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="flex items-center gap-2 text-3xl font-extrabold text-blue-700 tracking-tight">
            <img
              src="og-image.jpg"
              alt="NextUnion logo"
              className="w-8 h-8 object-contain"
            />
            NextUnion
          </h1>

            <nav className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base font-medium">
              <a href="#about" className="hover:text-blue-700 hover:underline transition">団体紹介</a>
              <a href="#activities" className="hover:text-blue-700 hover:underline transition">活動内容</a>
              <a href="#news" className="hover:text-blue-700 hover:underline transition">ニュース</a>
              <a href="#join" className="hover:text-blue-700 hover:underline transition">参加方法</a>
            </nav>
          </div>
        </header>
  
        <section className="py-24 bg-gradient-to-r from-blue-100 to-blue-200 text-center px-4">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800 tracking-tight">技術を世界へ、未来をつなぐ</h2>
          <p className="text-lg text-gray-700 max-w-screen-md mx-auto leading-relaxed">
            NextUnionは、技術提供により未来を支える任意団体です。
          </p>
        </section>
  
        <section id="about" className="py-20 px-4 bg-white">
          <div className="max-w-screen-md mx-auto">
            <h3 className="text-3xl font-semibold mb-6 text-blue-700">団体紹介</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              NextUnionは2025年に設立された任意団体です。技術支援を通じて、地域社会や企業の発展に寄与することを目指しています。私たちは、技術の力で人々の生活をより良くするための活動を行っています。
            </p>
          </div>
        </section>
  
        <section id="activities" className="py-20 bg-gray-100 px-4">
          <div className="max-w-screen-lg mx-auto">
            <h3 className="text-3xl font-semibold mb-10 text-blue-700 text-center">提供サービス内容</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <li className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                <h4 className="text-xl font-bold mb-2 text-blue-600">準備中</h4>
                <p className="text-gray-700">ここには説明を書きます。</p>
                <p className="text-sm text-gray-500 mt-2">
                  URL: <a href="https://nextunion.jp" className="text-blue-600 hover:underline">nextunion.jp</a>
                </p>
              </li>
            </ul>
          </div>
        </section>
  
        <section id="news" className="py-20 px-4 bg-white">
          <div className="max-w-screen-md mx-auto">
            <h3 className="text-3xl font-semibold mb-8 text-blue-700 text-center">最新ニュース</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition">
                <span className="font-semibold">2025/05/11</span> - NextUnionを設立しました！<br />
              </li>
            </ul>
          </div>
        </section>
  
        <section id="join" className="py-20 bg-blue-50 px-4">
          <div className="max-w-screen-md mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-4 text-blue-700">NextUnionに参加しよう</h3>
            <p className="mb-6 text-gray-700 text-lg leading-relaxed">
              誰でも歓迎！興味のある方はぜひご連絡ください。
            </p>
            <a
              href="https://discord.gg/JqKDT8MRK9"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold shadow-md"
            >
              Discordで参加する
            </a>
          </div>
        </section>
  
        <footer className="bg-gray-900 text-gray-300 text-sm h-16 flex items-center justify-center">
          <p>&copy; 2025 NextUnion. All rights reserved.</p>
        </footer>
      </div>
    </>
    );
  }  
  

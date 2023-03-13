import Head from "next/head"

export default function CustomHead() {
  return (
    <Head>
      <title>ばとめも（Pokemon Battle Memo）</title>
      <meta name="description" content="「ばとめも」はポケモン対戦中のメモ特化型アプリです。" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@konnyaku256" />
      <meta name="twitter:creator" content="@konnyaku256" />
      <meta property="og:url" content="https://pokemon-battle-memo.konnyaku256.dev/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="ばとめも公式サイト" />
      <meta
        property="og:description"
        content="「ばとめも」はポケモン対戦中のメモ特化型アプリです。"
      />
      <meta property="og:site_name" content="ばとめも公式サイト" />
      <meta
        property="og:image"
        content="https://pokemon-battle-memo.konnyaku256.dev/og-image.png"
      />
    </Head>
  )
}

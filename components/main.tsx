import Image from "next/image"

export default function Main() {
  return (
    <main className="min-h-screen pt-16 pb-16 flex flex-1 flex-col justify-center items-center text-gray-600 body-font">
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-20 items-center text-center">
          <h1 className="mb-5 sm:text-5xl text-2xl font-bold items-center xl:w-2/2 text-pk-battle-memo-main">
            ばとめもでメモろう。
          </h1>
          <p className="mb-4 sm:text-xl text-base text-gray-600">
            「ばとめも」はポケモン対戦中の<br className="sm:hidden"></br>メモ特化型アプリです。
            <br />
            対戦の中で少しずつ判明する相手の選出・特性・持ち物・技構成・テラスタイプなどの見えない情報を素早くメモできます。
          </p>
          <div className="flex justify-center">
            <div className="flex items-center justify-center max-w-3xl">
              <a
                className="pr-4"
                href="https://play.google.com/store/apps/details?id=com.konnyaku256.pokemon_battle_memo"
              >
                <Image src="/google-play-badge.png" width="233" height="70" />
              </a>
              <a href="">
                <Image src="/app-store-badge.svg" width="190" height="100" />
              </a>
            </div>
          </div>
        </div>
        <div className="xl:mr-44 lg:mb-0 md:pl-10 sm:mr-0 sm:mb-28 mb-0">
          <img className="w-80" src="./app_preview.jpeg"></img>
        </div>
      </div>
    </main>
  )
}

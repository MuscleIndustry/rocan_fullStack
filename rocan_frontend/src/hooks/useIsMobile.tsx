import { useEffect, useState } from "react";

/** スクリーンサイズがスマートフォンの大きさであるかどうかを判定するフック */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // ウィンドウのサイズをチェックしてステートを更新する関数
    const checkSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // コンポーネントがマウントされた時にチェックを実行
    checkSize();

    // ウィンドウのサイズが変更された時にチェックを実行
    window.addEventListener("resize", checkSize);

    // コンポーネントがアンマウントされた時にイベントリスナーを削除
    return () => window.removeEventListener("resize", checkSize);
  }, []); // 空の依存配列でエフェクトをマウント時とアンマウント時のみ実行

  return isMobile;
};

export default useIsMobile;

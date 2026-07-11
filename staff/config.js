// 従業員メニューLIFF 設定
window.CONFIG = {
  LIFF_ID: "2010665770-NS6OdmYT",
  GAS_URL: "https://script.google.com/macros/s/AKfycby76T9K2WXoJmvkSzpRnzrkGcAh_cHGwwARxyKu77sqH_KLuR9b9JlP3cQAlLDSh3jB/exec",

  // 週次・月次レポートは現行どおり kintone モバイル一覧ビューへ（LIFF内化は日報・現金出納帳のみ）
  KINTONE_LINK: {
    weekly:  "https://ny76p.cybozu.com/k/m/214/",
    monthly: "https://ny76p.cybozu.com/k/m/216/",
    mf_expense: "https://expense.moneyforward.com/",  // MFクラウド経費 ログイン（専用URLがあれば差替）
    mf_payroll: "https://payroll.moneyforward.com/"   // MFクラウド給与 ログイン（専用URLがあれば差替）
  },

  // 日報(app110) 店舗名 DROP_DOWN の正式選択肢（value は完全一致必須）
  NIPPOU_STORES: [
    "チラクシー伊勢佐木町店", "チラクシー麻布店", "チラクシー新宿店", "チラクシー渋谷店",
    "チラクシー博多店", "GC藤沢本店", "GC熊本店", "見本入力"
  ],
  // 天気１ DROP_DOWN
  WEATHER: ["晴れ", "雨", "雪", "曇り"],

  // 現金出納帳(app125) 店舗名 DROP_DOWN の正式選択肢
  CASH_STORES: [
    "チラクシー伊勢佐木町店", "チラクシー麻布店", "チラクシー新宿店", "チラクシー浅草店",
    "チラクシー原宿店", "グッチル藤沢本店", "グッチル百人町店", "伊勢佐木小口", "GS小口",
    "イベント", "見本入力"
  ],
  // 現金出納帳 明細「内容」DROP_DOWN の正式選択肢（value 完全一致必須）
  CASH_NAIYOU: [
    "現金売上", "ATM・銀行入金", "補充", "回収", "備品購入", "備品", "プリント代",
    "印刷・スキャン代", "仕入れ代金", "交通費精算", "経費精算", "通信費", "店舗電気料金",
    "配送運賃", "手数料", "両替手数料", "税金納付", "納付書支払い",
    "イベント用レジ金確保", "イベント用レジ金戻し", "レコード引継ぎ調整",
    "調整修正（用途不明入金）", "調整修正（用途不明出金）", "その他"
  ],
  // 現金出納帳のAirレジ当日取込 対応店舗（Cloud Run SUPPORTED_STORES と一致）
  CASH_AIRREGI_STORES: [
    "チラクシー伊勢佐木町店", "チラクシー新宿店", "チラクシー麻布店", "グッチル藤沢本店"
  ]
};

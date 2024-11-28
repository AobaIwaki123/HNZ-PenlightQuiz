# 日向坂46ペンライトクイズ

2024年11月時点のメンバーで、日向坂46のペンライトの色の組み合わせを当てるクイズを作成しました。  
2024/11/28: PWA対応しました！スマホでも楽しめるのでぜひライブ前の暇つぶしにどうぞ！

![alt text](./docs/imgs/image.png)

## 事前準備

- [データベースの作成手順](./docs/create-db.md)

## Quick Start

```sh
$ make init # .envファイルの作成
$ make up-dev # 開発環境の起動
$ make clean-restart-dev # 開発環境の再起動
```

## Release Deploy

```sh
$ make down-prod
$ make clean-up-prod
```

## デプロイページ

[日向坂46ペンライトクイズ](https://hnz.shaoba.tech/)

## 作業ログ

- [PWA対応](./docs/logs/pwa.md)

## 参考

- [Postgres Client v17のインストール手順](https://dev.to/johndotowl/postgresql-17-installation-on-ubuntu-2404-5bfi)
- https://github.com/prisma/prisma/discussions/5886

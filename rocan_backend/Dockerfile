# ビルドステージ
FROM golang:1.22 as builder

# 依存関係をダウンロード
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN CGO_ENABLED=0 GOOS=linux go build -v -o myapp .

# 開発ステージ
FROM golang:1.22 as development

# airのインストール
RUN go install github.com/cosmtrek/air@latest

# ワークディレクトリの設定
WORKDIR /app

# ホストマシンのソースコードをコンテナにマウントするための準備
COPY --from=builder /app .

# airを実行
CMD ["air", "-c", ".air.toml"]

# 実行ステージ
FROM alpine:latest as production

WORKDIR /root/

# MySQLクライアントと必要な依存関係をインストール
RUN apk --no-cache add mysql-client mariadb-connector-c-dev

# ビルドステージからビルドしたバイナリとスクリプトをコピー
COPY --from=builder /app/myapp .
COPY --from=builder /app/wait-for-db.sh .

# スクリプトを実行可能にする
RUN chmod +x ./wait-for-db.sh

# ポートを指定
EXPOSE 8080

# 実行コマンド
CMD ["./wait-for-db.sh", "db", "./myapp"]


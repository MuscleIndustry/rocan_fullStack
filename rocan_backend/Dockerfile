# 使用するGoのバージョンを指定
FROM golang:1.22 as builder

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピーし、ダウンロードする
COPY go.* ./
RUN go mod download

# ソースコードをコピー
COPY . .

# ビルドする
RUN CGO_ENABLED=0 GOOS=linux go build -v -o myapp

# 実行ステージ
FROM alpine:latest
WORKDIR /root/

# MySQLクライアントをインストール
RUN apk --no-cache add mysql-client mariadb-connector-c-dev

# wait-for-db.sh スクリプトを実行ステージのコンテナにコピー
COPY --from=builder /app/wait-for-db.sh .
# スクリプトを実行可能にする
RUN chmod +x ./wait-for-db.sh

# ビルドしたバイナリをコピー
COPY --from=builder /app/myapp .

# ポートを指定
EXPOSE 8080

# 実行コマンド
CMD ["./wait-for-db.sh", "db", "./myapp"]

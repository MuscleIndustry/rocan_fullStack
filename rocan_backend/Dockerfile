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
# ビルドしたバイナリをコピー
COPY --from=builder /app/myapp .
# ポートを指定
EXPOSE 8080
# 実行コマンド
CMD ["./myapp"]

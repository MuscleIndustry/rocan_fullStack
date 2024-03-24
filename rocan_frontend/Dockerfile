# ビルド環境
FROM node:20 as build

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係のファイルをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# ソースコードをコピー
COPY . .

# ビルドする
RUN yarn run build

# 実行環境
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# ポートを指定
EXPOSE 5173
CMD ["nginx", "-g", "daemon off;"]

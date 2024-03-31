package main

import (
	"fmt"
	"log"
	"os"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"rocan/api/comments"
	"rocan/api/posts"
	"rocan/api/user"
	"rocan/models"
)

// User モデルの定義
type User struct {
	gorm.Model
	Name  string
	Email string `gorm:"type:varchar(100);unique_index"`
}

func main() {
	// データベース接続設定
	connectInfo := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s?parseTime=true&loc=Local&charset=utf8mb4&tls=skip-verify&allowNativePasswords=true",
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DB_PORT"),
		os.Getenv("DB_NAME"),
	)

	db, err := gorm.Open(mysql.Open(connectInfo), &gorm.Config{})
	if err != nil {
		log.Fatal("データベース接続に失敗しました:", err)
	}

	// マイグレーションの実行
	log.Println("マイグレーションを開始します...")
	if err := db.AutoMigrate(&models.User{}, &models.Post{}, &models.Comment{}); err != nil {
		log.Fatalf("マイグレーションに失敗しました: %v", err)
	}
	log.Println("マイグレーションが完了しました。")

	// Ginルーターの初期化
	r := gin.Default()

	// db変数をpostsパッケージの変数に代入
	posts.Db = db

	// ルートエンドポイント
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// APIエンドポイントグループ
	api := r.Group("/api")
	{
		user.RegisterUserRoutes(api)
		posts.RegisterPostsRoutes(api)
		comments.RegisterCommentsRoutes(api)
	}

	// 8080ポートでリッスン
	r.Run()
}

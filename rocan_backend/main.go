package main

import (
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"

	"rocan/api/comments"
	"rocan/api/posts"
	"rocan/api/user"
)

// User モデルの定義
type User struct {
	gorm.Model
	Name  string
	Email string `gorm:"type:varchar(100);unique_index"`
}

func main() {
    // データベース接続
    dsn := "user:password@tcp(localhost:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"
    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
    if err != nil {
				log.Fatal(err)
        panic("データベースへの接続に失敗しました。")
    }

    // テーブルの自動マイグレーション（作成または更新）
    db.AutoMigrate(&User{})

	// Ginルーターの初期化
	r := gin.Default()

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


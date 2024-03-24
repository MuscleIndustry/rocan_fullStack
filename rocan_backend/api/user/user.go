package user

import (
	"github.com/gin-gonic/gin"
)

// RegisterUserRoutes はユーザー関連のルートを登録します。
func RegisterUserRoutes(r *gin.RouterGroup) {
	r.GET("/user", getUserInfo)
}

// getUserInfo はユーザー情報を取得するハンドラです。
func getUserInfo(c *gin.Context) {
	c.JSON(200, gin.H{
		"userID":   "1",
		"username": "user_name_1",
		"email":    "user1@example.com",
	})
}

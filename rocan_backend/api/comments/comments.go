package comments

import (
	"github.com/gin-gonic/gin"
)

// RegisterCommentsRoutes はコメント関連のルートを登録します。
func RegisterCommentsRoutes(r *gin.RouterGroup) {
	r.GET("/comments", getCommentsInfo)
}

// getCommentsInfo はコメント情報を取得するハンドラです。
func getCommentsInfo(c *gin.Context) {
	c.JSON(200, gin.H{
		"commentID": "1",
		"userID":    "1",
		"comment":   "This is a comment.",
	})
}

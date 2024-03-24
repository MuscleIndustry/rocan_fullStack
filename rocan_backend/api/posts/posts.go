package posts

import (
	"github.com/gin-gonic/gin"
)

// RegisterPostsRoutes は投稿関連のルートを登録します。
func RegisterPostsRoutes(r *gin.RouterGroup) {
	r.GET("/posts", getPostsInfo)
}

// getPostsInfo は投稿情報を取得するハンドラです。
func getPostsInfo(c *gin.Context) {
	c.JSON(200, gin.H{
		"postID": "1",
		"title":  "Post Title",
		"body":   "This is a sample post.",
	})
}

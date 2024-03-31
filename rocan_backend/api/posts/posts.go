package posts

import (
	"rocan/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var Db *gorm.DB

// RegisterPostsRoutes は投稿関連のルートを登録します。
func RegisterPostsRoutes(r *gin.RouterGroup) {
	r.GET("/posts/info", getPostsInfo) // 既存のエンドポイント
	r.GET("/posts/list", listPosts)
	r.POST("/posts/create", createPost)
	r.PUT("/posts/edit/:postID", editPost)
	r.DELETE("/posts/delete/:postID", deletePost)
}

func listPosts(c *gin.Context) {
	var posts []models.Post
	if result := Db.Find(&posts); result.Error != nil {
		c.JSON(500, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(200, posts)
}

func createPost(c *gin.Context) {
	// ここに投稿データをデータベースに登録するロジックを実装します。
	// サンプルレスポンス
	c.JSON(201, gin.H{"message": "Post created"})
}

func editPost(c *gin.Context) {
	// ここに投稿データを編集するロジックを実装します。
	// サンプルレスポンス
	postID := c.Param("postID")
	c.JSON(200, gin.H{"message": "Post edited", "postID": postID})
}

func deletePost(c *gin.Context) {
	// ここに投稿データを削除するロジックを実装します。
	// サンプルレスポンス
	postID := c.Param("postID")
	c.JSON(200, gin.H{"message": "Post deleted", "postID": postID})
}

// getPostsInfo は投稿情報を取得するハンドラです。
func getPostsInfo(c *gin.Context) {
	c.JSON(200, gin.H{
		"postID": "1",
		"title":  "Post Title",
		"body":   "This is a sample post.",
	})
}

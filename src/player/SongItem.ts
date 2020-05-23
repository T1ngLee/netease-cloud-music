interface SongItem {
  id: number, // 歌曲id
  name: string, // 歌曲名称
  alias: string, // 歌曲别名，有别名取别名，无别名取翻译名，都没有则为空
  artists: string, // 艺术家
  time: number, // 歌曲时间长度，微秒
  showTime: string, // 展示在页面的歌曲时间长度，如 03:51
  source: string, // 歌曲来源，可能得加个枚举值
  album: string, // 专辑
  url: string // 链接
}

export default SongItem
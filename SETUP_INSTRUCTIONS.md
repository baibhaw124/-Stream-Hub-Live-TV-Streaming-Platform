# 🎬 StreamHub Player - Setup Instructions

## ⚠️ IMPORTANT: Why Videos Aren't Playing

The player interface is **fully functional**, but you need to **add your own video stream URLs** to make videos play.

### Current Issue
The placeholder URLs (`YOUR_STREAM_URL_HERE.m3u8`) are not real streams - you must replace them with actual streaming URLs from your video source.

## 📍 Where to Add Your Stream URLs

**File Location:** `/app/frontend/public/player.html`

**Search for:** Line containing `const mockChannels = {`

## 🔧 How to Add Your Streams

### Step 1: Open the File
```bash
# View the file
cat /app/frontend/public/player.html | grep -A 30 "const mockChannels"
```

### Step 2: Replace Placeholder URLs

Find this section in the HTML file (around line 898):
```javascript
const mockChannels = {
    live: [
        // Entertainment - REPLACE WITH YOUR STREAM URLs
        { 
            id: 1, 
            name: 'Sony Entertainment', 
            category: 'Entertainment', 
            type: 'live', 
            stream: 'YOUR_STREAM_URL_HERE.m3u8',  // ⬅️ CHANGE THIS
            format: 'hls', 
            logo: '', 
            quality: 'HD' 
        },
        // ... more channels
    ],
```

### Step 3: Add Real Stream URLs

Replace `YOUR_STREAM_URL_HERE.m3u8` with actual URLs:

```javascript
// Example with real HLS stream
{ 
    id: 1, 
    name: 'Sony Entertainment', 
    category: 'Entertainment', 
    type: 'live', 
    stream: 'https://your-cdn.com/sony/index.m3u8',  // ✅ Real URL
    format: 'hls', 
    logo: '', 
    quality: 'HD' 
},

// Example with MP4 video
{ 
    id: 101, 
    name: 'Movie Name', 
    category: 'Movies', 
    type: 'vod', 
    stream: 'https://your-server.com/videos/movie.mp4',  // ✅ Real URL
    format: 'mp4', 
    logo: '', 
    quality: 'FHD' 
},
```

## 🎥 Supported Stream Formats

### 1. HLS Streams (.m3u8)
```javascript
{
    stream: 'https://example.com/stream.m3u8',
    format: 'hls'
}
```
**Best for:** Live TV, adaptive streaming

### 2. MP4 Videos
```javascript
{
    stream: 'https://example.com/video.mp4',
    format: 'mp4'
}
```
**Best for:** VOD content, direct video files

### 3. DASH Streams (.mpd)
```javascript
{
    stream: 'https://example.com/stream.mpd',
    format: 'dash'
}
```
**Best for:** High-quality adaptive streaming

## 📝 Quick Edit Example

### Using Command Line
```bash
# Navigate to the file
cd /app/frontend/public

# Edit with your preferred editor
nano player.html
# or
vim player.html

# Find the mockChannels section and replace URLs
```

### Example Replacement
**Before:**
```javascript
{ id: 1, name: 'Sony Entertainment', stream: 'YOUR_STREAM_URL_HERE.m3u8', format: 'hls' }
```

**After:**
```javascript
{ id: 1, name: 'Sony Entertainment', stream: 'https://stream.example.com/sony.m3u8', format: 'hls' }
```

## 🔗 Where to Get Stream URLs?

### Option 1: Your Own Content
- Use your video hosting service URLs
- Upload videos to your CDN
- Use your streaming server URLs

### Option 2: Test with Public Streams
Some public test streams you can try:
```javascript
// Big Buck Bunny HLS (Akamai)
'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8'

// Apple HLS Test Stream
'https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8'

// Sintel Movie (Blender)
'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
```

### Option 3: Video CDN Services
- **Cloudflare Stream**
- **AWS CloudFront**
- **Azure Media Services**
- **Bunny CDN**
- **Vimeo API**

## 🚀 After Adding URLs

1. **Save the file**
2. **Refresh the browser** at `http://localhost:3000/player.html`
3. **Click any channel card**
4. **Video should now play!**

## 🐛 Troubleshooting

### Problem: "Failed to load because no supported source was found"
**Solution:** 
- Check if your URL is accessible
- Verify the URL format is correct
- Ensure CORS is enabled on your video server

### Problem: "HLS Error: manifestIncompatibleCodecsError"
**Solution:**
- Use a different stream URL
- Ensure stream uses H.264 video codec
- Try MP4 format instead

### Problem: Video doesn't autoplay
**Solution:**
- This is normal browser behavior
- Click the "Play" button
- Most browsers block autoplay until user interaction

### Problem: CORS Error
**Solution:** 
Your video server needs to allow cross-origin requests. Add these headers:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, HEAD
```

## 📊 Stream Requirements

### For Best Performance
- **Video Codec:** H.264 (AVC)
- **Audio Codec:** AAC
- **Container:** MP4 or HLS (.m3u8)
- **Resolution:** 720p or 1080p
- **Bitrate:** 2-8 Mbps

### HLS Playlist Structure
```
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=1280000,RESOLUTION=854x480
480p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=2560000,RESOLUTION=1280x720
720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=5120000,RESOLUTION=1920x1080
1080p.m3u8
```

## 🎯 Example Configuration

Here's a complete example with real test streams:

```javascript
const mockChannels = {
    live: [
        {
            id: 1,
            name: 'Demo Channel 1',
            category: 'Entertainment',
            type: 'live',
            stream: 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8',
            format: 'hls',
            logo: '',
            quality: 'HD'
        },
        {
            id: 2,
            name: 'Demo Channel 2',
            category: 'Movies',
            type: 'live',
            stream: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
            format: 'hls',
            logo: '',
            quality: 'HD'
        }
    ],
    vod: [
        {
            id: 101,
            name: 'Demo Movie',
            category: 'Movies',
            type: 'vod',
            stream: 'https://download.blender.org/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4',
            format: 'mp4',
            logo: '',
            quality: 'FHD'
        }
    ]
};
```

## ✅ Verification Checklist

After adding your URLs, verify:
- [ ] All URLs are accessible (try opening in browser)
- [ ] URLs have correct format (.m3u8, .mp4, .mpd)
- [ ] CORS is enabled on your server
- [ ] Format field matches URL type (hls, mp4, dash)
- [ ] Browser console shows no errors
- [ ] Click play button if autoplay is blocked

## 💡 Pro Tips

1. **Test URLs First:** Open stream URLs in VLC or browser before adding
2. **Use CDN:** Host videos on CDN for better performance
3. **Adaptive Streaming:** Use HLS for automatic quality adjustment
4. **Multiple Qualities:** Provide different quality URLs in HLS manifest
5. **Thumbnails:** Add poster images to `logo` field for better UX

## 📚 Additional Resources

- **HLS Spec:** https://datatracker.ietf.org/doc/html/rfc8216
- **DASH Spec:** https://dashif.org/
- **hls.js Docs:** https://github.com/video-dev/hls.js
- **dash.js Docs:** https://github.com/Dash-Industry-Forum/dash.js

## 🎉 Once Configured

After adding your real stream URLs, the player will:
- ✅ Play all videos smoothly
- ✅ Support channel switching
- ✅ Enable quality selection
- ✅ Show proper loading states
- ✅ Handle errors gracefully
- ✅ Work on all devices

---

**Need Help?** 
The player code is fully functional - you just need valid stream URLs to make it work!

**Current Status:** 
- ✅ UI: Complete
- ✅ Controls: Working
- ✅ Features: Implemented
- ⏳ Streams: **Waiting for your URLs**

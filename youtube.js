      // Define function for uploading video to YouTube using the YouTube Data API
      const { google } = require('googleapis');
      const youtube = google.youtube('v3');

      async function uploadVideo(filePath) {
        const res = await youtube.videos.insert({
          part: 'id,snippet,status',
          requestBody: {
            snippet: {
              title: 'My video title',
              description: 'This is a description of my video',
              tags: ['tag1', 'tag2'],
              categoryId: '22',
            },
            status: {
              privacyStatus: 'private',
            },
          },
          media: {
            body: fs.createReadStream(filePath),
          },
        });
        console.log(res.data);
      }
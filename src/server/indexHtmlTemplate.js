export const indexHtmlTemplate = (content, token)=>`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Reddit App Andrey</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}';//токен приходит из server.js после аксиос ответа
    </script>
</head>
<body>
    <div id="react_root">${content}</div>
    <div id="modal_root"></div>
</body>
</html>
`;
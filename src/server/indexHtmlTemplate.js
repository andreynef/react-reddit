export const indexHtmlTemplate = (content)=>`
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Reddit</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="/static/client.js" type="application/javascript"></script>
</head>
<body>
    <div id="react_root">${content}</div>
</body>
</html>
`;
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>AFF | African Forest Forum </title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <link href="https://cdn.quilljs.com/1.2.6/quill.snow.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="{{secure_asset('css/app.css')}}"> -->
</head>
<body>
    <div id="app" class="h-full w-full" style="height: 100vh;">
        <app></app>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
    <script src=//unpkg.com/vue></script>
    <script src="https://www.gstatic.com/charts/loader.js"></script>
</body>
</html>

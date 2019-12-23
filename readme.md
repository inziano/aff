# Installation Guide

Please check the official laravel installation guide for server requirements before you start. 
https://laravel.com/docs/6.x/installation

Clone the repository

```git
git clone https://github.com/inziano/aff.git
```

Switch to the repo folder

```bash
cd affintranet
```

Install dependencies using composer
```bash
composer install
```

Install node dependencies using npm
```bash
npm install
```
Make the required configuration changes in the .env file

Make sure you set the correct database connection information before running the migrations

Run database migrations

```bash
php artisan migrate
```

Serve application on your local machine

```bash
php artisan serve
```
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

The project uses Minio Server as a stand-in replacement for AWS. 

You can install minio by following the guide here https://docs.min.io/

This guide will help you get started with minio and laravel
https://github.com/minio/cookbook/blob/master/docs/how-to-use-minio-as-laravel-file-storage.md

Configuration has been done, so just add the Minio_Secret and Minio_Key to the .env file once you start the minio server

```env
MINIO_KEY=YOUR_MINIO_KEY
MINIO_SECRET=YOUR_MINIO_SECRET
```

Make sure you set the correct database connection information before running the migrations

Run database migrations

```bash
php artisan migrate
```
Run database seeder to generate fake data for db - Optional, use only in testing not production

```bash
php artisan db:seed
```

Serve application on your local machine

```bash
php artisan serve
```

The project is dependent on websockets to provide real time updates. 

Start the websocket server in the terminal to enable in

```bash
php artisan websockets:serve
```


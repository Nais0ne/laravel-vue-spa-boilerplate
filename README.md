A simple laravel-vuejs boilerplate

## Includes: ##
* Laravel 5.6
* Vue 2.5.7
* Vue-Fontawesome 5
* JWT auth 1.0.0-rc.2
* axios
* Vuex
* Vuex-router-sync
* hot module replacement

.. and a super basic structure, especially good for beginners.

## Installation: ##
1. Clone this repo
2. `composer install`
3. `yarn` or `npm install`
4. rename __.env.example__ to __.env__
5. edit your credentials in __.env__
6. `php artisan key:generate`
7. `php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"`
8. `php artisan jwt:secret`
9. `php artisan migrate`
10. `php artisan db:seed`
11. `yarn hot` or `npm run hot`

## Usage: ##
With seeding there should be a user pre-defined in your database. When you open the app and look in your console, there should be a ajax-response which should look like:

`{`
`    "access_token":` `"...",`
`    "token_type": "bearer",`
`    "expires_in": 3600`
`}`

If it does, your JWT works as intended.

__api.php__ contains api routes
__router.js__ contains vue-router routes
__app.js__ contains global imports/uses

If you want to use fontawesone icons, add more to the library just like the example in __app.js__ (the coffee icon)

fontawesome package used: https://github.com/FortAwesome/vue-fontawesome#upgrading-font-awesome

<template>
    <div>
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Stocker</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link class="nav-link active" to="/">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/Chart">Chart</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/randomDice">滿天星空</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Nuxt />
        <nav class="navbar sticky-bottom navbar-expand-lg navbar-light bg-light">
            <div class="container-md">
                <a class="navbar-brand" href="#">By. Ray</a>
            </div>
        </nav>
    </div>
</template>
